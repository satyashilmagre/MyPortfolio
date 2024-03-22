import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedin,  faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
    return (
        <div id='Home'>
            <div className='sattu'>
                
                <div className=' d-flex justify-content-evenly align-items-center section  '>
                    <div className='d-flex justify-content-center '>
                        <div className='ms-4'>

                            <p className='hello'>Hello I'm <FontAwesomeIcon icon={faFaceSmile} /></p>
                            <h2 className='mynames'>SATYASHIL MAGRE</h2>
                            <h2 className='job'>
                                <TypeAnimation
                                    sequence={[
                                        "I'm a Frontend Developer",
                                        1000,
                                        "I'm a Web Developer",
                                        1000,
                                        "I'm a UI Designer",
                                        1000,
                                    ]}
                                    speed={30}
                                    repeat={Infinity}
                                    style={{ fontSize: '2rem' }}
                                />
                            </h2>
                            <div className='d-flex flex-column mb-2'>
                                <a className=' mb-2  gmail' href="mailto: satyashilmagre@gmail.com"> <FontAwesomeIcon icon={faEnvelope} /> satyashilmagre@gmail.com</a>
                                <a className='gmail' href="tel: +91 7499667341"><FontAwesomeIcon icon={faPhone} /> +91 7499667341</a>
                            </div>
                            <p className='gmail' ><FontAwesomeIcon icon={faLocationDot} style={{ color: "" }} /> Plot No.11 Himayat Bagh Aurangabad.</p>
                            <div className='icons w-50'>
                                <a href='https://github.com/satyashilmagre' target="blank"><FontAwesomeIcon icon={faLinkedin} size="xl" style={{ color: "rgb(104, 104, 239)", }} /></a>
                                <a href='https://github.com/satyashilmagre' target="blank"><FontAwesomeIcon icon={faGithub} size="xl" style={{ color: "#151513", }} /></a>
                                <a href='https://www.instagram.com/accounts/onetap/?next=%2F' target="blank"><FontAwesomeIcon icon={faInstagram} size="xl" style={{ color: "#F42884", }} /></a>
                                <a href='https://wa.me/+917499667341' target="blank"><FontAwesomeIcon icon={faWhatsapp} size='xl' style={{ color: "#01fe5a", }} /></a>
                            </div>
                        </div>
                    </div>
                    <div className=' d-flex align-items-center justify-content-center'>
                        <img className='meimage' src='image/methree.jpg' alt='iam' />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Banner;
