import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Background from "../components/Background/Background";
import TechStack from "../components/TechStack/TechStack";
import Project from "../components/Projects/Project";
import Contact from "../components/Contact/Contact";
import Timeline from "../components/TimeLine/TimeLine";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Project />
      <Timeline/>
      <Contact />
      <Footer/>
    </>
  );
}

export default Home;