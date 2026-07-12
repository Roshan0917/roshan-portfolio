import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Background from "../components/Background/Background";
import TechStack from "../components/TechStack/TechStack";
import Project from "../components/Projects/Project";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Project />
      <Contact />
    </>
  );
}

export default Home;