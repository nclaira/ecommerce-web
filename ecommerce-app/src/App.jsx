import './App.css'
import './index.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'  
import Home from './components/home'
import Navbar from './components/navbar'

function App() {
  
  return (
    <nav>

    <Router>
      <Navbar/>   
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
      
    </nav>
  )
}

export default App
