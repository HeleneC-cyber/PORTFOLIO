import { BrowserRouter, Routes , Route} from "react-router"

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Footer from './components/Footer.jsx'
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact.jsx"


const App = () => { 

  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home /> } />
          <Route path="/about-me" element={<About /> } />
          <Route path="/projects" element={<Projects /> } />
          <Route path="/contact" element={<Contact /> } />
        </Routes>
        <Footer />
      
    </BrowserRouter>
  )
}

export default App
