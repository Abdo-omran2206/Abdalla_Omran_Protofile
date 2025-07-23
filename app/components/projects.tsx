'use client';
import Aos from "aos";
import { useEffect, useState } from "react";
import projectsjson from '../../api/projects.json';
function Projects(){

    type Project = {
        name: string;
        description: string;
        livedimo: boolean;
        livedimourl: string;
        sourse: boolean;
        github: string;
        tecuse: string[];
    };

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setProjects(projectsjson);
    }, []);

    useEffect(() => {
            Aos.init({
                duration: 1000, // animation duration
                once: true, // whether animation should happen only once
                delay: 200, // delay between animations (in ms)
            });
        }, []);

    return(
        <div className="min-h-screen py-16 px-8" id='projects'>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-12">My Projects</h2>
                <section  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center" data-aos='zoom-in'>
                    {projects.map((project, idx) => (
                        <div 
                            key={idx} 
                            className="shadow-purple-500 shadow-[0_0_15px_5px_rgba(139,92,246,0.7)] bg-gray-800/50 backdrop-blur-sm w-80 p-6 rounded-lg min-h-[400px] flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_10px_rgba(139,92,246,0.8)] border border-purple-500/30"
                            
                        >
                            <h3 className="font-semibold text-2xl tracking-wide mb-3 text-white">
                                {project.name}
                            </h3>
                            <p className="text-gray-300 mb-4 flex-grow leading-relaxed">
                                {project.description}
                            </p>
                            <div className="mb-6">
                                <p className="text-gray-200">
                                    <strong className="text-purple-300">Technologies Used:</strong>
                                </p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tecuse.map((tech, techIdx) => (
                                        <span 
                                            key={techIdx}
                                            className="bg-purple-600/20 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 mt-auto">
                                {project.livedimo && (
                                    <a 
                                        href={project.livedimourl} 
                                        className="text-blue-400 hover:text-blue-300 w-full text-center py-2 border border-blue-500 rounded-lg transition-all duration-300 hover:bg-blue-500/10 font-medium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        🚀 Live Demo
                                    </a>
                                )}
                                {project.sourse && (
                                    <a 
                                        href={project.github} 
                                        className="text-green-400 hover:text-green-300 w-full text-center py-2 border border-green-500 rounded-lg transition-all duration-300 hover:bg-green-500/10 font-medium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        📂 Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Projects;