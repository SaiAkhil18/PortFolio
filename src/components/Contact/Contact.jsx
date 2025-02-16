import React from "react";

const Contact = () => {
  return (
    <>
      
      <div className="dark:bg-black dark:text-white py-14">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-dark py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-5xl font-bold text-white">
                Let's work together on your next project
              </h1>
              <p className="text-gray-400">
                You can reach out to me anytime! Whether you have a project in mind, 
                a question, or just want to connect, feel free to contact me form links below.{" "}
              </p>
            </div>
            <div className="grid place-items-center">
              <a href="https://www.linkedin.com/in/sai-akhil-ponaganti-6380aa192/" target="_blank"rel="noopener noreferrer"
                className="inline-block font-semibold py-2 px-6 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase "
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
