import './App.css'
import './index.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'  
import Home from './components/home'
import Navbar from './components/navbar'
import About from './components/about'
import Products from './components/products'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  
  return (
    <nav>

    <Router>
      <Navbar/> 
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>

      <Footer/>
    </Router>
      
    </nav>
  )
}

export default App
