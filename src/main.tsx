import ReactDOM from 'react-dom/client'
import SpaceBackground from './spacebackground'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <SpaceBackground />
    <h1 style={{ 
      position: 'fixed', // Mudamos para fixed para não ocupar espaço físico
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)',
      color: 'white', 
      zIndex: -100, // Garante que fica na frente
      pointerEvents: 'none' 
    }}>
      Universo Three.js
    </h1>
  </>
)