import './App.css'
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import About from "./Components/About";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import Preloader from './Components/Preloader';

function App() {

  return (
    <>
      <Preloader />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
