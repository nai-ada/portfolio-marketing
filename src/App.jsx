import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "../src/components/Footer";
import ScrollToTop from "../src/components/ScrollToTop";
import Gallery from "./pages/Gallery";

import "./App.css";

function App() {
  return (
    <div className="bg-linear-to-b from-blue-200 to-white">
      <div className="max-w-5xl mx-auto bg-white shadow-xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
