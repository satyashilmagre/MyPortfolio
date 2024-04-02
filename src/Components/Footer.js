import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Footer = () => {
    return (
        <div className='sectionsix' id='Contact'>
        <h2 className='text-center  mt-5 mb-4'>Contact <span> Me</span></h2>
        <div className='d-flex flex-wrap justify-content-around '>
          <div className='ms-3 me-4 mb-3'>
            <div className='rounded-3 mb-3  p-3 text-white d-flex'>
              <div className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faLocationDot} style={{ color: "black", }} className='icon' />
              </div>
              <div className='mt-2 ms-3 address'>
                <h6> Address :-</h6>
                <p>Plot No.11 SavitriBai Phule Nagar Himayat Bagh, Aurangabad</p>
              </div>
            </div>
            <div className='rounded-3 mb-3  p-3 text- d-flex'>
              <div className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "black", }} className='icon' />
              </div>
              <div className='mt-2 ms-3 address'>
                <h6>Email</h6>
                <a className='text-black text-decoration-none ' href="mailto: satyashilmagre@gmail.com">satyashilmagre@gmail.com</a>
                {/* <p>satyashilmagre@gmail.com</p> */}
              </div>
            </div>
            <div className='rounded-3 p-3 text-white  d-flex'>
              <div className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faPhone} style={{ color: "black", }} className='icon' />
              </div>
              <div className='mt-1 ms-3 address'>
                <h6>Phone</h6>
                <a className='text-black text-decoration-none' href="tel: +91 7499667341"> +91 7499667341</a>
                {/* <p>+91 7499667341</p> */}
              </div>
            </div>
          </div>
          <div class='d-flex flex-column w-50'>
            <input className=' form-control mt-1 mb-3' type="text" placeholder="First Name" />
            <input className=' form-control mt-3 mb-3' type="text" placeholder="Last Name" />
            <textarea className='form-control mt-3 mb-3 ' typeof='text' placeholder='Your Message' />
            <button type="button" class="rounded-pill sendbtn">Send Message<FontAwesomeIcon className='ms-2' icon={faPaperPlane} /></button>
          </div>
        </div>
      </div>
    );
}
export default Footer;
