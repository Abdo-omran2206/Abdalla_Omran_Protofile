"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DotGrid from './reactbits/DotGrid';
import TextType from './reactbits/TextType';
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si"; // from Simple Icons
import About from "./components/about";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


export default function Home() {
  
  const text1 = useRef(null);
  const text2 = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(text1.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" });
    tl.fromTo(text2.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }, "-=0.1" );
  },[])
  return (
    <>
      <header className="flex justify-center items-center">
        <Navbar />
      </header>
      <main className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen flex flex-col gap-15">
        
        <section id="Home" className="h-screen flex items-center justify-center relative overflow-hidden">
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#271E37"
            activeColor="#1ac6ff"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
          
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center z-10 px-6 md:px-12 h-screen gap-4 md:gap-0 lg:gap-10">
            <div className='w-full z-20 px-6 flex flex-col justify-center items-center text-center'>
              <div ref={text1} className="opacity-0">
                <h1 className="text-gray-200 text-2xl font-bold mb-4 leading-tight lg:leading-[1.1] max-sm:text-lg">Hello, I&apos;m</h1>
                <h1 className="text-white text-7xl mb-4 leading-tight lg:leading-[1.1] max-sm:text-4xl">Abdalla Omran</h1>
                <TextType
                  text={[
                    "Full-Stack Developer",
                    "Video Editor",
                  ]}
                  typingSpeed={30}
                  pauseDuration={2500}
                  deletingSpeed={35}
                  showCursor={true}
                  cursorCharacter="█"
                  className='text-3xl mt-2 mb-5 max-sm:text-xl text-cyan-400 font-semibold'
                />
                <p className="text-white text-xl font-medium max-sm:text-lg">Transforming Ideas Into Reality</p>
              </div>
              <div className='flex flex-col gap-8 opacity-0' ref={text2}>
                <div className="mt-10 flex flex-row items-center gap-6 max-sm:gap-3 justify-start">
                <a href="#Portfolio" 
                className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/0 hover:text-white hover:border-white hover:border duration-300 transition max-sm:text-sm max-sm:px-4 max-sm:py-2"
                >View Portfolio
                </a>
                <a
                  href="#Contact"
                  className="relative px-8 py-3 rounded-full border border-white text-white font-semibold 
                            overflow-hidden transition-colors duration-300
                            before:content-[''] before:absolute before:inset-0 before:bg-white 
                            before:scale-x-0 before:origin-left before:transition-transform before:duration-300
                            hover:before:scale-x-100 hover:text-black max-sm:text-sm max-sm:px-4 max-sm:py-2"
                >
                  <span className="relative z-10">Contact Me</span>
                </a>

              </div>
              <div className="flex items-center justify-center gap-4 text-white/90 mt-2 sm:mt-0">
                <SocialLinks />
              </div>
              </div>
            </div>
          </div>

        </section>

        <section id="About" className='h-auto flex items-center justify-center relative overflow-hidden'>
          <About />
        </section>
        <section id="Portfolio" className='h-auto flex items-center justify-center relative overflow-hidden'>
          <Portfolio />
        </section>
        <hr className='border-t border-cyan-800 my-8'/>
        <section id="Contact" className='h-auto flex items-center justify-center relative overflow-hidden'>
          <Contact />
        </section>
      </main>
      <footer>
        <div className="w-full text-center py-6 bg-gray-900 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Abdalla Omran. All rights reserved. • Built with React & Tailwind CSS
        </div>
      </footer>
    </>
  );
}


function Navbar() {
  const item =
    "relative text-gray-200 overflow-hidden transition-all duration-300 ease-in-out m-1 cursor-pointer \
before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:translate-x-[-50%] \
before:w-0 before:h-1 before:bg-cyan-600 before:transition-all before:duration-300 before:ease-in-out \
hover:before:w-full hover:text-white max-sm:text-sm";

  const nav = useRef<HTMLElement | null>(null);
  const listItems = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    if (nav.current) {
      gsap.fromTo(
        nav.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
      );
    }

    if (listItems.current.length > 0) {
      gsap.fromTo(
        listItems.current,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <nav
      ref={nav}
      role="navigation"
      aria-label="Main Navigation"
      className="fixed top-5 left-1/2 -translate-x-1/2 px-10 py-3 bg-transparent backdrop-blur-lg rounded-3xl border border-gray-700 z-50 opacity-0 max-md:px-6 max-md:py-2 max-sm:px-3 max-sm:py-1 max-sm:top-3"
    >
      <ul className="flex gap-20 font-bold text-xl max-sm:gap-4">
        {["Home", "About", "Portfolio", "Contact"].map((link, i) => (
          <li
            key={link}
            ref={(el) => {
              if (el) listItems.current[i] = el;
            }}
            className={item}
          >
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SocialLinks() {
  return (
    <div className="flex justify-center">
      <div className="flex space-x-6 px-8 py-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl gap-5">
        {/* GitHub */}
        <a
          href="https://github.com/Abdo-omran2206"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transform hover:scale-110 transition duration-300"
        >
          <FaGithub size={28} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/abdalla-omran-388572361/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-500 transform hover:scale-110 transition duration-300"
        >
          <FaLinkedin size={28} />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/201155395273"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-green-500 transform hover:scale-110 transition duration-300"
        >
          <SiWhatsapp size={28} />
        </a>
      </div>
    </div>
  );
}