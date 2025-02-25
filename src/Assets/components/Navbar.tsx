import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="top-0 left-0 w-full flex flex-wrap justify-between items-center md:p-6 m-8">
      <div className="md:hidden flex items-center ml-[300px]">
        <button
          id="menu-btn"
          className="text-white border border-white/60 rounded-full px-3 py-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
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
        </button>
      </div>

      <div
  id="menu"
  className={`${
    menuOpen ? "block" : "hidden"
  } transform transition-transform duration-500 ease-in-out md:flex flex-col md:flex-row md:space-x-10 md:w-full lg:w-full z-50 ${
    menuOpen ? "translate-y-0" : "-translate-y-full"
  } fixed inset-0 bg-[rgb(110,56,147)] md:static md:bg-transparent md:translate-y-0 md:transition-none`}
>
        <div className="absolute left-1/2 transform -translate-x-[74%] md:-translate-x-[50%] space-x-3 md:space-x-7 px-4 md:px-6 py-3 z-50 flex flex-col md:flex-row">
          <a
            href="#section2"
            className="nav-items text-white"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("section2")
                ?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Home
          </a>
          <a
            href="#section4"
            className="nav-items text-white"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("section4")
                ?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Work
          </a>
          <a
            href="#section5"
            className="nav-items text-white"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("section5")
                ?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Studio
          </a>
          <a
            href="#section9"
            className="nav-items text-white"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("section9")
                ?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Contact
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-5 md:space-x-10 md:ml-[500px] lg:ml-[1000px]">
        <a href="#" className="text-white hidden lg:block text-sm md:text-base">
          Jakarta, ID 23:22 PM
        </a>
        <a
          href="#"
          className="text-white border hidden md:block lg:block border-white/60 rounded-full hover:border-white/20 duration-200 px-4 md:px-5 py-3 md:py-4"
        >
          Call us now
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
