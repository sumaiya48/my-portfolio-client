import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const list = (
    <>
      <li>
        <Link
          to="hero"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="active-link"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="services"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="active-link"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="active-link"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="active-link"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="active-link"
        >
          contact
        </Link>
      </li>
      
    </>
  );

  return (
    <div className="bg-[#0f1117] text-gray-300 sticky top-0 z-50 lg:pt-6">
      <div className="navbar shadow-sm w-11/12 mx-auto lg:border-solid border-gray-500 lg:border-2 rounded-xl">
        {/* Left - Dropdown for mobile */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {list}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Sumaiya Akter</a>
        </div>

        {/* Center - Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4 items-center">{list}</ul>
        </div>

        {/* Right - Contact button */}
        <div className="navbar-end">
     

<Link
  to="contact"
  smooth={true}
  duration={500}
  spy={true}
  offset={-80}
  activeClass="active-link"
>
  <div className="p-[2px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 inline-block shadow-lg shadow-pink-500/30">
    <div className="bg-[#0f1117] text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:text-white transition shadow-inner">
      Contact
    </div>
  </div>
</Link>

         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
