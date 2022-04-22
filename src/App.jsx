import { useState } from 'react'
import logo from './logo.svg'
import Navbar from './components/Navbar'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      <Navbar/>
    </div>
  )
}

export default App
