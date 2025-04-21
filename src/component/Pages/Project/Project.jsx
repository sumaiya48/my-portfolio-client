import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Project = ({ title, tech, liveLink, githubLink, img }) => {
  return (
    <div className="bg-[#11131c] border border-gray-800 rounded-xl p-6 shadow-md shadow-pink-500/5 transition-transform hover:-translate-y-1 hover:shadow-pink-500/10 duration-300 w-full">
      {img && (
        <img
          src={img}
          alt={title}
          className="w-full h-40 object-cover mb-4 rounded"
        />
      )}

      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

      <p className="text-gray-400 text-sm mb-4">{tech}</p>

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
