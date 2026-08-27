import dynamic from "next/dynamic";
import Hero from "../components/sections/Hero";

const About = dynamic(() => import("../components/sections/About"), {
  loading: () => (
    <p className="py-20 text-center text-zinc-500">Loading About...</p>
  ),
});

const Projects = dynamic(() => import("../components/sections/Projects"), {
  loading: () => (
    <p className="py-20 text-center text-zinc-500">Loading Projects...</p>
  ),
});

const Contact = dynamic(() => import("../components/sections/Contact"), {
  loading: () => (
    <p className="py-20 text-center text-zinc-500">Loading Contact...</p>
  ),
});

export default function Page() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}
