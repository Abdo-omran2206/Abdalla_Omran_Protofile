'use client'
import { useState , useEffect , useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  type:string;
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
gsap.registerPlugin(ScrollTrigger);

type HoverableElement = HTMLElement & {
  __enterHandler?: (ev: Event) => void;
  __leaveHandler?: (ev: Event) => void;
};

function Portfolio(){
    const [ webData , setWebData ] = useState<Array<Project>>([]);
    const [ videoData , setVideoData ] = useState<Array<Video>>([]);
    const [ teckData , setTeckData ] = useState<Array<Tech>>([]);
    const [ loading , setLoading ] = useState<boolean>(false);
    const [ error , setError ] = useState<string | null>(null);
    const [ state , setState ] = useState<string>("Web");

    const cardRef = useRef(null);
    const Head = useRef(null);
    const Headp = useRef(null);
    const Nav = useRef(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() =>{
      const tl = gsap.timeline({
              scrollTrigger: {
                trigger: cardRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            });
      
      tl.fromTo(Head.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", })
      .fromTo(Headp.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out", }, "-=1")
      .fromTo(Nav.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out", }, "-=0.5")
      
    },[])
    useEffect(() => {
      if(!loading && !error && contentRef.current){
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        );
      }
    }, [loading, error])
    
    const fetchData = async (currentState: string) => {
      try {
        setLoading(true);
        setError(null);

        // Map state to the correct URL
        const urlMap: Record<string, string> = {
          web: '/api/web-projects.json',
          video: '/api/video-projects.json',
          tech: '/api/tech-stack.json',
        };

        const url = urlMap[currentState];
        if (!url) {
          setWebData([]);
          setVideoData([]);
          setTeckData([]);
          return;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to load: ${response.status}`);
        }

        const result = await response.json();

        // Assign to the right state
        if (currentState === 'web') setWebData(result);
        if (currentState === 'video') setVideoData(result);
        if (currentState === 'tech') setTeckData(result);

      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Failed to load data');
        }
        setWebData([]);
        setVideoData([]);
        setTeckData([]);
      } finally {
        setLoading(false);
      }
    };

    const fetchAllData = async () => {
      try {
        setLoading(true);
        setError(null);

        const requests = [
          fetch('/api/web-projects.json'),
          fetch('/api/video-projects.json'),
          fetch('/api/tech-stack.json'),
        ];

        const responses = await Promise.allSettled(requests);
        const [webRes, videoRes, techRes] = responses;

        if (webRes.status === 'fulfilled' && webRes.value.ok) {
          const data = await webRes.value.json();
          setWebData(data);
        }
        if (videoRes.status === 'fulfilled' && videoRes.value.ok) {
          const data = await videoRes.value.json();
          setVideoData(data);
        }
        if (techRes.status === 'fulfilled' && techRes.value.ok) {
          const data = await techRes.value.json();
          setTeckData(data);
        }

        const failed: string[] = [];
        if (webRes.status === 'rejected' || (webRes.status === 'fulfilled' && !webRes.value.ok)) failed.push('web');
        if (videoRes.status === 'rejected' || (videoRes.status === 'fulfilled' && !videoRes.value.ok)) failed.push('video');
        if (techRes.status === 'rejected' || (techRes.status === 'fulfilled' && !techRes.value.ok)) failed.push('tech');
        if (failed.length) {
          setError(`Failed to load: ${failed.join(', ')}`);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Failed to load data');
        }
        setWebData([]);
        setVideoData([]);
        setTeckData([]);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() =>{
        fetchAllData();
    },[])
    const nav = `
      relative flex items-center gap-2 cursor-pointer 
      px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 
      rounded-xl text-white shadow-xl text-sm sm:text-base lg:text-lg
      before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:translate-x-[-50%]
      before:w-full before:h-1 before:bg-cyan-600 before:origin-center before:scale-x-0
      before:transition-transform before:duration-500 hover:before:scale-x-100
      hover:scale-105 transition-all duration-300
      flex-col gap-1 sm:flex-row sm:gap-2
    `;

    const navActive = `
      relative flex items-center gap-2 cursor-pointer 
      px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 
      rounded-xl text-white shadow-xl text-sm sm:text-base lg:text-lg
      before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:translate-x-[-50%]
      before:w-full before:h-1 before:bg-cyan-600 before:scale-x-100
      scale-105 transition-all duration-300
      flex-col gap-1 sm:flex-row sm:gap-2
    `;

    return(
        <div ref={cardRef} className="w-screen min-h-screen h-auto py-20">
            <h2 ref={Head} className="text-5xl text-center text-white mb-3 max-sm:text-3xl">Portfolio Showcase</h2>
            <p ref={Headp} className="text-center max-sm:text-sm">Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.</p>
            <div ref={Nav} className="flex justify-center p-10 max-sm:px-5 max-sm:py-3">
                <ul className="flex flex-row px-20 py-5 gap-20 text-2xl font-bold rounded-2xl 
                   text-white bg-white/10 backdrop-blur-md shadow-lg border border-white/20 max-sm:gap-5 max-sm:px-5 max-sm:py-2 max-sm:text-sm max-md:text-md">
                    <li onClick={async () => {
                        if(contentRef.current){
                            await gsap.to(contentRef.current, { opacity: 0, y: 10, duration: 0.25, ease: 'power2.out' });
                        }
                        await fetchData('web');
                        setState("Web");
                    }} className={state === "Web" ? navActive : nav}>
                        <FiGlobe className="text-blue-400" /> <span>Web Projects</span>
                    </li>
                    <li onClick={async () => {
                        if(contentRef.current){
                            await gsap.to(contentRef.current, { opacity: 0, y: 10, duration: 0.25, ease: 'power2.out' });
                        }
                        await fetchData('video');
                        setState("Video");
                    }} className={state === "Video" ? navActive : nav}>
                          <FiVideo className="text-red-400" /> <span>Video Projects</span>
                        </li>
                    <li onClick={async () => {
                        if(contentRef.current){
                            await gsap.to(contentRef.current, { opacity: 0, y: 10, duration: 0.25, ease: 'power2.out' });
                        }
                        await fetchData('tech');
                        setState("Tech");
                    }} className={state === "Tech" ? navActive : nav}>
                        <FiCpu className="text-green-400 block"/> <span>Tech Stack</span>
                    </li>
                </ul>
            </div>
            <div ref={contentRef} className="will-change-transform">
                { state === "Web" ? (
                    <RenderWebApp
                        data={webData.filter(
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
                        data={videoData.filter(
                            (item): item is Video =>
                                typeof item === "object" &&
                                "title" in item &&
                                "videoId" in item
                        )}
                    />
                 ) : state === "Tech" ? (
                    <RenderTechStack
                        data={teckData.filter(
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
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const types = Array.from(new Set((data || []).map((d) => d.type).filter(Boolean))).sort();
  const filteredData = typeFilter === 'All' ? data : data.filter((d) => d.type === typeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.portfolio-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            delay: i * 0.08,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, [filteredData]);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.portfolio-card');
    const enter = (el: HTMLElement) => {
      gsap.to(el, { scale: 1.03, y: -4, duration: 0.2, ease: 'power2.out' });
    };
    const leave = (el: HTMLElement) => {
      gsap.to(el, { scale: 1, y: 0, duration: 0.25, ease: 'power2.out' });
    };
    cards.forEach((card) => {
      const onEnter = () => enter(card);
      const onLeave = () => leave(card);
      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mouseleave', onLeave);
      (card as HoverableElement).__enterHandler = onEnter;
      (card as HoverableElement).__leaveHandler = onLeave;
    });
    return () => {
      cards.forEach((card) => {
        const onEnter = (card as HoverableElement).__enterHandler;
        const onLeave = (card as HoverableElement).__leaveHandler;
        if (onEnter) card.removeEventListener('mouseenter', onEnter as EventListener);
        if (onLeave) card.removeEventListener('mouseleave', onLeave as EventListener);
      });
    };
  }, [filteredData]);

  return (
    <>
      {data ? (
        <>
          <div className="flex justify-center mb-6 px-10">
            <ul className="flex flex-wrap gap-5 text-sm md:text-base font-semibold rounded-2xl text-white bg-white/10 backdrop-blur-md shadow-lg border border-white/20 px-10 py-2">
              {['All', ...types].map((t) => {
                const isActive = t === typeFilter;
                return (
                  <li
                    key={t}
                    onClick={() => setTypeFilter(t)}
                    className={`${isActive ? 'bg-cyan-600 text-white' : 'text-cyan-400 hover:bg-cyan-400/20'} cursor-pointer px-3 py-1 rounded-lg border border-cyan-600 transition`}
                  >
                    {t}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="portfolio-card bg-[#0d1117] transition rounded-xl shadow-lg hover:bg-[#19212e] will-change-transform"
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
                  <span onClick={() => setTypeFilter(item.type)} className="px-3 py-1 text-sm rounded-full border border-cyan-600 text-cyan-400 hover:bg-cyan-400/20 hover:cursor-pointer transition duration-500 hover:shadow-xl/20 hover:shadow-cyan-400/70">
                    {item.type}
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
        </>
      ) : (
        <p>No projects found.</p>
      )}
    </>
  );
}

function RenderVideoApp({ data } : { data: Array<Video> }) {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.video-card').forEach((card, i) => {
                gsap.fromTo(
                    card,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: 'power2.out',
                        delay: i * 0.08,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });
        });
        return () => ctx.revert();
    }, [data]);
    useEffect(() => {
        const cards = document.querySelectorAll<HTMLElement>('.video-card');
        const enter = (el: HTMLElement) => gsap.to(el, { scale: 1.02, duration: 0.2, ease: 'power2.out' });
        const leave = (el: HTMLElement) => gsap.to(el, { scale: 1, duration: 0.25, ease: 'power2.out' });
        cards.forEach((card) => {
            const onEnter = () => enter(card);
            const onLeave = () => leave(card);
            card.addEventListener('mouseenter', onEnter);
            card.addEventListener('mouseleave', onLeave);
            (card as HoverableElement).__enterHandler = onEnter;
            (card as HoverableElement).__leaveHandler = onLeave;
        });
        return () => {
            cards.forEach((card) => {
                const onEnter = (card as HoverableElement).__enterHandler;
                const onLeave = (card as HoverableElement).__leaveHandler;
                if (onEnter) card.removeEventListener('mouseenter', onEnter as EventListener);
                if (onLeave) card.removeEventListener('mouseleave', onLeave as EventListener);
            });
        };
    }, [data]);
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
            {data.map((item, i) => (
                <div key={i} className="video-card rounded-xl overflow-hidden shadow-lg will-change-transform">
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
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.tech-card').forEach((card, i) => {
                gsap.fromTo(
                    card,
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power2.out',
                        delay: i * 0.05,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            });
        });
        return () => ctx.revert();
    }, [data]);
    useEffect(() => {
        const cards = document.querySelectorAll<HTMLElement>('.tech-card');
        const enter = (el: HTMLElement) => gsap.to(el, { scale: 1.05, duration: 0.15, ease: 'power2.out' });
        const leave = (el: HTMLElement) => gsap.to(el, { scale: 1, duration: 0.2, ease: 'power2.out' });
        cards.forEach((card) => {
            const onEnter = () => enter(card);
            const onLeave = () => leave(card);
            card.addEventListener('mouseenter', onEnter);
            card.addEventListener('mouseleave', onLeave);
            (card as HoverableElement).__enterHandler = onEnter;
            (card as HoverableElement).__leaveHandler = onLeave;
        });
        return () => {
            cards.forEach((card) => {
                const onEnter = (card as HoverableElement).__enterHandler;
                const onLeave = (card as HoverableElement).__leaveHandler;
                if (onEnter) card.removeEventListener('mouseenter', onEnter as EventListener);
                if (onLeave) card.removeEventListener('mouseleave', onLeave as EventListener);
            });
        };
    }, [data]);
    return(
        <>
            <div className="mt-4 flex flex-col items-center justify-center">
                <h3 className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold text-white mb-8">
                    <FiZap size={32} className="text-cyan-400" />
                    TECH STACK
                </h3>
                <p className="text-center">A comprehensive overview of my technical expertise and capabilities</p>


                <div className="grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4 mt-6 px-2">
                    {data.map((tech, i) => {
                    const Icon = Icons[tech.icon as keyof typeof Icons];
                    return (
                        <div
                        key={i}
                        className="tech-card flex flex-col items-center justify-center gap-3 py-7 px-13 rounded-xl border border-cyan-600 bg-[#0d1117] text-cyan-400 shadow-md hover:shadow-cyan-400/50 hover:scale-105 transition duration-300 hover:cursor-pointer will-change-transform"
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