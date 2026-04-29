import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Canvas } from '@react-three/fiber'
import { TorusGeometry } from 'three'
import Scene from './Scene.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <Canvas>
    <Scene />
  </Canvas>
  </>
)
