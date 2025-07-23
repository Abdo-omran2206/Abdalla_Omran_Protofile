'use client';
function Homesec(){
    const handleScroll = () => {
        const section = document.getElementById('projects');
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    return(

        <section id="home" className="flex overflow-hidden items-center justify-center min-h-screen relative animate-[fadeIn_2s_ease-in-out]">
            <div
                className="w-screen 
                h-150 
                rounded-b-full 
                border-b-3
                border-blue-800
                overflow-hidden
                shadow-xl shadow-blue-800/80
                absolute
                top-0
                animate-pulse
                max-sm:h-130
                max-sm:rounded-b-[180px]"
                style={{ animationDuration: "10s" }}
            >
            </div>
            <div className="m-auto text-center relative z-10 gap-3" data-aos="zoom-out-up">
                <h1 className="text-sky-700 font-[var(--main-font)] text-7xl tracking-widest text-shadow-md text-shadow-blue-600 transition-all duration-2000 hover:scale-105 max-sm:text-4xl animate-pulse delay-2000">
                    Abdalla Omran
                </h1>
                <h5 className="text-sky-600 font-[var(--secondary-font)] text-5xl tracking-wider text-shadow-md text-shadow-blue-600 transition-all duration-500 hover:scale-105 max-sm:text-2xl">Front-End / Back-End Developer</h5>
                <a onClick={handleScroll} href="#projects" className="inline-block mt-4 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">View Projects</a>
            </div>
        </section>
    )
}

export default Homesec;