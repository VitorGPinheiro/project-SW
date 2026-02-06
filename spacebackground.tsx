import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

const SpaceBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<THREE.Group | null>(null);
  const objsRef = useRef<THREE.Group[]>([]);
  const audioTagRef = useRef<HTMLAudioElement>(null); 
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 2000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mountRef.current.appendChild(renderer.domElement); // Erro do appendChild resolvido

    // Luzes
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const sun = new THREE.DirectionalLight(0xffffff, 2.5); sun.position.set(5,5,5); scene.add(sun);
    const fill = new THREE.PointLight(0x0000ff, 1.5); fill.position.set(-5,-5,-2); scene.add(fill);

    // Estrelas (Otimizado: Uma única geometria)
    const starGeo = new THREE.BufferGeometry();
    const pos = new Float32Array(24000);
    for (let i = 0; i < 24000; i++) pos[i] = (Math.random() - 0.5) * 2000;
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const starMesh = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.2 }));
    scene.add(starMesh);
    
    const load = (path: string, s: number, pos: [number, number, number], rot?: [number, number, number], isMain = false) => {
      loader.load(path, (g) => {
        const m = g.scene;
        m.scale.set(s, s, s);
        m.position.set(...pos);
        if (rot) m.rotation.set(...rot);
        scene.add(m);
        objsRef.current.push(m);
        if (isMain) shipRef.current = m;
      });
    };

    // Chamadas
    load('./stardestroyer.glb', 1, [0,0,0], [0.5, 3.2, 0]);
    load('./oldexecutor(100k).glb', 1, [-10,-2,10], [3.0, 20.0, 4.0]);
    //Loop
    let raf: number;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      starMesh.rotation.y += 0.0004;
      if (shipRef.current) {
        camera.position.y = -(window.scrollY * 0.05);
        camera.lookAt(shipRef.current.position);
      }
      renderer.render(scene, camera);
    };
    animate();

   // --- FUNÇÃO DE LIMPEZA (CLEANUP) COMPLETA ---
    return () => {
      cancelAnimationFrame(raf);
      
      // 1. Limpar Geometria das Estrelas
      starGeo.dispose();
      (starMesh.material as THREE.Material).dispose();

      // 2. Limpar Modelos 3D (Geometrias e Texturas)
      objsRef.current.forEach((obj) => {
        obj.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.geometry.dispose(); // Libera Geometria na GPU
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach(m => m.dispose());
            } else {
              mesh.material.dispose(); // Libera Material na GPU
            }
          }
        });
        scene.remove(obj);
      });

      // 3. Limpar Renderer e DOM
      renderer.dispose();
      if (mountRef.current) mountRef.current.innerHTML = '';
      objsRef.current = []; // Reseta a lista para o próximo ciclo
    };
  }, []);

  const handleStart = () => {
    if (audioTagRef.current) {
      audioTagRef.current.volume = 0.4;
      audioTagRef.current.play().then(() => setPlaying(true)).catch(e => console.error(e));
    }
  }; 

return (
    <>
<div ref={mountRef}style={{position:'fixed',top:0,left:0,width:'100%',height:'100%',zIndex:-1,background:'#000'}} />
     
     <audio ref={audioTagRef} loop>
          <source src="./SwOstFinale.ogg" type="audio/ogg" />
      </audio>
     
      {!playing ? (
        <div style={{position:'fixed', inset:0, display:'flex', justifyContent:'center', alignItems:'center', zIndex:100, background:'#000'}}>
          <button onClick={handleStart} style={{padding:'20px 40px', background:'transparent', color:'#FFE81F', border:'2px solid #FFE81F', fontSize:'20px', fontWeight:'bold', cursor:'pointer'}}>
            GO FOR DARKSIDE
          </button>
        </div>
      ) : <div style={{height:'2000vh'}} />} 
    </>
  );
};
export default SpaceBackground;