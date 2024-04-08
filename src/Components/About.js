import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
    return (
        <div>
            <div className='container sectiontwo ' id='Aboutus'>
            <h2 className="my-3 text-center">About <span>Me</span></h2>

                <div className='d-flex flex-wrap'>
                    <div className='col-xl-6 col-sm-12 col-md-6'>
                        <img className='img-fluid ' src='image/boys.png' alt='boy' />
                    </div>
                    <div className='col-xl-6 col-sm-12 col-md-6 aboutme'>
                        <p>Hello, My name is Satyashil Magre and I'm from Aurangabad MH. I'm a 23 year old. I graduated in a Bachelor of Computer Science
                            from Dr. Babasaheb Ambedkar Marathwada University Aurangabad. Recently, I'm Completed an Master of Computer Application MCA from .Dr. Babasaheb Ambedkar Marathwada
                            University Aurangabad. My technical skills are in HTML, CSS, Bootstrap, JQuery, and JavaScript, and also familiar with React JS.
                        </p>
                        <p>I am Currently Working as a Frontend Developer in KSJ technology Pvt Ltd. I have built a project on the Ecommerce web sites.
                            And created my personal portfolio website and also cloned Flipkart. My strengths are I'm an honest, self-motivated, a quick learner
                            and hard-working. My hobbies are playing Chess, Reading, Writing, Traveling, and also in photography. I'm a disciplined person and
                            believe in learning from my past mistakes and experiences.
                        </p>
                    </div>
                </div>
                <div className=' container-fluid  skill '>
                    <p className='skills'>React</p>
                    <p className='skills'>JavaScript</p>
                    <p className='skills'>CSS</p>
                    <p className='skills'>HTML</p>
                    <p className='skills'>JQuery</p>
                    <p className='skills'>GIT</p>
                    <p className='skills'>Responsive/Mobile Design</p>
                    <p className='skills'>WordPress</p>
                    <p className='skills'>PHP</p>
                    <p className='skills'>SQL</p>
                    <p className='skills'>Bootstrap</p>
                    <p className='skills'>Jira</p>
                    <p className='skills'>Web Tools</p>
                    <p className='skills'>SEO</p>
                    <p className='skills'>FIGMA</p>
                    <p className='skills'>TailwadCSS</p>
                    <p className='skills'>Material UI</p>
                    <p className='skills'>Cross Browser Development</p>
                    <p className='skills'>Testing And Debugging</p>
                    <p className='skills'>Creativity</p>
                    <p className='skills'>Teamwork</p>
                    <p className='skills'>Problem Solving</p>
                    <p className='skills'>Angular</p>
                    <p className='skills'>JSON</p>
                    <p className='skills'>UI/UX</p>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <button className='dbutton'>Dowload CV <FontAwesomeIcon icon={faDownload} /></button>
                </div>
            </div>
        </div>
    );
}

export default About;
