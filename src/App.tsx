import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ComponentsPage from "./pages/ComponentsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <SmoothScroll>

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </SmoothScroll>
  );
}

export default App;
