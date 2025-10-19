"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin , FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);
function Contact() {
  const contact = [
      {
        icon: HiOutlineMail,
        label: "Email",
        value: "abdallaomran566@gmail.com",
        link: "mailto:abdallaomran566@gmail.com",
        describe: "You can reach me via email."
      },
      {
        icon: FaPhoneAlt,
        label: "Phone",
        value: "+20 115 539 5273",
        link: "tel:+201155395273",
        describe: "Available for quick discussions"
      },
    {
      icon: FaLocationDot,
      label: "Location",
      value: "Giza, Egypt",
      describe: "Open to remote opportunities worldwide"
    },
  ];
  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      value: "@Abdo-omran2206",
      link: "https://github.com/Abdo-omran2206",
      describe: "Check out my projects"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "@abdalla-omran",
      link: "https://linkedin.com/in/abdalla-omran-388572361",
      describe: "Let's connect professionally"
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);
  const contactRefs = useRef<(HTMLDivElement | null)[]>([]);
  const socialRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Headings
      gsap.fromTo(
        headingRef.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        subheadingRef.current,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Contact cards stagger
      gsap.fromTo(
        contactRefs.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Social cards stagger
      gsap.fromTo(
        socialRefs.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // CTA
      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="px-6 py-12 ">
      <h2 ref={headingRef} className="text-4xl font-bold text-center text-white mb-4 max-sm:text-3xl">
        Let&apos;s Work Together
      </h2>
      <p ref={subheadingRef} className="text-gray-400 text-center mb-10 max-sm:text-sm">
        If you have a project in mind or just want to say hi, feel free to reach out!
      </p>

      <div className="flex flex-wrap justify-center gap-5 max-sm:px-5">
        {contact.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              ref={(el) => { contactRefs.current[i] = el; }}
              className="flex flex-col items-center justify-center gap-3 w-110 px-20 py-8 rounded-xl border border-cyan-600/30 bg-[#0d1117] text-cyan-400 shadow-xl/30 hover:shadow-cyan-400/50 hover:scale-105 transition duration-300 max-sm:w-full max-sm:px-5 max-sm:py-6"
            >
              <div className="p-4 bg-cyan-200/10 border border-cyan-600/40 rounded-full">
                <Icon 
                size={35} 
                className="text-cyan-400" 
                />
              </div>
              <span className="font-semibold">{item.label}</span>
              <a
                href={item.link}
                className="relative text-sm text-gray-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                {item.value}
                </a>

            </div>
          );
        })}
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-5">
        {socialLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              ref={(el) => { socialRefs.current[i] = el; }}
              className="flex flex-col gap-4 w-auto px-12 py-8 rounded-xl border border-cyan-600/30 bg-[#0d1117] text-cyan-400 shadow-xl/30 hover:shadow-cyan-400/50 hover:scale-105 transition duration-300"
            >
              <div className="flex flex-row items-center gap-3">
                <div className="p-4 bg-cyan-200/10 border border-cyan-600/40 rounded-full">
                    <Icon 
                    size={35} 
                    className="text-cyan-400" 
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-sm text-gray-300">{item.value}</span>
                </div>
              </div>
              <p className="text-gray-300">{item.describe}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-sm text-gray-300 flex flex-row items-center justify-center gap-2 w-full border py-2 rounded-3xl overflow-hidden group"
                >
                {/* background animation */}
                <span className="absolute inset-0 bg-cyan-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>

                {/* content */}
                <span className="relative flex items-center gap-2 z-10">
                    <FaExternalLinkAlt size={20} /> Visit Profile
                </span>
                </a>

            </div>
          );
        })}
      </div>

      <div ref={ctaRef} id="CTA" className="mt-20 p-10 flex flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-3xl text-white">Your Next Project Starts Here</h3>
        <p>Let&apos;s collaborate to bring your ideas to life. Reach out today!</p>
        <div className="flex flex-row sm:flex-row gap-4 mt-4 max-sm:flex-wrap max-sm:justify-center">
          <a
            href="mailto:abdallaomran566@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-3 border border-cyan-600/30 rounded-3xl flex items-center gap-2 
                      hover:bg-cyan-600/10 transition duration-500 hover:scale-105 
                      hover:shadow-xl hover:shadow-cyan-600/30 
                      max-sm:px-8 max-sm:flex max-sm:flex-wrap max-sm:items-center justify-center"
          >
            <HiOutlineMail size={20} /> Send me an email
          </a>

          <a
            href="https://linkedin.com/in/abdalla-omran-388572361"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-3 border border-cyan-600/30 rounded-3xl flex items-center gap-2 
                      hover:bg-cyan-600/10 transition duration-500 hover:scale-105 
                      hover:shadow-xl hover:shadow-cyan-600/30 
                      max-sm:px-8 max-sm:flex max-sm:flex-wrap max-sm:items-center justify-center"
          >
            <FaLinkedin size={20} /> Connect on LinkedIn
          </a>

        </div>
      </div>
    </div>
  );
}

export default Contact;
