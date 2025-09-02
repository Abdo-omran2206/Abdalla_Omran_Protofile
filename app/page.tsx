import Image from 'next/image';
import DotGrid from './reactbits/DotGrid';
import TextType from './reactbits/TextType';
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si"; // from Simple Icons
import About from "./components/about";
export default function Home() {
  return (
    <>
      <header className="flex justify-center items-center">
        <Navbar />
      </header>
      <main>
        <section id="Home" className="h-screen flex items-center justify-center relative overflow-hidden">
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#271E37"
            activeColor="#5227FF"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between z-10 px-6 md:px-12 h-screen gap-4 md:gap-0 lg:gap-10">
            <div className='w-full md:w-3/5 z-20 text-left px-6 md:pl-12 lg:pl-20 max-w-2xl'>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight lg:leading-[1.1]">Hi, I&apos;m Abdalla Omran</h1>
              <p className="text-white text-xl lg:text-xl font-medium mb-6">Full-Stack Developer & Video Editor</p>
              <TextType 
                text={[
                  "Building full-stack web applications",
                  "Creating cinematic video content",
                  "Crafting seamless user experiences", 
                  "From code to creative storytelling"
                ]}
                typingSpeed={30}
                pauseDuration={2500}
                deletingSpeed={35}
                showCursor={true}
                cursorCharacter="█"
                className='text-lg'
              />

              <div className='flex flex-col gap-8'>
                <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-start flex-wrap">
                <a href="#Portfolio" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition">View Portfolio</a>
                <a href="#Contact" className="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition">Contact Me</a>
              </div>
              <div className="flex items-center gap-4 text-white/90 mt-2 sm:mt-0">
                <SocialLinks />
              </div>
              </div>
            </div>
            <div className='w-full md:w-2/5 flex justify-center items-center relative px-5 md:pr-12 lg:pr-20'>
              <Image src='/profile.png' alt='profile picture' height={350} width={350} className='w-80 h-80 rounded-full relative z-20 hover:cursor-pointer hover:scale-115 hover:rotate-10 transition-transform duration-600' priority/>
            </div>
          </div>
        </section>
        <section id="About" className='h-auto flex items-center justify-center relative overflow-hidden'>
          <About />
        </section>
      </main>
    </>
  );
}



export function Navbar(){
  return(
    <nav className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg w-auto flex fixed px-15 py-3 rounded-4xl mt-15">
      <ul className="flex gap-20 text-white font-bold text-xl">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export function SocialLinks() {
  return (
    <div className="flex justify-center">
      <div className="flex space-x-6 px-6 py-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl gap-5">
        {/* GitHub */}
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transform hover:scale-110 transition duration-300"
        >
          <FaGithub size={28} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-500 transform hover:scale-110 transition duration-300"
        >
          <FaLinkedin size={28} />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/201234567890"
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