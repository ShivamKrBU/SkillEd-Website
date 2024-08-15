import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/HeaderImages/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "../../Components/Store/Auth";  // Import the useAuth hook

export default function HeaderComponent() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, removeTokenFromLs } = useAuth();  // Access isAuthenticated and removeTokenFromLs from context

  const scrollHandleHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollHandleAbout = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollHandleCourse = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };
  const scrollHandleInstructor = () => {
    window.scrollTo({
      top: 2900,
      behavior: "smooth",
    });
  };

  function handleClick() {
    setOpen(!open);
  }

  const handleLogout = () => {
    removeTokenFromLs();  // Clear localStorage when logging out
  };

  return (
    <section className=" top-0 py-4 bg-sky-50 fixed w-[100%] z-30">
      <div className=" top-0 container mx-auto flex justify-between md:justify-around items-center">
        <div className="flex">
          <img src={logo} alt="Logo" className="h-8" />
        </div>
        <div>
          <nav className="hidden sm:flex space-x-16 font-bold text-center">
            <NavLink
              onClick={() => scrollHandleHome()}
              className=" focus:text-blue-700 active:text-blue-700"
              to="#main"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => scrollHandleAbout()}
              className=" focus:text-blue-700 active:text-blue-700"
              to="#about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => scrollHandleCourse()}
              className=" focus:text-blue-700 active:text-blue-700 scroll-smooth"
              to="#course"
            >
              Courses
            </NavLink>
            <NavLink
              onClick={() => scrollHandleInstructor()}
              className="focus:text-blue-700 active:text-blue-700"
              to="#instructor"
            >
              Instructors
            </NavLink>
            <NavLink
              onClick={() => scrollHandleAbout()}
              className=" focus:text-blue-700 active:text-blue-700"
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center">
          <nav className="hidden sm:flex space-x-4">
            {isAuthenticated ? (
              <Link
                to="/"
                onClick={handleLogout}
                className="bg-blue-600 hover:bg-blue-800 text-white rounded-lg px-3 md:px-4 py-1"
              >
                Logout
              </Link>
            ) : (
              <>
                <Link
                  to="/signIn"
                  className="bg-blue-600 hover:bg-blue-800 text-white rounded-lg px-3 md:px-4 py-1"
                >
                  Sign in
                </Link>
                <Link
                  to="/signUp"
                  className="bg-blue-600 hover:bg-blue-800 text-white rounded-lg px-3 md:px-4 py-1"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
          <div className="sm:hidden">
            <button
              onClick={handleClick}
              className="text-black focus:outline-none"
            >
              {open ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <section className="sm:hidden text-center">
          <ul className="space-y-2">
            <li>
              <NavLink
                onClick={() => scrollHandleHome()}
                className=" focus:text-blue-700 active:text-blue-700"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => scrollHandleAbout()}
                className=" focus:text-blue-700 active:text-blue-700"
                to="#"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => scrollHandleCourse()}
                className=" focus:text-blue-700 active:text-blue-700"
                to="#course"
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => scrollHandleInstructor()}
                className=" focus:text-blue-700 active:text-blue-700"
                to="#instructor"
              >
                Instructors
              </NavLink>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <Link
                    to="/"
                    onClick={handleLogout}
                    className="bg-blue-600 text-white rounded-lg px-3 py-1 block"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/signIn"
                    className="text-sm text-blue-600 border border-blue-600 rounded-lg px-3 py-1 block"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signUp"
                    className="bg-blue-600 text-white rounded-lg px-3 py-1 block"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </section>
      )}
    </section>
  );
}
