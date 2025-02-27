import { useState } from "react";

const Navbar = () =>{
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="top-0 left-0 w-full flex justify-between items-center md:p-2 m-8 relative">
      {/* Menu Button */}
      <div className="fixed  md:hidden flex items-center z-50 ml-[300px]">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`text-white  rounded-full px-2 py-2 transition-all duration-300 ${
          menuOpen ?"border-transparent":"border  border-white/60"
}`}
        >
            {menuOpen ? (
                <svg
                className="w-6 h-6"
                fill="none"
                stroke="rgb(254,220,0)"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          )}
        </button>
      </div>

      {/* Animated Background Menu */}
      <div
  className={`fixed top-[100px] right-0 w-[80px] h-[80px]  bg-[rgb(110,56,147)] transition-all duration-1000 ease-in-out origin-center
  md:hidden z-40 
  ${menuOpen ? "scale-[25] opacity-100 rounded-[40%]" : "scale-0 opacity-0 rounded-full"}`}
></div>

      {/* Menu Items */}
      <div
  className={`fixed text-[24px] mt-[700px] md:mt-0 md:text-base lg:text-base text-center left-1/2 transform -translate-x-16 md:translate-x-[-200px] lg:translate-x-[-200px] px-4 py-3 z-50 flex flex-col gap-24 md:flex md:flex-row
  md:opacity-100 md:relative lg:relative md:gap-7 lg:gap-7 md:bg-transparent
  ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
  transition-opacity duration-200`}
>

        <a
          href="#section2"
          className={`nav-items text-[rgb(254,220,0)] font-medium md:text-white transition-all duration-700 ease-out md:transition-none  ${
      menuOpen ? " opacity-100  translate-y-0 delay-200" : "opacity-0 md:opacity-100 translate-y-10 md:translate-y-0"
    }`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("section2")?.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          Home
        </a>
        <a
          href="#section4"
          className={`nav-items  text-[rgb(254,220,0)] font-medium md:text-white transition-all duration-700 ease-out md:transition-none ${
            menuOpen ? "opacity-100 translate-y-0 delay-300" : "opacity-0 md:opacity-100 translate-y-10 md:translate-y-0"
          }`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("section4")?.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          Work
        </a>
        <a
          href="#section5"
          className={`nav-items text-[rgb(254,220,0)] font-medium md:text-white transition-all duration-700 ease-out md:transition-none ${
            menuOpen ? "opacity-100 translate-y-0 delay-500" : "opacity-0 md:opacity-100 translate-y-10 md:translate-y-0"
          }`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("section5")?.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          Studio
        </a>
        <a
          href="#section9"
          className={`nav-items text-[rgb(254,220,0)] font-medium md:text-white transition-all duration-700 ease-out md:transition-none ${
            menuOpen ? "opacity-100 translate-y-0 delay-700" : "opacity-0 md:opacity-100 translate-y-10 md:translate-y-0"
          }`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("section9")?.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          Contact
        </a>
         <div className="flex  items-center space-x-5 md:space-x-10 lg:pl-24 mt-[-15px]">
    <a href="#" className="text-white hidden lg:block text-sm md:text-base">Jakarta, ID 23:22 PM</a>
    <a href="#" className="text-white border hidden md:block lg:block border-white/60 rounded-full hover:border-white/20 duration-200 px-4 md:px-5 py-3 md:py-4">Call us now</a>
  </div>
      </div>
    </nav>
  );
}


export default Navbar;
