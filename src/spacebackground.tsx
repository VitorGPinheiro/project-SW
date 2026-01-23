import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


const SpaceBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<THREE.Audio | null>(null);

  // --- NOVAS VARIÁVEIS PARA A ANIMAÇÃO ---
  // 1. Referência da nave (trouxemos de volta)
  const spaceshipRef = useRef<THREE.Group | null>(null);
  // 2. Controle se a animação está rodando
  const isAnimatingRef = useRef(false);

 
  useEffect(() => {
    if (!mountRef.current) return;
     // 3. Definição dos Pontos A e B
  // Ponto A: Onde ela está agora (longe e embaixo)
  const startPosition = new THREE.Vector3(0, -2, -310);
  // Ponto B: Destino (Passando por cima da câmera, que está em Z=50)
  const targetPosition = new THREE.Vector3(0, 15, 300);
    // --- 1. CONFIGURAÇÃO DA CENA ---
    const scene = new THREE.Scene();

    // Iluminação
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.5);
    sunLight.position.set(5, 5, 5);
    scene.add(sunLight);

    const fillLight = new THREE.PointLight(0x0000ff, 1.5);
    fillLight.position.set(-5, -5, -2);
    scene.add(fillLight);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // --- 2. SISTEMA DE ÁUDIO ---
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const sound = new THREE.Audio(listener);
    const audioLoader = new THREE.AudioLoader();

    audioLoader.load('/The Imperial March.mp3', (buffer) => {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.4);
      audioRef.current = sound;
    });

    // --- 3. CRIAÇÃO DAS ESTRELAS ---
    const starsCount = 10000;
    const positions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2000;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.8,
      sizeAttenuation: true
    });
    const starMesh = new THREE.Points(starGeometry, starMaterial);
    scene.add(starMesh);

    camera.position.z = 50;

    // --- 4. CARREGAMENTO DA NAVE (ESTÁTICA) ---
    const loader = new GLTFLoader();

    loader.load(
      '/destruidor_imperial.glb',
      (gltf: any) => {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5);

        model.position.copy(startPosition);
        
        model.rotation.set(0.9, 0, 0);
        spaceshipRef.current = model;
        scene.add(model);

      },
      (xhr: ProgressEvent) => {
        const percent = (xhr.loaded / xhr.total) * 100;
        console.log(`${percent}% carregado`);
      },
      (error: any) => {
        console.error('Erro ao carregar a nave:', error);
      }
    );

    // --- 5. ANIMAÇÃO (Apenas Estrelas) ---
    const animate = () => {
      requestAnimationFrame(animate);

      // Apenas o fundo se move
      starMesh.rotation.y += 0.0004;
      starMesh.rotation.x += 0.0001;
      // --- NOVA LÓGICA DE MOVIMENTO DA NAVE ---
  // Se o botão foi clicado (isAnimatingRef é true) E a nave já carregou:
  if (isAnimatingRef.current && spaceshipRef.current) {
    
    // O PODER DO LERP:
    // "Pegue a posição atual e mova 1.5% (0.015) em direção ao alvo"
    spaceshipRef.current.position.lerp(targetPosition, 0.0010);

    // (Opcional) Rotação suave para ela "levantar o bico" enquanto sobe
    // Alvo da rotação X: -0.2 (um pouco para cima)
    spaceshipRef.current.rotation.x = THREE.MathUtils.lerp(spaceshipRef.current.rotation.x, -0.2, 0.002);
    
    // DICA: Se quiser mais rápido, aumente o 0.015 para 0.03, por exemplo.
  }
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // --- 6. LIMPEZA ---
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      starGeometry.dispose();
      starMaterial.dispose();
      if (sound.isPlaying) sound.stop();
    };
  }, []);

  const handleStart = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
      isAnimatingRef.current = true;
    }
  };

  return (
    <>
      {!isPlaying && (
        <div style={overlayStyle}>
          <button onClick={handleStart} style={buttonStyle}>
            EXPLORAR O IMPÉRIO
          </button>
        </div>
      )}
      <div ref={mountRef} style={canvasStyle} />
    </>
  );
};

const canvasStyle: React.CSSProperties = {
  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#000'
};

const overlayStyle: React.CSSProperties = {
 position: 'fixed', 
  top: 0, 
  left: 0, 
  width: '100vw', // Garantindo que cubra a tela toda
  height: '100vh',
  backgroundColor: '#000', 
  display: 'flex', 
  justifyContent: 'center',
  alignItems: 'center', 
  zIndex: 100 // Aumentamos para 100 para ficar na frente de TUDO
};

const buttonStyle: React.CSSProperties = {
  padding: '20px 40px', backgroundColor: 'transparent', color: '#FFE81F',
  border: '2px solid #FFE81F', borderRadius: '4px', cursor: 'pointer',
  fontSize: '20px', fontWeight: 'bold', letterSpacing: '4px', transition: '0.3s',
  boxShadow: '0 0 15px rgba(255, 232, 31, 0.3)'
};

export default SpaceBackground;