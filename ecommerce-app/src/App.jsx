import './App.css'
import './index.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'  
import Home from './components/home'
import Navbar from './components/navbar'
import Products from './components/products'
import About from './components/about'
import Contact from './components/contact'

function App() {
  
  return (
    <div>

    <Router>
      <Navbar/>   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
      
    </div>
  )
}

export default App
