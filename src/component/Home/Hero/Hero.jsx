import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id='hero' className=' bg-[#0f1117]'>
        <div className="w-11/12 mx-auto md:h-[600px] flex items-center px-6 my-16 overflow-hidden">
      
     
      <div className="max-w-3xl text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text mb-6">
          MERN stack<br />DEVELOPER
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8">
          I am <span className="text-blue-400 font-medium">Sumaiya Akter</span> – <span className="text-blue-400">web-developer</span> with a passion for creating beautiful and responsive websites.
        </p>
<div className="flex flex-col md:flex-row gap-5">
  
<Link
  to="projects"
  smooth={true}
  duration={500}
  spy={true}
  offset={-80}
  activeClass="active-link"
>
  <div className="p-[2px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 inline-block shadow-lg shadow-pink-500/30">
    <div className="bg-[#0f1117] text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:text-white transition shadow-inner">
     View My Projects
    </div>
  </div>
</Link>
<a
  href="/resume.pdf"
  download
  target="_blank"
   rel="noopener noreferrer"
  className="bg-gradient-to-r from-indigo-400 to-purple-500 w-2/3 md:w-48 text-white py-2 px-4 rounded-full hover:from-indigo-600 hover:to-purple-600"
>
  Download Resume
</a>
</div>



        
      </div>
     
      <div className="hidden md:block leading-relaxed text-gray-700 font-mono select-none pointer-events-none text-xl pl-10 bg-[#0f1117] shadow-md shadow-pink-300 rounded-md p-6">
  <p>console.log("Building beautiful things...");</p>
  <br />
  <p>$ npm install creativity</p>
  <p>&lt;code&gt; lives here &lt;/code&gt;</p>
  <p>class="dream-chaser"</p>
  <p>// Mobile-first. Always.</p>
  <p>npm run magic</p>
  <p>Grid ✦ Flex ✦ Flow</p>
  <p>// Frontend vibes only</p>
</div>


    </div>
    <hr className="bg-gray-500 h-px border-0 " />

    </div>
  );
};

export default Hero;
