import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="dark:bg-black dark:text-white py-8 px-4 md:px-8 lg:px-16"> 
      {/* Dynamically adjusts padding for all screen sizes */}

      <h1 className="text-center text-3xl md:text-4xl font-bold mb-6">Work Experience</h1> 
      {/* Adjusted font size based on screen size */}

      <div className="flex justify-center">
        <div className="w-full max-w-4xl bg-dark p-6 md:p-8 rounded-lg shadow-md"> 
          {/* Container scales up dynamically while staying centered */}

          <h6 className="text-lg md:text-xl font-semibold text-primary mb-3">
            Associate Software Engineer (Analyst I) - Huron
          </h6>

          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm md:text-base">
  <li>
    <strong>Cloud Monitoring & Debugging:</strong> Utilized <strong>AWS Lambda</strong> & <strong>CloudWatch logs</strong> 
    for real-time monitoring, reducing debugging time by <strong>40%</strong> through automated issue tracking.
  </li>
  <li>
    <strong>Resilient & Fault-Tolerant Systems:</strong> Implemented <strong>robust error-handling mechanisms</strong> with 
    proactive logging, minimizing system downtime and improving <strong>stability by 25%</strong>.
  </li>
  <li>
    <strong>Interactive & Scalable Frontend Development:</strong> Engineered highly interactive, reusable <strong>React components</strong> 
    with optimized state management, enhancing <strong>UI responsiveness</strong> and boosting <strong>user engagement</strong>.
  </li>
  <li>
    <strong>Error Handling & Stability:</strong> Designed <strong>error-handling mechanisms</strong>, covering edge cases 
    for better system <strong>stability</strong>.
  </li>
  <li>
    <strong>API Development & Integration:</strong> Built and integrated <strong>RESTful APIs</strong> with efficient 
    data fetching, reducing <strong>API response times by 35%</strong>.
  </li>
  <li>
    <strong>CI/CD & DevOps Practices:</strong> Automated deployment workflows using <strong>CI/CD pipelines</strong>, 
    ensuring seamless integration and <strong>faster feature delivery</strong>.
  </li>
  <li>
    <strong>Database Optimization:</strong> Optimized <strong>PostgreSQL queries & indexing</strong>, significantly improving 
    database <strong>query execution speed</strong> and reducing <strong>server load</strong>.
  </li>
</ul>


<div className="flex justify-center mt-4">
  <div className="flex flex-wrap gap-3 justify-center">
    {["React.js", "ASP.NET", "PostgreSQL", "AWS"].map((skill, index) => (
      <span key={index} className="rounded bg-gray-700 px-3 py-1 text-sm font-medium text-blue-300">
        {skill}
      </span>
    ))}
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
