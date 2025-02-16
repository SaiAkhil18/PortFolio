import React from "react";

const Companies = () => {
  return (
    <div className="dark:bg-black text-white dark:text-white py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* first col */}
          <div className="grid grid-rows-2 gap-4">
            <div className="text-center p-6 bg-dark">
              <h1 className="text-5xl font-bold">HURON</h1>
              <p className="text-xl font-semibold"> 1.5 Years Experience</p>
            </div>
          </div>
          {/* second col */}
          <div className="grid grid-rows-2 gap-4">
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold">Analyst I</h1>
              <p>Joined as Fresher</p>
            </div>
          </div>
          {/* Third col */}
          <div className="grid grid-rows-2 gap-4">
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold">Aug-2023</h1>
              <p>years in comapany</p>
            </div>
          </div>  
      </div>
    </div>
  );
};

export default Companies;
