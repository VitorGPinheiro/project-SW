import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const SpaceBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<THREE.Audio | null>(null);
  const spaceshipRef = useRef<THREE.Group | null>(null);
  // Ref para guardar TODOS os objetos 3D e limpar depois
  const sceneObjectsRef = useRef<THREE.Group[]>([]); 

  useEffect(() => {
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    if (!mountRef.current) return;

    // --- OTIMIZAÇÃO 1: Configuração da Cena e Renderer ---
    const scene = new THREE.Scene();
    
    // Diminuir o Far da câmera se possível (de 5000 para 1000 ajuda no Z-buffer)
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ 
        antialias: true, // Se quiser MAIS performance, mude para false (mas fica serrilhado)
        powerPreference: "high-performance" // Pede prioridade para a GPU
    });
    
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // --- OTIMIZAÇÃO CRÍTICA: Limitar o Pixel Ratio ---
    // Isso impede que celulares retina renderizem em 4k desnecessariamente
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    mountRef.current.appendChild(renderer.domElement);

    // Iluminação
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.5);
    sunLight.position.set(5, 5, 5);
    scene.add(sunLight);

    const fillLight = new THREE.PointLight(0x0000ff, 1.5);
    fillLight.position.set(-5, -5, -2);
    scene.add(fillLight);

    // Áudio
    const listener = new THREE.AudioListener();
    camera.add(listener);
    const sound = new THREE.Audio(listener);
    const audioLoader = new THREE.AudioLoader();

    audioLoader.load('./SwOstFinale.mp3', (buffer) => {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.4);
      audioRef.current = sound;
    });

    // Estrelas
    const starsCount = 8000; // Reduzi levemente de 10k para 8k (quase imperceptível visualmente)
    const positions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2000;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.2,
      sizeAttenuation: true
    });
    const starMesh = new THREE.Points(starGeometry, starMaterial);
    scene.add(starMesh);

    // --- OTIMIZAÇÃO 2: Reutilizar o Loader e Gerenciar Modelos ---
    const loader = new GLTFLoader();
    
    // Função auxiliar para carregar e configurar modelos
    const loadModel = (path: string, scale: number, pos: [number, number, number], rot: [number, number, number], isMainShip = false) => {
        loader.load(path, (gltf) => {
            const model = gltf.scene;
            model.scale.set(scale, scale, scale);
            model.position.set(...pos);
            model.rotation.set(...rot);
            
            // Otimização de renderização do objeto
            model.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                    // Evita cálculos desnecessários de sombra se não estiver usando
                    child.castShadow = false; 
                    child.receiveShadow = false;
                }
            });

            scene.add(model);
            
            // Adiciona ao array de referência para limpeza
            sceneObjectsRef.current.push(model);

            if (isMainShip) {
                spaceshipRef.current = model;
            }
        }, undefined, (error) => console.error(`Erro ao carregar ${path}:`, error));
    };

    // Carregando os 3 modelos com a função auxiliar
    loadModel('./DI.glb', 0.1, [0.1, -2.5, -310.0], [0.9, 0, 0], true);
    loadModel('./ECD.glb', 0.5, [2, 2, -230.0], [1, 2, 0]);
    loadModel('./OE.glb', 4, [28, 0, -230.0], [1, 1.5, 0]);


    // Loop de Animação
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      starMesh.rotation.y += 0.0004;
      
      if (spaceshipRef.current) {
        // Interpolação suave (Lerp) deixa o movimento menos "travado"
        // Mas sua lógica atual é leve, mantive ela:
        camera.position.y = -(scrollY * 0.05); 
        camera.lookAt(spaceshipRef.current.position);
      }

      renderer.render(scene, camera);
    };

    animate();

    // --- CLEANUP (LIMPEZA) ---
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
      
      // Dispose de geometrias básicas
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();

      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Limpeza PROFUNDA de todos os modelos carregados
      sceneObjectsRef.current.forEach((model) => {
          scene.remove(model);
          model.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              (child as THREE.Mesh).geometry.dispose();
              
              // Verifica se é um array de materiais ou único
              const material = (child as THREE.Mesh).material;
              if (Array.isArray(material)) {
                  material.forEach(m => m.dispose());
              } else {
                  (material as THREE.Material).dispose();
              }
            }
          });
      });
      sceneObjectsRef.current = []; // Zera o array
    };

  },[]); 

  const handleStart = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // ... (Mantenha seus estilos iguais)
  const canvasStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#000'
  };
  const overlayStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
    backgroundColor: '#000', display: 'flex', justifyContent: 'center',
    alignItems: 'center', zIndex: 100
  };
  const buttonStyle: React.CSSProperties = {
    padding: '20px 40px', backgroundColor: 'transparent', color: '#FFE81F',
    border: '2px solid #FFE81F', borderRadius: '4px', cursor: 'pointer',
    fontSize: '20px', fontWeight: 'bold', letterSpacing: '4px', transition: '0.3s',
    boxShadow: '0 0 15px rgba(255, 232, 31, 0.3)'
  };

  return (
    <>
      <div ref={mountRef} style={canvasStyle} />
      {!isPlaying ? (
        <div style={overlayStyle}>
          <button style={buttonStyle} onClick={handleStart}>
            Go for darkside
          </button>
        </div>
      ) : (
        <div style={{ height: '2000vh', width: '100%', position: 'relative' }}>
          {/* Conteúdo scrollável aqui */}
        </div>
      )}
    </>
  );
};

export default SpaceBackground;