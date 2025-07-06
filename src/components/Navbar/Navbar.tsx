import { useState } from "react";
import { NavLink } from "react-router";


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "!text-blue-500 font-semibold !bg-transparent"
      : "text-black hover:text-blue-500 hover:!bg-transparent transition";

  const links = (
    <>
      <li><NavLink to="/" className={navLinkStyle}>Home</NavLink></li>
      <li><NavLink to="/books" className={navLinkStyle}>All Books</NavLink></li>
      <li><NavLink to="/create-book" className={navLinkStyle}>Add Book</NavLink></li>
      <li><NavLink to="/borrow-summary" className={navLinkStyle}>Borrow Summary</NavLink></li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="w-11/12 mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            {/* <img src={logoPic} className="w-10 h-10" alt="BookBase Logo" /> */}
            <span className="text-blue-500 font-bold text-xl">Lend Book</span>
          </NavLink>

          {/* Desktop Menu*/}
          <div className="hidden lg:flex items-center space-x-6">
            <ul className="flex space-x-6 items-center">{links}</ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="btn btn-ghost">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-base-100 shadow-md">
          <ul className="flex flex-col space-y-2 px-4 py-4 border-t">{links}</ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;