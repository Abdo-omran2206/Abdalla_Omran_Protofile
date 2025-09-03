'use client'
import { useState , useEffect } from "react";
import { FiGlobe, FiVideo, FiCpu , FiGithub , FiZap} from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import  * as Icons from "react-icons/si";
import Image from 'next/image';

interface Project {
    name: string;
    description: string;
    livedimo: boolean;
    livedimourl?: string;
    sourse: boolean;
    github?: string;
    tecuse?: string[];
    image:string;
    // Add more fields as needed
}
interface Tech {
    name: string;
    icon: string;
    // Add more fields as needed
}
interface Video {
    title: string;
    videoId: string;
    // Add more fields as needed
}

function Portfolio(){
    const [ state , setState ] = useState("Web");
    const [ data , setData ] = useState<Array<Project | Tech | Video>>([]);
    useEffect(() =>{
        // Fetch data or perform actions based on the current state
        if(state === "Web"){
            fetch('/api/web-projects.json').then(response => response.json()).then(data => {
                console.log(data);
                setData(data);
            });
        } else if(state === "Video"){
            fetch('/api/video-projects.json').then(response => response.json()).then(data => {
                console.log(data);
                setData(data);
            });
        } else if(state === "Tech"){
            fetch('/api/tech-stack.json').then(response => response.json()).then(data => {
                console.log(data);
                setData(data);
            });
        }
    },[state])
    return(
        <div className="w-screen h-auto py-20">
            <h2 className="text-5xl text-center text-white mb-3">Portfolio Showcase</h2>
            <p className="text-center">Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.</p>
            <div className="flex justify-center p-10">
                <ul className="flex flex-row px-20 py-5 gap-20 text-2xl font-bold rounded-2xl 
                   text-white bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
                    <li onClick={() => setState("Web")} className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:scale-105">
                        <FiGlobe className="text-blue-400" /> <span>Web Projects</span>
                    </li>
                    <li onClick={() => setState("Video")} className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:scale-105">
                            <FiVideo className="text-red-400" /> <span>Video Projects</span>
                        </li>
                    <li onClick={() => setState("Tech")} className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:scale-105">
                        <FiCpu className="text-green-400 block"/> <span>Tech Stack</span>
                    </li>
                </ul>
            </div>
            <div>
                {state === "Web" ? (
                    <RenderWebApp
                        data={data.filter(
                            (item): item is Project =>
                                typeof item === "object" &&
                                "name" in item &&
                                "livedimo" in item &&
                                "sourse" in item &&
                                "image" in item
                        )}
                    />
                ) : state === "Video" ? (
                    <RenderVideoApp
                        data={data.filter(
                            (item): item is Video =>
                                typeof item === "object" &&
                                "title" in item &&
                                "videoId" in item
                        )}
                    />
                 ) : state === "Tech" ? (
                    <RenderTechStack
                        data={data.filter(
                            (item): item is Tech =>
                                typeof item === "object" &&
                                "name" in item &&
                                "icon" in item
                        )}
                    />
                ) 
                : (
                    <p>No projects found.</p>
                )}
            </div>
        </div>
    )
}
export default Portfolio;



function RenderWebApp({ data } : { data: Array<Project> }) {
  return (
    <>
      {data ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#0d1117] transition rounded-xl shadow-lg hover:bg-[#19212e]"
            >
              {/* Card Image */}
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name || "Project image"}
                  width={500}
                  height={300}
                  className="object-cover rounded-t-xl"
                />
              )}

              {/* Card Content */}
              <div className="p-6 relative">
                {/* Title */}
                <div className="flex justify-between items-center">
                  {item.name && (
                    <h3 className="text-xl font-bold text-white">
                      {item.name}
                    </h3>
                  )}
                  <span className="px-3 py-1 text-sm rounded-full border border-cyan-600 text-cyan-400 hover:bg-cyan-400/20 hover:cursor-pointer transition duration-500 hover:shadow-xl/20 hover:shadow-cyan-400/70">
                    Web-app
                  </span>
                </div>

                {/* Description */}
                {item.description && (
                  <p className="text-gray-400 mt-2">{item.description}</p>
                )}

                {/* Tech Stack */}
                {Array.isArray(item.tecuse) && (
                  <div className="mt-4">
                    <p className="font-semibold flex items-center gap-2 text-sm text-white">
                      <FiZap className="text-cyan-400" size={15} /> TECH STACK
                    </p>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {item.tecuse.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full border border-cyan-600 text-cyan-400 text-sm hover:bg-cyan-400/20 hover:cursor-pointer transition duration-500 hover:shadow-xl/20 hover:shadow-cyan-400/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-wrap gap-5 mt-6 justify-center">
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 mt-2 text-black font-semibold px-10 py-2 border rounded-2xl bg-white hover:text-white hover:bg-black/90 hover:border-2 hover:border-white hover:scale-105 shadow-md transition-all duration-300"
                    >
                      <FiGithub size={20} /> GitHub
                    </a>
                  )}
                  {item.livedimourl && (
                    <a
                      href={item.livedimourl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 mt-2 text-white border-2 px-10 py-2 rounded-3xl border-sky-700 hover:bg-sky-700 hover:scale-105 transition-all duration-300"
                    >
                      <FaExternalLinkAlt size={20} /> View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No projects found.</p>
      )}
    </>
  );
}

function RenderVideoApp({ data } : { data: Array<Video> }) {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
            {data.map((item, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
                </div>
            ))}
        </div>
    )
}

function RenderTechStack({data} : {data: Array<Tech>}){
    return(
        <>
            <div className="mt-4 flex flex-col items-center justify-center">
                <h3 className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold text-white mb-8">
                    <FiZap size={32} className="text-cyan-400" />
                    TECH STACK
                </h3>
                <p>A comprehensive overview of my technical expertise and capabilities</p>


                <div className="grid grid-cols-5 gap-4 mt-6 px-2">
                    {data.map((tech, i) => {
                    const Icon = Icons[tech.icon as keyof typeof Icons];
                    return (
                        <div
                        key={i}
                        className="flex flex-col items-center justify-center gap-3 py-7 px-13 rounded-xl border border-cyan-600 bg-[#0d1117] text-cyan-400 shadow-md hover:shadow-cyan-400/50 hover:scale-105 transition duration-300 hover:cursor-pointer"
                        >
                        {Icon && <Icon size={40} className="text-cyan-400" />}
                        <span className="font-medium text-sm">{tech.name}</span>
                        </div>
                    );
                    })}
                </div>
            </div>

        </>
    )
}