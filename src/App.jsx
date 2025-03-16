import { BrowserRouter, Routes, Route } from "react-router"

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Footer from './components/Footer.jsx'
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
import Test from "./pages/Test.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
