"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiGlobe, FiVideo, FiCpu, FiGithub, FiZap } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import * as Icons from "react-icons/si";
import Image from "next/image";
import webProjects from "../api/web-projects";
import videoProjects from "../api/video-projects";
import techStack from "../api/tech-stack";

interface Project {
  name: string;
  description: string;
  livedimo: boolean;
  livedimourl?: string;
  sourse: boolean;
  github?: string;
  tecuse?: string[];
  image: string;
  type: string;
}

interface Tech {
  name: string;
  icon: string;
}

interface Video {
  title: string;
  videoId: string;
}

gsap.registerPlugin(ScrollTrigger);

type HoverableElement = HTMLElement & {
  __enterHandler?: (ev: Event) => void;
  __leaveHandler?: (ev: Event) => void;
};

function Portfolio() {
  const [webData, setWebData] = useState<Array<Project>>(webProjects);
  const [videoData, setVideoData] = useState<Array<Video>>(videoProjects);
  const [teckData, setTeckData] = useState<Array<Tech>>(techStack);
  const [state, setState] = useState<string>("Web");

  const cardRef = useRef(null);
  const Head = useRef(null);
  const Headp = useRef(null);
  const Nav = useRef(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  // Memoized class names
  const navClasses = useMemo(
    () => ({
      base: `
      relative flex items-center justify-center gap-1.5 cursor-pointer 
      px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 
      rounded-lg sm:rounded-xl text-white shadow-lg text-xs sm:text-sm md:text-base lg:text-lg
      before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:translate-x-[-50%]
      before:w-full before:h-0.5 sm:before:h-1 before:bg-cyan-500 before:origin-center before:scale-x-0
      before:transition-transform before:duration-500 hover:before:scale-x-100
      hover:scale-105 transition-all duration-300
    `,
      active: `
      relative flex items-center justify-center gap-1.5 cursor-pointer 
      px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 
      rounded-lg sm:rounded-xl text-white shadow-lg text-xs sm:text-sm md:text-base lg:text-lg
      before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:translate-x-[-50%]
      before:w-full before:h-0.5 sm:before:h-1 before:bg-cyan-500 before:scale-x-100
      scale-105 transition-all duration-300
    `,
    }),
    [],
  );

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      Head.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
    )
      .fromTo(
        Headp.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=1",
      )
      .fromTo(
        Nav.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.5",
      );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
      );
    }
  }, [state]);

  const handleTabChange = (newState: string) => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.25,
        ease: "power2.out",
        onComplete: () => setState(newState),
      });
    } else {
      setState(newState);
    }
  };

  return (
    <div
      ref={cardRef}
      className="w-full min-h-screen h-auto py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
    >
      <h2
        ref={Head}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white mb-2 sm:mb-3 font-bold"
      >
        Portfolio Showcase
      </h2>
      <p
        ref={Headp}
        className="text-center text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4"
      >
        Explore my journey through projects, certifications, and technical
        expertise. Each section represents a milestone in my continuous learning
        path.
      </p>
      <div ref={Nav} className="flex justify-center py-6 sm:py-8 md:py-10">
        <ul
          className="flex flex-row flex-wrap justify-center px-3 py-3 sm:px-6 sm:py-4 md:px-10 md:py-5 
          gap-2 sm:gap-4 md:gap-8 lg:gap-12 text-sm sm:text-base md:text-lg font-bold rounded-xl sm:rounded-2xl 
          text-white bg-white/10 backdrop-blur-md shadow-lg border border-white/20"
        >
          <li>
            <button
              onClick={() => handleTabChange("Web")}
              className={state === "Web" ? navClasses.active : navClasses.base}
            >
              <FiGlobe className="text-blue-400 text-sm sm:text-base md:text-lg" />
              <span className="hidden sm:inline">Programming Works</span>
              <span className="sm:hidden">Code</span>
            </button>
          </li>

          <li>
            <button
              onClick={() => handleTabChange("Video")}
              className={
                state === "Video" ? navClasses.active : navClasses.base
              }
            >
              <FiVideo className="text-red-400 text-sm sm:text-base md:text-lg" />
              <span className="hidden sm:inline">Video Projects</span>
              <span className="sm:hidden">Videos</span>
            </button>
          </li>

          <li>
            <button
              onClick={() => handleTabChange("Tech")}
              className={state === "Tech" ? navClasses.active : navClasses.base}
            >
              <FiCpu className="text-green-400 text-sm sm:text-base md:text-lg" />
              <span className="hidden sm:inline">Tech Stack</span>
              <span className="sm:hidden">Tech</span>
            </button>
          </li>
        </ul>
      </div>

      <div ref={contentRef} className="will-change-transform">
        {state === "Web" && (
          <RenderWebApp
            data={webData.filter(
              (item): item is Project =>
                typeof item === "object" &&
                "name" in item &&
                "livedimo" in item &&
                "sourse" in item &&
                "image" in item,
            )}
          />
        )}
        {state === "Video" && (
          <RenderVideoApp
            data={videoData.filter(
              (item): item is Video =>
                typeof item === "object" &&
                "title" in item &&
                "videoId" in item,
            )}
          />
        )}
        {state === "Tech" && (
          <RenderTechStack
            data={teckData.filter(
              (item): item is Tech =>
                typeof item === "object" && "name" in item && "icon" in item,
            )}
          />
        )}
      </div>
    </div>
  );
}

export default Portfolio;

function RenderWebApp({ data }: { data: Array<Project> }) {
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const types = Array.from(
    new Set((data || []).map((d) => d.type).filter(Boolean)),
  ).sort();
  const filteredData =
    typeFilter === "All" ? data : data.filter((d) => d.type === typeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".portfolio-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: i * 0.08,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });
    return () => ctx.revert();
  }, [filteredData]);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".portfolio-card");
    const handlers = new Map<
      HTMLElement,
      { enter: () => void; leave: () => void }
    >();

    cards.forEach((card) => {
      const enter = () =>
        gsap.to(card, {
          scale: 1.03,
          y: -4,
          duration: 0.2,
          ease: "power2.out",
        });
      const leave = () =>
        gsap.to(card, { scale: 1, y: 0, duration: 0.25, ease: "power2.out" });

      handlers.set(card, { enter, leave });
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
    });

    return () => {
      handlers.forEach(({ enter, leave }, card) => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    };
  }, [filteredData]);

  if (!data || data.length === 0) {
    return (
      <p className="text-center text-gray-400 py-20 text-base sm:text-lg">
        No projects found.
      </p>
    );
  }

  return (
    <>
      <div className="flex justify-center mb-6 px-2 sm:px-4 md:px-10">
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5 text-xs sm:text-sm md:text-base font-semibold rounded-xl sm:rounded-2xl text-white bg-white/10 backdrop-blur-md shadow-lg border border-white/20 px-3 py-2 sm:px-6 sm:py-3 md:px-10">
          {["All", ...types].map((t) => {
            const isActive = t === typeFilter;
            return (
              <li
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`${
                  isActive
                    ? "bg-cyan-600 text-white"
                    : "text-cyan-400 hover:bg-cyan-400/20"
                } cursor-pointer px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-cyan-600 transition`}
              >
                {t}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 px-2 sm:px-4 md:px-10">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="portfolio-card bg-[#0d1117] transition rounded-xl shadow-lg hover:bg-[#19212e] will-change-transform"
          >
            {item.image && (
              <Image
                src={item.image}
                alt={item.name || "Project image"}
                width={500}
                height={300}
                className="object-cover rounded-t-xl h-40 sm:h-48 md:h-60 w-full"
              />
            )}

            <div className="p-4 sm:p-5 md:p-6 relative">
              <div className="flex justify-between items-start gap-2 mb-3">
                {item.name && (
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">
                    {item.name}
                  </h3>
                )}
                <span
                  onClick={() => setTypeFilter(item.type)}
                  className="px-2 py-1 text-xs sm:text-sm rounded-full border border-cyan-600 text-cyan-400 hover:bg-cyan-400/20 hover:cursor-pointer transition duration-500 hover:shadow-xl/20 hover:shadow-cyan-400/70 whitespace-nowrap flex-shrink-0"
                >
                  {item.type}
                </span>
              </div>

              {item.description && (
                <p className="text-gray-400 mt-2 text-xs sm:text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              )}

              {Array.isArray(item.tecuse) && item.tecuse.length > 0 && (
                <div className="mt-4">
                  <p className="font-semibold flex items-center gap-2 text-xs sm:text-sm text-white mb-2">
                    <FiZap className="text-cyan-400" size={14} /> TECH STACK
                  </p>
                  <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                    {item.tecuse.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-cyan-600 text-cyan-400 text-xs hover:bg-cyan-400/20 hover:cursor-pointer transition duration-500 hover:shadow-xl/20 hover:shadow-cyan-400/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 justify-center">
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-black font-semibold px-6 py-2 sm:px-8 sm:py-2.5 border rounded-2xl bg-white hover:text-white hover:bg-black/90 hover:border-2 hover:border-white hover:scale-105 shadow-md transition-all duration-300 text-xs sm:text-sm"
                  >
                    <FiGithub size={16} /> GitHub
                  </a>
                )}
                {item.livedimourl && (
                  <a
                    href={item.livedimourl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-white border-2 px-6 py-2 sm:px-8 sm:py-2.5 rounded-3xl border-sky-700 hover:bg-sky-700 hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
                  >
                    <FaExternalLinkAlt size={14} /> View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function RenderVideoApp({ data }: { data: Array<Video> }) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".video-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: i * 0.08,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });
    return () => ctx.revert();
  }, [data]);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".video-card");
    const handlers = new Map<
      HTMLElement,
      { enter: () => void; leave: () => void }
    >();

    cards.forEach((card) => {
      const enter = () =>
        gsap.to(card, { scale: 1.02, duration: 0.2, ease: "power2.out" });
      const leave = () =>
        gsap.to(card, { scale: 1, duration: 0.25, ease: "power2.out" });

      handlers.set(card, { enter, leave });
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
    });

    return () => {
      handlers.forEach(({ enter, leave }, card) => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    };
  }, [data]);

  if (!data || data.length === 0) {
    return (
      <p className="text-center text-gray-400 py-20 text-base sm:text-lg">
        No videos found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 px-2 sm:px-4 md:px-10">
      {data.map((item, i) => (
        <div
          key={i}
          className="video-card rounded-xl overflow-hidden shadow-lg will-change-transform bg-[#0d1117]"
        >
          <iframe
            width="100%"
            height="100%"
            className="aspect-video"
            src={`https://www.youtube.com/embed/${item.videoId}`}
            title={item.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <div className="p-3 sm:p-4">
            <h3 className="text-white font-semibold text-sm sm:text-base">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

function RenderTechStack({ data }: { data: Array<Tech> }) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".tech-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            delay: i * 0.05,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });
    return () => ctx.revert();
  }, [data]);

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".tech-card");
    const handlers = new Map<
      HTMLElement,
      { enter: () => void; leave: () => void }
    >();

    cards.forEach((card) => {
      const enter = () =>
        gsap.to(card, { scale: 1.05, duration: 0.15, ease: "power2.out" });
      const leave = () =>
        gsap.to(card, { scale: 1, duration: 0.2, ease: "power2.out" });

      handlers.set(card, { enter, leave });
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
    });

    return () => {
      handlers.forEach(({ enter, leave }, card) => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    };
  }, [data]);

  if (!data || data.length === 0) {
    return (
      <p className="text-center text-gray-400 py-20 text-base sm:text-lg">
        No tech stack data found.
      </p>
    );
  }

  return (
    <div className="mt-4 flex flex-col items-center justify-center px-2 sm:px-4">
      <h3 className="flex items-center justify-center gap-2 sm:gap-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
        <FiZap size={24} className="text-cyan-400 sm:w-8 sm:h-8" />
        TECH STACK
      </h3>
      <p className="text-center text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl mb-6 px-4">
        A comprehensive overview of my technical expertise and capabilities
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mt-6 w-full max-w-6xl">
        {data.map((tech, i) => {
          const Icon = Icons[tech.icon as keyof typeof Icons];
          return (
            <div
              key={i}
              className="tech-card flex flex-col items-center justify-center gap-2 sm:gap-3 py-5 sm:py-6 md:py-7 px-4 sm:px-6 rounded-xl border border-cyan-600 bg-[#0d1117] text-cyan-400 shadow-md hover:shadow-cyan-400/50 hover:scale-105 transition duration-300 hover:cursor-pointer will-change-transform"
            >
              {Icon && (
                <Icon
                  size={32}
                  className="text-cyan-400 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                />
              )}
              <span className="font-medium text-xs sm:text-sm text-center">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
