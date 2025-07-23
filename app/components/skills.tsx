'use client';
import Aos from 'aos';
import { useEffect } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaNodeJs,
  FaReact,
  FaPython,
  FaDatabase,
} from 'react-icons/fa';

import { SiJquery, SiNextdotjs, SiExpress, SiMysql } from 'react-icons/si';

function Skills(){
    useEffect(() => {
        Aos.init({
            duration: 1000, // animation duration
            once: true, // whether animation should happen only once
            delay: 200, // delay between animations (in ms)
        });
    }, []);
  
    return(
        <section id='skills' className="min-h-screen w-full flex relative items-center justify-center overflow-hidden max-sm:h-290" data-aos="fade-up">
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
            `}</style>
            <div className="h-30 clip-double-wave absolute top-[-30px] w-full z-10 bg-linear-to-b from-[#0f0f12] from-5% to-purple-800">
            </div>
              
            <div
                className="w-[98%] h-135 flex flex-col items-start rounded-lg p-8 shadow-purple-500 shadow-[0_0_15px_5px_rgba(139,92,246,0.7)] bg-transparent max-sm:h-auto max-sm:p-4"
            >
                <h2 className="text-4xl w-full font-bold text-white mb-2 text-center max-sm:text-3xl max-sm:tracking-wide">My Skills</h2>
                <div className="flex flex-wrap gap-6 mt-12 justify-center max-sm:gap-3">
                    {[
                        { 
                            icon: <FaHtml5 className="text-[#E44D26] text-5xl mb-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" title="HTML5" />, 
                            label: "HTML5",
                            gradient: "from-[#E44D26]/20 to-orange-600/20",
                            glow: "shadow-[0_0_20px_rgba(228,77,38,0.3)]"
                        },
                        { 
                            icon: <FaCss3Alt className="text-[#1572B6] text-5xl mb-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" title="CSS3" />, 
                            label: "CSS3",
                            gradient: "from-[#1572B6]/20 to-blue-600/20",
                            glow: "shadow-[0_0_20px_rgba(21,114,182,0.3)]"
                        },
                        { 
                            icon: <FaJsSquare className="text-[#F7DF1E] text-5xl mb-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" title="JavaScript" />, 
                            label: "JavaScript",
                            gradient: "from-[#F7DF1E]/20 to-yellow-500/20",
                            glow: "shadow-[0_0_20px_rgba(247,223,30,0.3)]"
                        },
                        { 
                            icon: <SiJquery className="text-[#0769AD] text-5xl mb-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" title="jQuery" />, 
                            label: "jQuery",
                            gradient: "from-[#0769AD]/20 to-blue-700/20",
                            glow: "shadow-[0_0_20px_rgba(7,105,173,0.3)]"
                        },
                        { 
                            icon: <FaPhp className="text-[#777BB4] text-5xl mb-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" title="PHP" />, 
                            label: "PHP",
                            gradient: "from-[#777BB4]/20 to-purple-600/20",
                            glow: "shadow-[0_0_20px_rgba(119,123,180,0.3)]"
                        },
                        { 
                            icon: <FaNodeJs className="text-[#3C873A] text-5xl mb-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" title="Node.js" />, 
                            label: "Node.js",
                            gradient: "from-[#3C873A]/20 to-green-600/20",
                            glow: "shadow-[0_0_20px_rgba(60,135,58,0.3)]"
                        },
                        { 
                            icon: <FaReact className="text-[#61DBFB] text-5xl mb-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:animate-spin" title="React" />, 
                            label: "React",
                            gradient: "from-[#61DBFB]/20 to-cyan-400/20",
                            glow: "shadow-[0_0_20px_rgba(97,219,251,0.3)]"
                        },
                        { 
                            icon: <SiNextdotjs className="text-white text-5xl mb-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" title="Next.js" />, 
                            label: "Next.js",
                            gradient: "from-white/10 to-gray-300/20",
                            glow: "shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        },
                        { 
                            icon: <SiExpress className="text-gray-300 text-5xl mb-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" title="Express.js" />, 
                            label: "Express.js",
                            gradient: "from-gray-400/20 to-gray-600/20",
                            glow: "shadow-[0_0_20px_rgba(156,163,175,0.3)]"
                        },
                        { 
                            icon: <SiMysql className="text-[#00758F] text-5xl mb-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" title="MySQL" />, 
                            label: "MySQL",
                            gradient: "from-[#00758F]/20 to-teal-600/20",
                            glow: "shadow-[0_0_20px_rgba(0,117,143,0.3)]"
                        },
                        { 
                            icon: <FaPython className="text-[#306998] text-5xl mb-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" title="Python" />, 
                            label: "Python",
                            gradient: "from-[#306998]/20 to-blue-800/20",
                            glow: "shadow-[0_0_20px_rgba(48,105,152,0.3)]"
                        },
                        { 
                            icon: <FaDatabase className="text-[#4DB33D] text-5xl mb-2 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" title="Database" />, 
                            label: "Database",
                            gradient: "from-[#4DB33D]/20 to-green-500/20",
                            glow: "shadow-[0_0_20px_rgba(77,179,61,0.3)]"
                        },
                    ].map((skill, index) => (
                        <div
                            key={skill.label}
                            className={`group flex flex-col items-center justify-center w-40 h-32 bg-gradient-to-br ${skill.gradient} backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 transition-all duration-500 hover:scale-105 hover:${skill.glow} hover:border-purple-500/50 cursor-pointer max-sm:w-32 max-sm:h-28 max-sm:p-2 relative overflow-hidden animate-pulse`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            style={{
                                animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                                animationDelay: `${index * 0.2}s`
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
                            {skill.icon}
                            <span className="text-sm font-medium text-white mt-2 text-center max-sm:text-xs relative z-10">{skill.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-30 clip-double-wave absolute bottom-[-30px] w-full z-10 bg-linear-to-b from-purple-800 from-5% to-[#0f0f12]">
            </div>
        </section>
    )
}

export default Skills;