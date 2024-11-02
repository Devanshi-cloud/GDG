import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Properties from "./Components/Properties";
import Agents from "./Components/Agents";
import Contact from "./Components/Contact";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  

  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Properties />
      <Agents />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}

export default App
