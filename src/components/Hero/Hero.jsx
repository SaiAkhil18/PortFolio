import React from "react";
import PersonImg from "../../assets/website/person.png";
import FilePdf from "../../assets/website/file.pdf"; // Import the PDF file

const Hero = () => {
  const handleDownload = () => {
    fetch(FilePdf)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Ponaganti_Sai_Akhil_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      });
  };

  // ✅ Now returning JSX from the component itself
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div>
            <img src={PersonImg} alt="Ponaganti Sai Akhil" />
          </div>
          <div className="space-y-3">
            <p className="text-2xl font-semibold">Hello, I'm Ponaganti Sai Akhil! 😉 </p>
            <h1 className="text-5xl font-semibold">Full-Stack Developer</h1>
            <p>
              I'm a passionate <span className="font-bold text-red-500">Full-Stack Developer</span> with expertise in
              <span className="font-bold text-red-500"> React</span>, <span className="font-bold text-red-500">.NET Core </span>
              and modern web technologies. I love building sleek, high-performance applications that provide seamless
              user experiences. Whether it's crafting <span className="font-bold text-red-500">dynamic front-end interfaces </span>
              or optimizing <span className="font-bold text-red-500">robust back-end solutions</span>, I thrive on solving complex
              challenges. Always eager to <span className="font-bold text-red-500">learn and innovate</span>, I aim to create
              software that makes an impact. <span className="font-bold text-red-500">Let's build something amazing together!</span>
            </p>
            <button
              onClick={handleDownload}
              className="uppercase bg-primary hover:bg-primary/80 duration-500 py-2 px-6 text-white"
            >
              My Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
