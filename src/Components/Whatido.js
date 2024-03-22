import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import { faCode, faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Whatido = () => {
    return (
        <div className='sectionthree'>
        <div className='d-flex justify-content-center mt-5 mb-4 text-black'>
            <h4 className='' >What I Do</h4>
        </div>



        <div className="whatido ">

            <div className="what">
                <FontAwesomeIcon icon={faPalette} size="2xl" style={{ color: "#005af5", }} />
                <h3>UI Design</h3>
                <p>2019-2023</p>
                <p>User interface (UI) design is likely the first thing you encounter when you use an application or visit a website. User interface design is responsible for a product's appearance, interactivity, usability, behaviour, and overall feel. UI design can determine whether a user has a positive experience </p>
            </div>

            <div className='what'>
                <FontAwesomeIcon icon={faCode} size="2xl" style={{ color: "#08f7db", }} />
                <h3>Web Development</h3>
                <p>2019-2023</p>
                <p>Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
            </div>

            <div className='what'>
                <FontAwesomeIcon icon={faAppStoreIos} size='2xl' style={{ color: "#850cb0", }} />
                <h3>App Development</h3>
                <p>2019-2023</p>
                <p>Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems.The programming and markup languages used for this kind of software development include Java, React-Native, Swift, C# and HTML5.</p>
            </div>

        </div>
    </div>
    );
}

export default Whatido;
