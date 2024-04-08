import { faAngular, faBootstrap, faCss3Alt, faGithub, faHtml5, faReact } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div id='Projects'>
            <h1 className="text-center m-4">My <span className='projects-head'>Projects</span></h1>
            <div className=" container-fluid project">
                <div className='row'>
                    <div className=" col-xl-3 col-md-6 col-sm-12 ">
                        <div className="mt-2 project-list">
                        <img className="img-fluid project-image" alt="netflix-project" src="image/Netflix.png" />
                        <div className='d-flex justify-content-between m-2 project-title'>
                            <div className=''>
                                <h6>Netflix UI Clone</h6>
                                <a className='link' href='https://github.com/satyashilmagre/Netflix-UI-Clone'>Project Link <FontAwesomeIcon icon={faLink} size='xs' /></a>
                                <div className='d-flex mt-2'>
                                    <p>Techology Used : </p>
                                    <div className='ms-1'>
                                        <FontAwesomeIcon className='ms-1' icon={faHtml5} style={{ color: "#F4470B" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faCss3Alt} style={{ color: "#254BDD" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faBootstrap} style={{ color: "#7811F2" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faReact} style={{ color: "#00D1F7" }} />
                                    </div>
                                </div>
                            </div>
                            <Link to="https://github.com/satyashilmagre/Netflix-UI-Clone"><FontAwesomeIcon icon={faGithub} size="lg" style={{ color: "black", }} /></Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                       <div className='mt-2 project-list'>
                       <img alt='project-three' className=" img-fluid project-image" src="image/xioami.png" />
                        <div className='d-flex justify-content-between m-2 project-title'>
                            <div>
                                <h6>Xioami UI Clone</h6>
                                <a className='link' href='https://xioamiuiclone.netlify.app/'>Project Link</a>
                                <div className='d-flex mt-2'>
                                    <p>Techology Used : </p>
                                    <div className='ms-1'>
                                        <FontAwesomeIcon className='ms-1' icon={faHtml5} style={{ color: "#F4470B" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faCss3Alt} style={{ color: "#254BDD" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faBootstrap} style={{ color: "#7811F2" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faReact} style={{ color: "#00D1F7" }} />
                                    </div>
                                </div>
                            </div>
                            <Link to="https://github.com/satyashilmagre/Netflix-UI-Clone"><FontAwesomeIcon icon={faGithub} size="lg" style={{ color: "black", }} /></Link>
                        </div>
                       </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12">
                       <div className='project-list mt-2'>
                       <img alt='angry birds project' className=" img-fluid project-image" src="image/Angry-Bird-UI.png" />
                        <div className='d-flex justify-content-between m-2 project-title'>
                            <div>
                                <h6>Angry Birds Website UI Clone</h6>
                                <a className='link'  href='https://angrybirdclone.netlify.app/'>Project Link</a>
                                <div className='d-flex mt-2'>
                                    <p>Techology Used : </p>
                                    <div className='ms-1'>
                                        <FontAwesomeIcon className='ms-1' icon={faHtml5} style={{ color: "#F4470B" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faCss3Alt} style={{ color: "#254BDD" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faBootstrap} style={{ color: "#7811F2" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faAngular} style={{ color: "red" }} />
                                    </div>
                                </div>
                            </div>
                            <Link to="https://github.com/satyashilmagre/Angry-Bird-UI-Clone"><FontAwesomeIcon icon={faGithub} size="lg" style={{ color: "black", }} /></Link>
                        </div>
                       </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-12 ">
                       <div className='project-list mt-2'>
                       <img alt='angry birds project' className=" img-fluid project-image" src="image/Angry-Bird-UI.png" />
                        <div className='d-flex justify-content-between m-2 project-title'>
                            <div>
                                <h6>Angry Birds Website UI Clone</h6>
                                <a className='link' href='https://angrybirdclone.netlify.app/'>Project Link</a>
                                {/*  target="blank" "open the New Tab" */}
                                <div className='d-flex mt-2'>
                                    <p>Techology Used : </p>
                                    <div className='ms-1'>
                                        <FontAwesomeIcon className='ms-1' icon={faHtml5} style={{ color: "#F4470B" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faCss3Alt} style={{ color: "#254BDD" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faBootstrap} style={{ color: "#7811F2" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faAngular} style={{ color: "red" }} />
                                    </div>
                                </div>
                            </div>
                            <Link to="https://github.com/satyashilmagre/Angry-Bird-UI-Clone"><FontAwesomeIcon icon={faGithub} size="lg" style={{ color: "black", }} /></Link>
                        </div>
                       </div>
                    </div>
                   
                    {/* <div className="mt-5 project-list">
                        <img alt='project-four' className=" project-image" src="image/iam.png" />
                        <div className='d-flex justify-content-between m-2 project-title'>
                            <div>
                                <h6>Project Name</h6>
                                <a className='link' href='https://github.com/satyashilmagre'>Project Link</a>
                                <div className='d-flex mt-2'>
                                    <p>Techology Used : </p>
                                    <div className='ms-1'>
                                        <FontAwesomeIcon className='ms-1' icon={faHtml5} style={{ color: "#F4470B" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faCss3Alt} style={{ color: "#254BDD" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faBootstrap} style={{ color: "#7811F2" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faReact} style={{ color: "#00D1F7" }} />
                                    </div>
                                </div>
                            </div>
                            <a href='https://github.com/satyashilmagre'><FontAwesomeIcon icon={faGithub} size="lg" style={{ color: "black", }} /></a>
                        </div>
                    </div>
                    <div className="mt-5 project-list">
                        <img className=" project-image" alt='project-five' src="image/iam.png" />
                        <div className='d-flex justify-content-between m-2 project-title'>
                            <div>
                                <h6>Project Name</h6>
                                <a className='link' href='https://github.com/satyashilmagre'>Project Link</a>
                                <div className='d-flex mt-2'>
                                    <p>Techology Used : </p>
                                    <div className='ms-1'>
                                        <FontAwesomeIcon className='ms-1' icon={faHtml5} style={{ color: "#F4470B" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faCss3Alt} style={{ color: "#254BDD" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faBootstrap} style={{ color: "#7811F2" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faReact} style={{ color: "#00D1F7" }} />
                                    </div>
                                </div>
                            </div>
                            <Link to="https://github.com/satyashilmagre"><FontAwesomeIcon icon={faGithub} size="lg" style={{ color: "black", }} /></Link>
                        </div>
                    </div>
                    <div className="mt-5 project-list">
                        <img className=" project-image" alt='project six' src="image/iam.png" />
                        <div className='d-flex justify-content-between m-2 project-title'>
                            <div>
                                <h6>Project Name</h6>
                                <a className='link' href='https://github.com/satyashilmagre'>Project Link</a>
                                <div className='d-flex mt-2'>
                                    <p>Techology Used : </p>
                                    <div className='ms-1'>
                                        <FontAwesomeIcon className='ms-1' icon={faHtml5} style={{ color: "#F4470B" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faCss3Alt} style={{ color: "#254BDD" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faBootstrap} style={{ color: "#7811F2" }} />
                                        <FontAwesomeIcon className='ms-2' icon={faReact} style={{ color: "#00D1F7" }} />
                                    </div>
                                </div>
                            </div>
                            <a href='https://github.com/satyashilmagre'><FontAwesomeIcon icon={faGithub} size="lg" style={{ color: "black", }} /></a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
export default Projects;
