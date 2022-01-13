import React, { useRef, useState } from 'react'
import './contact.css'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import emailjs from 'emailjs-com';
import emailIcon from '../assets/emailIcon.svg'
import homeIcon from '../assets/homeIcon.svg'
import mobileIcon from '../assets/mobileIcon.svg'


export default function Contact() {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_9ts4xw8', 'template_a6tpd7n', formRef.current, 'user_Tod49PPn3IyE6Gbs6Rxal')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='c' id="contact">
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's Meet</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img className="c-icon" src={mobileIcon} alt="" />
                            +91 8917418926
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={emailIcon} alt="" />
                            pt1601224034@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={homeIcon} alt="" />
                            Rayagada, Odisha
                        </div>
                        <div className="c-info-item socialmedia">
                        <h1 className="c-icon">{""}</h1>
                            <div className="colzs">
                                <div className="colz-icons">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/priyanshi-tiwari-493357192"><FaLinkedin className='social-media-icon' /></a>
                                    <a target="_blank" rel="noopener noreferrer" style={{marginLeft:"10px"}} href="https://github.com/pt78640"><FaGithubSquare className='social-media-icon' /></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="name" />
                        <input type="text" placeholder="Subject" name="subject" />
                        <input type="email" placeholder="Email" name="email" />
                        <textarea name="message" placeholder="Message" rows="5"></textarea>
                        <button className="submitBtn">Submit</button>
                        {done && "Thank You"}
                    </form>
                </div>
            </div>
        </div>
    )
}
