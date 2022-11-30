import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ControlPanel } from "./pages/ControlPanel";

function App() {
  const [count, setCount] = useState(0)

  return (
    <ControlPanel/>
  )
}

export default App
