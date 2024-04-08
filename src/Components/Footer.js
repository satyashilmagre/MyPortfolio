import { faEnvelope, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Footer = () => {
    return (
        <div className='footer container' id='Contact'>
        <h2 className='text-center  my-4'>Contact <span> Me</span></h2>
        <div className='row'>
           {/* d-flex flex-wrap justify-content-around */}
          <div className='col-xl-6 col-sm-12 col-md-6 mt-3 '>
            <div className='rounded-3 mb-3  p-3 text-white d-flex'>
              <div className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faLocationDot} style={{ color: "black"}} className='icon' />
              </div>
              <div className='mt-2 ms-3 text-black'>
                <h6> Address</h6>
                <p>Plot No.11 SavitriBai Phule Nagar Himayat Bagh, Aurangabad</p>
              </div>
            </div>
            <div className='rounded-3 mb-3  p-3  d-flex'>
              <div className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "black", }} className='icon' />
              </div>
              <div className='mt-2 ms-3 text-black'>
                <h6>Email</h6>
                <a className='text-black text-decoration-none ' href="mailto:satyashilmagre@gmail.com">satyashilmagre@gmail.com</a>
              </div>
            </div>
            <div className='rounded-3 p-3 text-white  d-flex'>
              <div className='d-flex align-items-center'>
                <FontAwesomeIcon icon={faPhone} style={{ color: "black", }} className='icon' />
              </div>
              <div className='mt-1 ms-3 text-black'>
                <h6>Phone</h6>
                <a className='text-black text-decoration-none' href="tel: +91 7499667341"> +91 7499667341</a>
              </div>
            </div>
          </div>
          <div class='col-xl-6 col-sm-12 col-md-6 my-3 d-flex flex-column'>
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
