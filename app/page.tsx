import Image from "next/image";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About"
import Projects from "../components/sections/Projects";


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
    </div>
  );
}
