import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const SpaceBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<THREE.Audio | null>(null);
  const spaceshipRef = useRef<THREE.Group | null>(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => 
    
    {let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    if (!mountRef.current) return;

    // Pontos de animação
    

    // Configuração da Cena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 5000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
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

    audioLoader.load('./The Imperial March.mp3', (buffer) => {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.4);
      audioRef.current = sound;
    });

    // Estrelas
    const starsCount = 10000;
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


    // Carregar Nave


    const loader = new GLTFLoader();
    loader.load('./destruidor_imperial.glb',(gltf) => {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5);
        model.position.set(0.1, -2.5, -310.0);
        model.rotation.set(0.9, 0, 0);
        spaceshipRef.current = model;
        scene.add(model);
      },undefined,(error) => console.error ('Erro ao carregar a nave:', error));

   const newexecutor = new GLTFLoader();
    newexecutor.load('./ExecutorClassStarDestroyer.glb',(gltf: any) => {
      const newexe =gltf.scene;
      newexe.scale.set(10,10,10);
      newexe.position.set(0,0,0);
      newexe.rotation.set(0, 0, 0);
      scene.add(newexe);});
    
    const oldexecutor = new GLTFLoader();
    oldexecutor.load('./oldexecutor.glb',(gltf: any) => {
      const oldexe =gltf.scene;
      oldexe.scale.set(10,10,10);
      oldexe.position.set(0,0,0);
      oldexe.rotation.set(0, 0, 0);
      scene.add(oldexe);});
    



    // Loop de Animação
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      starMesh.rotation.y += 0.0004;
      if (spaceshipRef.current) {
        // 1. A câmera desce conforme você rola (scrollY * fator)
        // Começa em 0 e vai ficando negativo para "descer"
        camera.position.y = -(scrollY * 0.05); 
        
        // 2. A câmera continua olhando para a nave
        // Isso faz com que você veja a parte de baixo dela conforme desce
        camera.lookAt(spaceshipRef.current.position);
      }

      renderer.render(scene, camera);

      //Animação da câmera


    };

    animate();

    // --- ESSA PARTE ABAIXO É O QUE IMPEDE O SITE DE FICAR PESADO ---
    return () => {
      cancelAnimationFrame(animationId); // Para o loop ao sair da página
      
      // Limpa a memória da GPU
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();

      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Se a nave estiver carregada, limpa ela também
      if (spaceshipRef.current) {
        spaceshipRef.current.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).geometry.dispose();
            ((child as THREE.Mesh).material as THREE.Material).dispose();
          }
        });
      }
    };

  },[]); // O array vazio garante que isso rode APENAS UMA VEZ

  const handleStart = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
      isAnimatingRef.current = true;
    }
  };


  // Estilos
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
      {/* O Canvas fica sempre ao fundo */}
      <div ref={mountRef} style={canvasStyle} />

      {/* Se NÃO estiver tocando, mostra o botão de início */}
      {!isPlaying ? (
        <div style={overlayStyle}>
          <button style={buttonStyle} onClick={handleStart}>
            Go for darkside
          </button>
        </div>
      ) : (
        /* Se ESTIVER tocando, mostra a div que permite o scroll */
        <div style={{ height: '2000vh', width: '100%', position: 'relative' }}>
          {/* Você pode colocar textos aqui dentro. 
             Use position: absolute ou sticky neles se quiser que apareçam 
             em pontos específicos da rolagem.
          */}
        </div>
      )}
    </>
  );



};

export default SpaceBackground;