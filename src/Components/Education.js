import { faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Education = () => {
    return (
        <div className='d-flex justify-content-evenly flex-wrap  w-100 technical' id='Experience'>
            <div className='mb-4 tech' >
                <h3 className='mb-3 educolor'>Education <FontAwesomeIcon icon={faGraduationCap} /></h3>
                <div className='education'>
                    <h6> <span className="clgname">MCA</span> From <span className="clgname">Dr. Babasaheb Ambedkar Marathwada University Aurangabad</span> </h6>
                    <p className="clgname">2021-2023</p>
                    <p>MCA from University Department of managemment Science</p>
                    <p>With <span className="clgname">8 CGPA</span></p>
                </div>
                <div className='education'>
                    <h6><span className="clgname">BCS</span> from <span className="clgname">Dr. Babasaheb Ambedkar Marathwada University Aurangabad</span></h6>
                    <p className="clgname">2018-2021</p>
                    <p><span className="clgname">Bsc Computer Science</span> from <span className="clgname">Shivchhatrapati Collage, Cidco N-3 </span> </p>
                    <p>With<span className="clgname"> 73.85%</span> </p>
                </div>
            </div>
            <div className='soft'>
                <h3 className=' mb-3 educolor'>Work Experience <FontAwesomeIcon icon={faLaptopCode} /></h3>
                <div className='education'>
                    <h6> <span className="clgname">Web Development</span> in <span className="clgname">KSJ Technology Pvt. Pune</span></h6>
                    {/* <p className="clgname">2023 (6-Month)</p> */}
                    <p>• Create a Ecommerce Website Using <span className="clgname">HTML,CSS,JavaScript And React.js</span></p>
                    <p>• Design the <span className="clgname">Responsive</span> Websites </p>
                    <p>• Create a React<span className="clgname"> Components</span></p>
                    <p>• Design <span className="clgname">User Friedly and Mobile Design</span> Websites </p>
                    <p>•  Identify and resolve issues in  <span className="clgname">functionality, layout, and performance</span></p>
                    <p>• Ensure adaptability<span className="clgname">across diverse screen sizes and devices.</span></p>
                </div>
            </div>
        </div>
    );
}
export default Education;
