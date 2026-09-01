import dynamic from "next/dynamic";
import Hero from "../components/sections/Hero";

const About = dynamic(() => import("../components/sections/About"), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center py-20 text-center text-zinc-500">
      Loading About...
    </div>
  ),
});

const Projects = dynamic(() => import("../components/sections/Projects"), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center py-20 text-center text-zinc-500">
      Loading Projects...
    </div>
  ),
});

const Contact = dynamic(() => import("../components/sections/Contact"), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center py-20 text-center text-zinc-500">
      Loading Contact...
    </div>
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
