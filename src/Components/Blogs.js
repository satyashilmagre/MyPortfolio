import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className=" blog-parent">
        <h1 className="text-center py-4">My <span>Blogs</span></h1>
        <div className="d-flex justify-content-evenly align-items-end flex-wrap mb-5">

            <div className="blogs-child">
                <Link to="/javascript" className="text-black text-decoration-none">
                    <img className="blogs-image" alt="javascript images" src="https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?w=996&t=st=1707822348~exp=1707822948~hmac=feb045e6795413fc6374abb18ba75ed9e1f7b81eaf04728199d468ade4b56558" />
                    <p className="ms-2 mt-2">Author : Satyashil Magre</p>
                    <h4 className="ms-2">Introduction of JavaScript</h4>
                    <p className="ms-2" >JavaScript is a programming language that adds interactivity to your website. JavaScript is an open-source programming language designed for creating web-centric applications. </p>
                </Link>
            </div>

            <div className="blogs-child">
                <Link to='/react' className="text-black text-decoration-none">
                    <img className="blogs-image" alt="react images" src="https://img.freepik.com/free-vector/creative-abstract-quantum-illustration_23-2149226910.jpg?w=996&t=st=1707822244~exp=1707822844~hmac=bb4650dbcd9a2bd5964b675542b4540717b8e2d4ef0f4a76c32abdb74c818106" />
                    <p className="ms-2 mt-2">Author : Satyashil Magre</p>
                    <h4 className="ms-2">What is React ? </h4>
                    <p className="ms-2">React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance.</p>
                </Link>
            </div>

            <div className="blogs-child">
                <Link to='/html' className="text-black text-decoration-none">
                <img className="blogs-image" alt="html and css images" src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=996&t=st=1707822545~exp=1707823145~hmac=bda84bc523aa706ced87cdcaeef4993bc434d9a918de622a14bb1a33a8557e7d" />
                <p className="ms-2 mt-2">Author : Satyashil Magre</p>
               
                <h4 className="ms-2">Introduction of HTML And CSS </h4>
                <p className="ms-2">HTML stands for HyperText Markup Language. It is a standard markup language for web page creation.. </p>
                </Link>
            </div>

            <div className="blogs-child">
            <Link to='/angularblock' className="text-black text-decoration-none">
                <img className="blogs-image" alt="Angular images" src="https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-743.jpg?w=996&t=st=1707822715~exp=1707823315~hmac=16efe4ac966d021e2057e15d8e09e298bc4b167ff7980b4853cffef2d07c1316" />
                <p className="ms-2 mt-2">Author : Satyashil Magre</p>
                <h4 className="ms-2">What is  Angular ?</h4>
                <p className="ms-2">Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications.</p>
                </Link>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#F3F8FF" fill-opacity="1" d="M0,128L60,117.3C120,107,240,85,360,96C480,107,600,149,720,154.7C840,160,960,128,1080,112C1200,96,1320,96,1380,96L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg> */}

        </div>

    </div>
    );
}

export default Blogs;
