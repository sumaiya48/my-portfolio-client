import React from 'react';
import Hero from '../Home/Hero/Hero';
import { Outlet } from 'react-router-dom';
import Services from '../Home/Services/Services';
import Skills from '../Home/Skills/Skills';
import Footer from '../Home/Footer/Footer';
import Project from '../Pages/Project/Project';
import DashboardLayout from './DashboardLayout';
import Projects from '../Pages/Projects/Projects';
import Loading from '../Pages/Loading/Loading';
import Navbar from '../Home/Navbar/Navbar';
import Contact from '../Home/Contact/Contact';

const HomeLayout = () => {
    return (
        <div className='bg-[#0f1117]'>
            <Navbar></Navbar>
            <Hero></Hero>
            <Services></Services>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;