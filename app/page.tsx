export default function Home() {
  return (
    <>
      <header className="flex justify-center items-center p-4">
        <Navbar />
      </header>
    </>
  );
}



export function Navbar(){
  return(
    <nav className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg w-auto flex fixed px-15 py-3 rounded-4xl mt-15">
      <ul className="flex gap-20 text-white font-bold text-xl">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  )
}
