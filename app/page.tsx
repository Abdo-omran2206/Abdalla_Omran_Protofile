import Homesec from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Navigate from "./components/navigate";

export default function Home() {
  return (
    <div>
      <Navigate/>
      <Homesec/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <footer className="bg-[#0A0A0A] text-center py-6 text-[#A6A6A6] text-sm">
  <p className="tracking-wide glow-footer">Made by Abadalla Omran © {new Date().getFullYear()}</p>
</footer>

    </div>
  );
}
