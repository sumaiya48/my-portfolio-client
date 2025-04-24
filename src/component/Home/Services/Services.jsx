import React from 'react';
import { FaCode, FaPalette, FaServer } from 'react-icons/fa';

const Services = () => {
  return (
    <div id="services" className='bg-[#0f1117] py-20'>
      <div  className="w-11/12 mx-auto px-6  md:px-20  text-white font-sans">
        <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text mb-6">
          MY SERVICES
        </h2>

        <ul className="timeline timeline-vertical">

          {/* Website Development */}
          <li>
            <div className="timeline-start md:text-end text-left -mr-16 w-[200px] md:w-full mb-3">
              <div className="inline-block bg-[#11131c] border border-gray-800 p-4 rounded-lg shadow-md shadow-pink-500/10 transition-transform duration-300 hover:scale-105 hover:shadow-pink-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <FaCode className="text-blue-400 text-xl" />
                  <h3 className="text-lg font-semibold">Website Development</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I create websites based on your ready-made design. Whether it's a landing page or a business card website, I will make it look great and work smoothly on any device.
                </p>
              </div>
            </div>
            <hr className="bg-gray-800 h-[2px] -mb-32 hidden md:block" />
          </li>

          {/* Web Design */}
          <li>
            <div className="timeline-end mb-3 w-[200px] md:w-full -ml-32 md:-ml-20 mt-12">
              <div className="inline-block bg-[#11131c] border border-gray-800 p-4 rounded-lg shadow-md shadow-purple-500/10 transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <FaPalette className="text-purple-400 text-xl" />
                  <h3 className="text-lg font-semibold">Web Design</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals.
                </p>
              </div>
            </div>
            <hr className="bg-gray-800 h-[2px] -mb-44 hidden md:block" />
          </li>

          {/* Full Stack Development */}
          <li>
            <div className="timeline-start md:text-end text-left mb-3 w-[200px] md:w-full -ml-[96px] mt-12 -mr-16">
              <div className="inline-block bg-[#11131c] border border-gray-800 p-4 rounded-lg shadow-md shadow-blue-500/10 transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/30">
                <div className="flex items-center gap-3 mb-3">
                  <FaServer className="text-cyan-400 text-xl" />
                  <h3 className="text-lg font-semibold">Full-Stack Web Application</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I build dynamic full-stack web apps using MongoDB, Express, React, and Node.js. From building secure APIs to creating user dashboards, I deliver modern, scalable solutions tailored to your needs.
                </p>
              </div>
            </div>
          </li>

        </ul>
      </div>
 <hr className="bg-gray-500 h-px hidden  border-0" />
    
    </div>
  );
};

export default Services;
