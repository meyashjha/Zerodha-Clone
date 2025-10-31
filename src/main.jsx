
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage.jsx'
import Signup from './pages/signup/Signup.jsx'
import AboutPage from './pages/about/AboutPage.jsx'
import ProductPage from './pages/products/ProductPage.jsx'
import SupportPage from './pages/support/SupportPage.jsx'
import PricingPage from './pages/pricing/PricingPage.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Error from './components/Error.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/signup" element={<Signup />} /> 
    <Route path="/about" element={<AboutPage />} />
    <Route path="/products" element={<ProductPage />} />
    <Route path="/pricing" element={<PricingPage />} />
    <Route path="/support" element={<SupportPage />} />
    <Route path="*" element={<Error />} />
  </Routes>
  <Footer/>
</BrowserRouter>
)
