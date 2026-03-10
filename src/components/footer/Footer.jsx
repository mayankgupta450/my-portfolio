import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Mayank Gupta</h2>
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mayank-gupta-74b955182/" },
            { icon: <FaGithub />, link: "https://github.com/mayankgupta450?tab=repositories" },

          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Mayank Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default footer