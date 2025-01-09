//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './pages/home/Home.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Products from './pages/products/LandingProducts'
import Works from './pages/works/LandingWorks'
import Contact from './pages/contact/LandingContact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* Llamamos al navbar */}
      <Navbar/>
      <div className='main-content'>
        {/* Llamar al componente Home */}
        <Home/>
        {/* Llamar al componente Products */}
        <Products/>
        {/* Llamar al componenete Works */}
        <Works/>
        {/* Llamar al componente Contact */}
        <Contact/>
      </div>
    </>
  )
}

export default App
