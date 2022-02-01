import "./project.css"
import { FaGithubSquare, FaLink } from "react-icons/fa";

export const Project = () => {
    return (
        <>
            <div className="projectMain" id="project">
                <h1 className="pageHeadingP">Projects</h1>
                <div className="projectCardDiv">
                    <div className="projectDetail">
                        <h3>Zoomcar Clone</h3>
                        <p>Zoomcar, is an Indian self-drive car rental company, headquartered in Bangalore, India.</p>
                        <div className="links">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ranjan1501/Zoomcar_full_Stack.git"><FaGithubSquare className='social-media-icon' /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://zoomcar-backend.herokuapp.com/"><FaLink className='social-media-icon' /></a> 
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <div className="texttackDiv">
                                <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" />
                                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="" />
                                <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="projectImg">
                        <img src=".././images/zoomcar.jpg" alt="" />
                       
                    </div>
                </div>



                <div className="projectCardDiv secProject">
                    <div className="projectDetail">
                        <h3>Ubuy Clone</h3>
                        <p>Ubuy is one of the best online shopping stores that offer a collection of handbags,dresses Cosmetics etc.</p>
                        <div className="links">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/pt78640/ubuywebsite.github.com.git"><FaGithubSquare className='social-media-icon' /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://61d72cf0b3c5ae6553f5c486--confident-leavitt-0b1ccf.netlify.app/index.html"><FaLink className='social-media-icon' /></a>
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <div className="texttackDiv">
                            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" />
                                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" />
                                <img src="" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="projectImg secProjectImg">
                        <img src=".././images/ubuy.jpg" alt="" />
                    </div>
                </div>
                <div className="projectCardDiv secProject">
                    <div className="projectDetail">
                        <h3>Youtube clone</h3>
                        <p>Youtube is the 2nd largest search engine next to Google.
                People upload more than 100 hours of videos per minute to YouTube.
                        </p>
                        <div className="links">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/pt78640/youtubesearch.github.io"><FaGithubSquare className='social-media-icon' /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://pt78640.github.io/youtubesearch.github.io/"><FaLink className='social-media-icon' /></a>
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <div className="texttackDiv">
                            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" />
                                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="projectImg">
                        <img src=".././images/youtube.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
