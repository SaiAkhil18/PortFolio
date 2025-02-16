import React, { useState } from "react";
import web1 from "../../assets/website/Screenshot1.png";
import web2 from "../../assets/website/Screenshot2.png";
import web3 from "../../assets/website/Screenshot3.png";
import web4 from "../../assets/website/nptel.png";

const ProjectsData = [
  {
    id: 1,
    name: "Leranizo Global Frontend",
    image: web1,
    link: "#",
  },
  {
    id: 2,
    name: "Leranizo Global Backend",
    image: web3,
    link: "#",
  },
  {
    id: 3,
    name: "Leranizo Global Capstone",
    image: web2,
    link: "#",
  },
  {
    id: 4,
    name: "NPTEL Python for Data Science",
    image: web4,
    link: "#",
  },
];

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <span id="project"></span>
      <div className="dark:bg-black dark:text-white py-14">
        <div className="container">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="uppercase text-3xl font-bold">
                Featured Certifications
              </h1>
              <p>Finished Coures with certifications from various sources and gained knowledge</p>
            </div>
            <div>
              <button
                onClick={() => setShowProjects(!showProjects)}
                className="bg-primary hover:bg-primary/80 duration-500 py-2 px-6 text-white"
              >
                {showProjects ? "Hide" : "View All"}
              </button>
            </div>
          </header>

          {/* Card Section - Shows only when button is clicked */}
          {showProjects && (
            <section>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Card */}
                {ProjectsData.map(({ id, name, image }) => (
                  <div key={id} className="bg-dark/80 rounded-lg overflow-hidden shadow-lg">
                    <div
                      className="h-64 w-full overflow-hidden cursor-pointer group relative"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h1 className="text-xl font-bold">{name}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Image Modal for Enlarged View */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <button
              className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-lg font-bold cursor-pointer hover:bg-red-700"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
