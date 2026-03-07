import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
};

export default Home;
