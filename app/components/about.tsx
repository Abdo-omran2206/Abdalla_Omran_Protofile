import Image from 'next/image';

function About() {
  return (
    <div className="w-screen h-auto px-6 py-16 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-5">About Me</h2>
      {/* Tagline */}
      <p className="text-xl text-gray-200 leading-relaxed max-w-3xl text-center mb-20">
        Turning ideas into immersive, high‑performance experiences
      </p>

      {/* Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl w-full mx-auto">
        {/* Left: Image */}
        <div className="flex justify-center lg:justify-start order-1 lg:order-none">
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-sm p-2 flex justify-center items-center">
            <Image
              src="/profile.png"
              alt="profile picture"
              height={420}
              width={420}
              className="w-full max-w-[500px] h-auto rounded-xl object-cover hover:scale-[1.5] transition-transform duration-300"
              priority
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex flex-col space-y-8">
          {/* Intro */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">Who I am</h3>
            <p className="text-xl text-gray-300 leading-relaxed text-left">
                I’m a <span className="font-semibold text-white">Frontend Developer and Video Editor </span> 
                passionate about creating fast, engaging digital experiences. I blend design 
                sense with engineering to build responsive, accessible interfaces that feel 
                polished and alive, complete with fluid animations and interactivity.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed text-left mt-2">
                With a focus on <span className="font-medium text-white">performance</span>, 
                clean architecture, and pixel-perfect execution, I ensure products work 
                seamlessly across devices. Beyond code, I craft video edits that balance 
                pacing, motion, sound, and story—capturing attention and communicating 
                with clarity.
            </p>

            <p className="text-xl text-gray-300 leading-relaxed text-left mt-2">
                Whether coding an interface or producing a cinematic cut, I adapt style and 
                technique to the goal, always aiming to deliver work that feels both 
                <span className="italic text-white"> creative and precise</span>.
            </p>
          </div>


          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-start">
            <a href="/abdalla_cv.pdf" target='_blank'>
                <button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download CV
                    </span>
                </button>
            </a>
            <a href="#Portfolio">
                <button className="group border-2 border-white/30 hover:bg-white/10 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                    <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        View Projects
                    </span>
                </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
