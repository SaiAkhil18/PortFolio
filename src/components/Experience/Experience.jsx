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
    <strong>Test Observability & Monitoring: </strong> Cloud Monitoring & Debugging </strong> to build a real-time test execution dashboard, reducing failure analysis 
    time by <strong> 40% </strong> through automated log aggregation and issue categorization.
  </li>
  <li>
    <strong>Automated Resilience Testing:</strong> Implemented robust error-handling and fault-injection scripts within the automation framework, 
    proactively identifying edge cases and improving system stability by <strong> 20% </strong> before production releases.
  </li>
  <li>
    <strong>UI Automation & Component Testing:</strong> Engineered a scalable UI testing framework using <strong> Playwright and Selenium </strong> 
    for complex React components,leveraging optimized state-handling to reduce flaky test results and increase automation coverage for user engagement features.
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
