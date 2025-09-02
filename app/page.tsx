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
    <nav className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg  p-6 w-auto flex sticky px-5 py-3 rounded-4xl">
      <ul className="flex gap-15 text-white font-bold">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  )
}
