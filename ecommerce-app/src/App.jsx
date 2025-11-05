import './App.css'
import './index.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'  
import Home from './pages/home'
import Navbar from './components/navbar'
import About from './pages/about'
import Products from './pages/products'
import Contact from './pages/contact'
import Footer from './components/footer'

function App() {
  
  return (
    <Router>
      <div className="app">
        <Navbar/> 
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
