"use client"
const Navbar = () => {
    return (
        <div className="border-none border-2 m-1">
      <ul className=" flex items-center justify-between space-x-5   m-6 font-mono-500">
        <li className="italic  hover:opacity-20  hover:text-orange-300 font-bold font-mono text-4xl">Dribbble</li>
        <li>Find talent</li>
        <li>For designers</li>
        <li>Inspiration</li>
        <li>Learn design</li>
        <li className="flex-1">Go Pro</li>
        <li>Log in</li>
        <li className="w-28 bg-black font-semibold py-4 text-center ... text-zinc-50 rounded-3xl ">Sign up</li>
      </ul>
      </div>
    );
  };
  
  export default Navbar;
  