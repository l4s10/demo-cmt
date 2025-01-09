//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'
import App from './App.tsx'
import Contact from './pages/contact/Contact.jsx'
import Products from './pages/products/Products.jsx'
import Works from './pages/works/Works.jsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/trabajos" element={<Works />} />
            <Route path='/contacto' element={<Contact/>} />
        </Routes>
    </BrowserRouter>
)
