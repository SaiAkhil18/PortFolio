import React from "react";
import DarkMode from "./DarkMode";
import { FaEnvelope } from "react-icons/fa";
import PersonImg from "../../assets/website/person.png";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
 // {
  //   id: 2,
  //   name: "PROJECTS",
  //   link: "/#project",
  // },
  {
    id: 3,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 4,
    name: "CONTACT",
    link: "https://www.linkedin.com/in/sai-akhil-ponaganti-6380aa192",
    external: true,
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md w-full dark:bg-black dark:text-white">
      <div className="container py-2 sm:py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <span className="text-3xl font-bold">PortFolio</span>

          {/* Navigation Links */}
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-6">
              {Navlinks.map(({ id, name, link, external }) => (
                <li key={id}>
                  <a
                    href={link}
                    target={external ? "_blank" : "_self"}
                    rel={external ? "noopener noreferrer" : ""}
                    className="inline-block text-lg font-medium py-3 hover:text-primary duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Profile & Email */}
          <div className="flex items-center gap-4">
            {/* Email Icon */}
            <a
              href="mailto:saiakhil2310@gmail.com?subject=Position%20Available%20for%20.NET%20Fullstack%20Developer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
            </a>

            {/* Profile Picture */}
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
              <img
                src={PersonImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Dark Mode Toggle */}
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
