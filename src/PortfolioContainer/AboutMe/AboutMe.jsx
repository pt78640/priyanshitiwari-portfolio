import React from 'react'
import './about.css'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";


export default function AboutMe() {
    return (
        <div className='mainDiv' id="about" >
            <h2 className="pageHeadingA">About Me</h2>
            <div className='containerDiv'>

                <div className='aboutmeTextDiv'>
                    <p className="aboutme">
                        <p> This is Priyanshi Tiwari, Graduated in computer science from MITS college Rayagada,Odisha 
and trained in Masai school with diverse set of skills ranging from HTML, CSS, JavaScript,
                        ReactJs to ExpressJs, MongoDB, NodeJs and built several projects solo as well as collaboratively.

                          

                        </p>

                     <p> Innovate and responsive design building in web development is one of my passion and always keen to  learn and develop new skills  with the following future advanced technologies as well as 
                         aiming to achieve a challenging and successful career as a full-stack developer to make a significant contribution with trendsetting ideas, knowledge and skills with the objective of growth and development of the orgnaization. 

                       </p>
                        </p>
                  

                    <div className="colzs">
                        <div className="colz-icons">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/priyanshi-tiwari-493357192"><FaLinkedin className='social-media-icon' /></a>
                            <a target="_blank" rel="noopener noreferrer" style={{marginLeft:"10px"}} href="https://github.com/pt78640"><FaGithubSquare className='social-media-icon' /></a>
                        </div>
                    </div>
                    <div className='aboutBtnDiv'>
                        {/* <button className='hireMeBtn'>Hire Me</button> */}
                        <a href="https://drive.google.com/file/d/17a1tanKZ15vPTr2RROZjhqJVCUz-P5ld/view?usp=sharing" download='resume.pdf' target="_blank" rel="noopener noreferrer">
                            <button className="getBtn">Get Resume</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
