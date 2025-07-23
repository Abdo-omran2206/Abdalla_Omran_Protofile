function Navigate(){
    return (
        <nav className="fixed flex top-0 left-0 w-full bg-[#0A0A0A]/30 backdrop-blur-md text-white p-4 items-center justify-center z-50 rounded-b-[25%]">
            <ul className="flex w-100 justify-around items-center max-w-6xl">
                <li><a className="relative overflow-hidden hover:text-shadow-blue-600 transition before:absolute before:bottom-0 before:left-0 before:content-[''] before:w-full before:h-1 before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 before:rounded-full before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 max-sm:text-sm" href="#home">Home</a></li>
                <li><a className="relative overflow-hidden hover:text-shadow-blue-600 transition before:absolute before:bottom-0 before:left-0 before:content-[''] before:w-full before:h-1 before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 before:rounded-full before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 max-sm:text-sm" href="#about">About</a></li>
                <li><a className="relative overflow-hidden hover:text-shadow-blue-600 transition before:absolute before:bottom-0 before:left-0 before:content-[''] before:w-full before:h-1 before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 before:rounded-full before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 max-sm:text-sm" href="#skills">Skills</a></li>
                <li><a className="relative overflow-hidden hover:text-shadow-blue-600 transition before:absolute before:bottom-0 before:left-0 before:content-[''] before:w-full before:h-1 before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 before:rounded-full before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 max-sm:text-sm" href="#projects">Projects</a></li>
                <li><a className="relative overflow-hidden hover:text-shadow-blue-600 transition before:absolute before:bottom-0 before:left-0 before:content-[''] before:w-full before:h-1 before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 before:rounded-full before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:scale-x-100 max-sm:text-sm" href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}
export default Navigate;