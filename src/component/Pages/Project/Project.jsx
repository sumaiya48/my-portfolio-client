import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Project = ({ title, tech, liveLink, githubLink, img }) => {
  // Convert comma-separated string to array
  const techList = tech?.split(',').map(t => t.trim());

  return (
    <div className="bg-[#11131c] border border-gray-800 rounded-xl p-6 shadow-md shadow-pink-500/5 transition-transform hover:-translate-y-1 hover:shadow-pink-500/10 duration-300 w-full">
      {img && (
        <img
          src={img}
          alt={title}
          className="w-full h-50 object-cover mb-4 rounded"
        />
      )}

      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

      {/* Tech Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {techList?.map((techItem, index) => (
          <span
            key={index}
            className="text-xs bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full shadow shadow-pink-500/20"
          >
            {techItem}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-blue-400 hover:underline"
        >
          <FaExternalLinkAlt className="text-base" /> Live Site
        </a>

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-gray-300 hover:text-white"
        >
          <FaGithub className="text-base" /> GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;
