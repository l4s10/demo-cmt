import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'
import App from './App.tsx'
import AllProducts from './pages/products/AllProducts.js'
import AllWorks from './pages/works/AllWorks.js'
import Contact from './pages/contact/LandingContact.js'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/productos" element={<AllProducts />} />
            <Route path="/trabajos" element={<AllWorks />} />
            <Route path='/contacto' element={<Contact/>} />
        </Routes>
    </BrowserRouter>
)
