import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin , FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
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

  return (
    <div className="px-6 py-12">
      <h2 className="text-4xl md:text-4xl font-bold text-center text-white mb-4">
        Let&apos;s Work Together
      </h2>
      <p className="text-gray-400 text-center mb-10">
        If you have a project in mind or just want to say hi, feel free to reach out!
      </p>

      <div className="flex flex-wrap justify-center gap-5">
        {contact.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-3 w-110 px-20 py-8 rounded-xl border border-cyan-600/30 bg-[#0d1117] text-cyan-400 shadow-xl/30 hover:shadow-cyan-400/50 hover:scale-105 transition duration-300"
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

      <div id="CTA" className="mt-20 p-10 flex flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-3xl text-white">Your Next Project Starts Here</h3>
        <p>Let&apos;s collaborate to bring your ideas to life. Reach out today!</p>
        <div className="flex flex-row sm:flex-row gap-4 mt-4">
          <a href="" className="px-15 py-3 border border-cyan-600/30 rounded-3xl flex items-center gap-2 hover:bg-cyan-600/10 transition duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-600/30">
            <HiOutlineMail size={20} /> Send me an email
          </a>
          <a href="" className="px-15 py-3 border border-cyan-600/30 rounded-3xl flex items-center gap-2 hover:bg-cyan-600/10 transition duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-600/30">
            <FaLinkedin size={20} /> connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
