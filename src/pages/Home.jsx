import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";
import Experience from "../components/Experience";
import Expertise from "../components/Expertise";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Expertise />
      <Contact />
    </>
  );
};

export default Home;
