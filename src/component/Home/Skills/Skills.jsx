import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNpm,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiVite,
} from 'react-icons/si';

const Skills = () => {
  return (
  <div>
      
      <div className='bg-[#0f1117]'>
      <hr className="bg-gray-500 h-px border-0" />
        <div id='skills' className=" w-11/12 mx-auto text-white px-6 py-20 md:px-20 font-sans ">
      <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-700 to-indigo-800 text-transparent bg-clip-text mb-6">
        SKILLS
      </h2>
      <p className="text-gray-400 text-base mb-12">
        The skills, tools and technologies I use:
      </p>

      {/* Row 1: 6 icons */}
      <div className='text-center'>
      <div className="flex flex-wrap justify-center gap-10 mb-12">
        <div className="flex flex-col items-center hover:scale-110 transition-all duration-300   hover:shadow-pink-500 hover:shadow-lg p-4 w-[95px]  rounded-full">
          <FaHtml5 className="text-4xl text-orange-500" />
          <p className="text-sm text-gray-300 mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-all duration-300   hover:shadow-pink-500 hover:shadow-lg p-4 w-[95px] rounded-full">
          <FaCss3Alt className="text-4xl text-blue-500" />
          <p className="text-sm text-gray-300 mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-all duration-300   hover:shadow-pink-500 hover:shadow-lg p-4 w-[95px] rounded-full">
          <FaJs className="text-4xl text-yellow-300" />
          <p className="text-sm text-gray-300 mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-all duration-300   hover:shadow-pink-500 hover:shadow-lg p-4 w-[95px] rounded-full">
          <SiTailwindcss className="text-4xl text-cyan-400" />
          <p className="text-sm text-gray-300 mt-2">Tailwind</p>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-all duration-300   hover:shadow-pink-500 hover:shadow-lg p-4 w-[95px] rounded-full">
          <FaReact className="text-4xl text-sky-400" />
          <p className="text-sm text-gray-300 mt-2">React</p>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-all duration-300   hover:shadow-pink-500 hover:shadow-lg p-4 w-[95px] rounded-full">
          <SiVite className="text-4xl text-purple-400" />
          <p className="text-sm text-gray-300 mt-2">Vite</p>
        </div>
      </div>

      {/* Row 2: 4 icons */}
      <div className="flex flex-wrap justify-center gap-14 mb-12">
        <div className="flex flex-col items-center hover:scale-110 transition-all duration-300   hover:shadow-pink-500 hover:shadow-lg p-4 w-[95px] rounded-full">
          <FaNodeJs className="text-4xl text-green-500" />
          <p className="text-sm text-gray-300 mt-2">Node.js</p>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-all duration-300   hover:shadow-pink-500 hover:shadow-lg p-4 w-[95px] rounded-full">
          <SiMongodb className="text-4xl text-green-400" />
          <p className="text-sm text-gray-300 mt-2">MongoDB</p>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-all duration-300   hover:shadow-pink-500 hover:shadow-lg p-4 w-[95px] rounded-full">
          <SiFirebase className="text-4xl text-yellow-400" />
          <p className="text-sm text-gray-300 mt-2">Firebase</p>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-all duration-300   hover:shadow-pink-500 hover:shadow-lg p-4 w-[95px] rounded-full">
          <FaNpm className="text-4xl text-red-600" />
          <p className="text-sm text-gray-300 mt-2">NPM</p>
        </div>
      </div>

      {/* Row 3: 2 icons */}
      <div className="flex flex-wrap justify-center gap-20">
        <div className="flex flex-col items-center hover:scale-110 transition-all duration-300   hover:shadow-pink-500 hover:shadow-lg p-4 w-[95px] rounded-full">
          <FaFigma className="text-4xl text-pink-500" />
          <p className="text-sm text-gray-300 mt-2">Figma</p>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-all duration-300   hover:shadow-pink-500 hover:shadow-lg p-4 w-[95px] rounded-full">
          <FaGitAlt className="text-4xl text-orange-400" />
          <p className="text-sm text-gray-300 mt-2">Git</p>
        </div>
      </div>
      </div>
     
    </div>
    
    </div>
  
  </div>
  );
};

export default Skills;
