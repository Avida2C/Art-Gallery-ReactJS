import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/gallery/Gallery";
import About from "./components/About";
import Privacy from "./components/privacy";
import Terms from "./components/terms";
import Banner from "./components/banner";
import Navbar from "./components/navigation/navbar"; // Import Navbar
import Footer from "./components/navigation/footer"; // Import Footer

function App() {
  useEffect(() => {
    const isImageTarget = (target) => target instanceof HTMLImageElement;

    const blockContextMenu = (e) => {
      if (isImageTarget(e.target)) e.preventDefault();
    };

    const blockDrag = (e) => {
      if (isImageTarget(e.target)) e.preventDefault();
    };

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("dragstart", blockDrag);
    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("dragstart", blockDrag);
    };
  }, []);

  return (
    <Router>
      <Banner />  {/* Banner at the top */}
      <Navbar />  {/* Navbar below banner */}

      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Footer />  {/* Footer at the bottom */}
    </Router>
  );
}

export default App;
