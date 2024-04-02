import { faCss3Alt, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Skills = () => {
    return (
        <div>
            <div className='sectionfour d-flex justify-content-around mt-5 mb-5 text-white flex-wrap ' id='Skills'>
        <div className=' techskills'>
          <h5 className='mb-4 profession'>Technical Skills </h5>
          <div className='text-black techskill'>
            <div className='d-flex justify-content-between text-black'>
               <p>HTML <FontAwesomeIcon icon={faHtml5} size='lg' style={{ color: "#f45906" }} /></p>
               <p>90%</p>
               </div>
            <div class="progress mb-3" style={{ height: "10px" }}  >
              <div class="progress-bar progress-bar-striped " role="progressbar" style={{ "width": "90%", "background-color": "#f45906", }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="50"></div>
            </div>
          </div>
          <div className="techskill">
            <div className='d-flex justify-content-between text-black'>
            <p className='text-black'>CSS <FontAwesomeIcon icon={faCss3Alt} size="lg" style={{ color: "#0658e5" }} /></p>
            <p>65%</p>
            </div>
            <div class="progress mb-3" style={{ height: "10px" }} >
              <div class="progress-bar progress-bar-striped" role="progressbar" style={{ "width": "65%", "background-color": "#1B73BA" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="techskill">
            <div className='d-flex justify-content-between text-black'>
            <p className='text-black'>JavaScript <FontAwesomeIcon icon={faJs} size="lg" style={{ color: "#F7D800", }} /></p>
            <p>60%</p>
            </div>
            <div class="progress mb-3" style={{ height: "10px" }} >
              <div class="progress-bar progress-bar-striped" role="progressbar" style={{ "width": "60%", "background-color": "#F7D800" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="techskill">
            <div className='d-flex justify-content-between text-black'>
            <p className='text-black'>React <FontAwesomeIcon icon={faReact} size="lg" style={{ color: "#005eff", }} /></p>
            <p>65%</p>
            </div>
            <div class="progress mb-3" style={{ height: "10px" }} >
              <div class="progress-bar progress-bar-striped" role="progressbar" style={{ "width": "65%", "background-color": "#00D9FF" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
        <div >
          <h5 className='profession'>Professional Skills</h5>
          <div className='d-flex justify-content-between softskill '>
            <div className='text-center' >
              <div className='d-flex justify-content-center align-items-center mb-2 circle'>
                <div className='d-flex justify-content-center align-items-center  innercircle '><div className='per'>85%</div></div>
              </div >
              <p className='text-black'>Communication</p>
            </div>
            <div className='text-center '>
              <div className='d-flex justify-content-center align-items-center mb-2 circle circletwo '>
                <div className=' d-flex justify-content-center align-items-center innercircle'><div className='per'>75%</div></div>
              </div>
              <p className='text-black'>Creativity</p>
            </div>
          </div>
          <div className='d-flex justify-content-between softskill '>
            <div className='text-center' >
              <div className='d-flex justify-content-center align-items-center mb-2 circle circlethree'>
                <div className='d-flex justify-content-center align-items-center  innercircle '><div className='per'>80%</div></div>
              </div>
              <p className='text-black'>Team Work</p>
            </div>
            <div className='text-center'>
              <div className='d-flex justify-content-center align-items-center mb-2 circle circlefour'>
                <div className=' d-flex justify-content-center align-items-center innercircle'><div className='per'>75%</div></div>
              </div>
              <p className='text-black'>Time<br/> management</p>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}
export default Skills;
