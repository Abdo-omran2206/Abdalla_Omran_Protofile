import "@fortawesome/fontawesome-free/css/all.min.css";
function Contact(){
    return(
        <section id="contact" className="h-50 w-full flex flex-col relative items-center overflow-hidden bg-purple-950/30 text-white p-7 gap-10 max-sm:h-60 max-sm:p-8">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl text-center max-sm:text-2xl">Contact Me</h2>
                <p className="font-[var(--secondary-font)] text-center max-sm:text-md">If you&#39;d like to connect, collaborate, or have any questions — feel free to reach out!</p>
            </div>
            <div className="flex gap-10 text-3xl justify-around">
                <a href="https://github.com/Abdo-omran2206" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github hover:text-gray-800 transition-colors duration-200 glow-icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/abdalla-omran-388572361/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin hover:text-blue-700 transition-colors duration-200 glow-icon"></i>
                </a>
                <a href="https://wa.me/+201155395273" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp hover:text-green-500 transition-colors duration-200 glow-icon"></i>
                </a>
                <a href="mailto:abadallaomran566@gmail.com">
                    <i className="fa-solid fa-envelope hover:text-red-500 transition-colors duration-200 glow-icon"></i>
                </a>
            </div>
        </section>
    )
}
export default Contact;