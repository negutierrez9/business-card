import React from 'react'
import './MainContent.css'
import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';

export default function MainContent() {
    return (
        <>
            <div className='container'>
                <div className="img-container">
                    <img src="./headshot.jpg" alt="profile-picture" className="main-img"/>      
                </div>
                <div className='sub-container'>
                    <h2 className='name'>Nicole Gutierrez</h2>
                    <h3 className="job-title">Full-Stack Developer</h3>
                    <a href="mailto:negutierrez9@gmail.com" target="_blank" className="email">
                        negutierrez9@gmail.com
                    </a>
                    <div className="connect">
                        <a href="https://github.com/negutierrez9" target="_blank" className='github'>
                            <ion-icon name="logo-github"></ion-icon>
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/nicoleegutierrez/" target="_blank" className="linkedin">
                            <ion-icon name="logo-linkedin"></ion-icon>
                            Linkedin
                        </a>
                    </div>
                    <div className="about">
                        <h3 className="about-title">About</h3>
                        <p className="about-content">
                        Hello! My name is Nicole Gutierrez. 
                        I am a current Data Collection Tech at the Meta Experis Team in Burlingame, CA. 
                        My end goal for my career is to become a full-stack developer. 
                        I recently graduated from UCSB with a Bachelor's degree in Psychological Brain 
                        Sciences with a minor in Applied Psychology.
                        </p>
                    </div>
                    <div className="interests">
                        <h3 className="interests-title">Interests</h3>
                        <ul className="interest-list">
                            <li>React, HTML, CSS</li>
                            <li>UX Design</li>
                            <li>AR/VR Tech</li>
                            <li>Pickleball</li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <a href="https://www.instagram.com/n.gutierrezzz/" target="_blank" alt='Instagram Profile' className='instagram-logo'>
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="https://www.linkedin.com/in/nicoleegutierrez/" target="_blank" className="linkedin-logo">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100011580793292" target="_blank" className="facebook-logo">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                    <a href="mailto:negutierrez9@gmail.com" target="_blank"className="email-icon">
                        <ion-icon name="mail"></ion-icon>
                    </a>
                </div>
            </div>
        </>
    )
}
