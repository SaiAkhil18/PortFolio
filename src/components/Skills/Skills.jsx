import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "React UI",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-white duration-300" />
    ),
    link: "#",
    description: "HTML5, CSS, Javascript",
  },
  {
    name: ".Net Backend",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-white duration-300" />
    ),
    link: "#",
    description: ".net 6, REST API ,SQL ",
  },
  {
    name: "Languages",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-white duration-300" />
    ),
    link: "#",
    description: "C# , Python and JavaScript",
  },
];
const Skills = () => {
  return (
    <>
      <span id="about"></span>

      <div className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div className="card group space-y-3 p-4 bg-dark  hover:bg-primary duration-300 text-white">
                <div>{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-white duration-300"
                >
                  
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
