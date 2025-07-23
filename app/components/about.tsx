'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function About(){
    useEffect(() => {
        AOS.init({
              duration: 1000, // animation duration
              once: true, // whether animation should happen only once
            });
    }, []);

    return(
        <section id='about' className="min-h-screen w-full flex relative items-center justify-center overflow-hidden max-sm:h-auto" data-aos="fade-up">
            <div className="h-30 clip-double-wave absolute top-[-30px] w-full z-10 bg-linear-to-b from-[#0f0f12] from-5% to-purple-800">
            </div>
            <div
                className="w-[98%] h-100 flex flex-col items-start rounded-lg p-8 shadow-purple-500 shadow-[0_0_15px_5px_rgba(139,92,246,0.7)] bg-transparent max-sm:h-120 max-sm:p-4"
            >
                <h2 className="text-3xl font-bold text-white mb-2 max-sm:text-2xl">About Me</h2>
                <p className="mt-2 text-white text-lg max-sm:text-sm">
                    I&#39;m Abdalla Omran, a junior web developer and student at Helwan University, Faculty of Arts, Department of Media. My journey into web development started with curiosity and a love for problem-solving, growing into a passion for creating seamless, user-friendly, and visually appealing web experiences.
                </p>
                <br />
                <p className="mt-2 text-white text-lg max-sm:text-sm">
                    I enjoy working on both front-end and back-end projects, building responsive interfaces and robust server-side solutions. As a media student, I combine storytelling and design to create meaningful digital experiences.
                </p>
                <br />
                <p className="mt-2 text-white text-lg max-sm:text-sm">
                    I&#39;m committed to continuous learning, exploring new tools and best practices to refine my skills. Challenges motivate me to grow and innovate. My goal is to contribute to impactful projects, collaborate with inspiring teams, and evolve as a developer who bridges creativity and technology.
                </p>
            </div>
            <div className="h-30 clip-double-wave absolute bottom-[-30px] w-full z-10 bg-linear-to-b from-purple-800 from-5% to-[#0f0f12]">
            </div>
        </section>
    )
}
export default About