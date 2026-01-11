import Landing from "../src/pages/Landing";
import Footer from "../src/components/Footer";
import ScrollToTop from "../src/components/ScrollToTop";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-200 to-white">
      <div className="max-w-5xl mx-auto bg-white shadow-xl">
        <Landing />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
