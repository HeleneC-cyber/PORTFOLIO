// DEPENDENCIES
import { Routes, Route, BrowserRouter } from "react-router"
// PAGES
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Footer from './components/navigation/Footer.jsx'
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact.jsx"
import PageNotFound from "./pages/PageNotFound.jsx"
// COMPONENTS
import RouteScrollToTop from "./components/navigation/RouteScrollToTop.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
