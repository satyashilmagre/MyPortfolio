
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedapps } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
        <div>
             <nav class="navbar navbar-expand-xl  responivenav ">
                    <div class="container-fluid ">
                        <p class="navbar-brand ms-2  mt-2 myname" href="#"><span className='myname'>
                        {/* <FontAwesomeIcon icon ={faMedapps} /> */}
                        {/* <FontAwesomeIcon icon="fa-brands fa-medapps" /> */}
                        <FontAwesomeIcon icon={faMedapps} fade size="" style={{ color: "#04e6f6", }} className='me-2' />
                        {/* <FontAwesomeIconcon icon={faMedapps } fade size="" style={{ color: "#04e6f6", }} className='me-2' /> */}
                        Satyashil</span></p>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse  " id="navbarBasic">
                            <ul class="navbar-nav me-3 mb-2 mb-xl-0 ms-auto  p-2 text-center ">
                                <li class="nav-item me-5  ">
                                    <a class="nav-button" href="#Home">Home</a>
                                </li>
                                <li class="nav-item  me-5 ">
                                    <a class="nav-button" href="#Aboutus">About</a>
                                </li>
                                <li class="nav-item   me-5 ">
                                    <a class="nav-button " href="#Skills">Skills</a>
                                </li>
                                <li class="nav-item   me-5">
                                    <a class="nav-button" href="#Experience">Experience</a>
                                </li>
                                <li class="nav-item   me-5">
                                    <a class="nav-button" href="#Projects">Projects</a>
                                </li>
                                <li class="nav-item   me-5 ">
                                    <a class="nav-button" href="#Contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </div>
    );
}

export default Navbar;
