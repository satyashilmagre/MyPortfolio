import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import About from './About';
import Whatido from './Whatido';
import Skills from './Skills';
import Projects from './Projects';
import Blogs from './Blogs';
import Footer from './Footer';
import Education from './Education';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <About/>
            <Whatido/>
            <Skills/>
            <Education/>
            <Projects/>
            <Blogs/>
            <Footer/>
        </div>
    );
}

export default Home;
