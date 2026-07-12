import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Background from "../components/Background/Background";

function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default Home;