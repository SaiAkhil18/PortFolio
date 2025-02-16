import React from "react";
import { Navlinks } from "../Navbar/Navbar";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="dark:bg-black text-white dark:text-white pt-10">
      <div className="container">
        <ul className="flex items-center justify-center gap-6">
          {Navlinks.map(({ id, name, link }) => (
            <li key={id}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer icons centered */}
      <div className="bg-dark container">
        <div className="mt-10 p-6 flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="hidden sm:block">Ponaganti Sai Akhil | All rights reserved</h1>
          
          <div className="flex gap-6 justify-center">
            <a href="https://www.linkedin.com/in/sai-akhil-ponaganti-6380aa192/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
            </a>
            <a href="https://github.com/SaiAkhil18" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
            </a>
            <a href="mailto:saiakhil2310@gmail.com?subject=Position%20Available%20for%20.NET%20Fullstack%20Developer" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />
            </a>
          </div>

          <div className="hidden sm:block">⚙️ React | Tailwind CSS</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
