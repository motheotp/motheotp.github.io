

// src/components/Home.js
import React from 'react';
import profileImage from '../assets/profile.jpg';
import aboutImage from '../assets/about-me.avif';
import {
    FaLinkedin,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaReact,
    FaJs,
    FaPython,
    FaDatabase,
    FaFlask,
    FaDocker
} from 'react-icons/fa'; // Import colorful icons from react-icons
import './home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="top-section">
                <div className="text-container">
                    <h1>Software Engineer <span role="img" aria-label="Waving hand">👋🏿</span></h1>
                    <p>
                        Hello, I’m Motheo Treasure Puso, a software engineer, AI enthusiast, and entrepreneur. I’m the founder of <a
                        href="https://www.nextbotswana.com" target="_blank" rel="noopener noreferrer">NEXT</a>, where
                        I’m focused on driving innovative tech solutions in software development. I recently graduated from Michigan State University
                        with degrees in Computer Science and Finance. My passion lies in developing AI-driven, scalable, and user-friendly applications that solve real-world problems.
                    </p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/motheo-treasure-puso-6b637a13a/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size="2em" color="#0e76a8" />
                        </a>
                        <a href="https://github.com/motheotp" target="_blank" rel="noopener noreferrer">
                            <FaGithub size="2em" color="#333" />
                        </a>
                    </div>
                </div>
                <div className="image-container">
                    <img src={profileImage} alt="Motheo Treasure Puso" className="profile-image" />
                </div>
                <div className="tech-stack">
                    <h2>Tech Stack</h2>
                    <div className="icons">
                        <FaPython size="2em" color="#3776AB" title="Python" />
                        <FaReact size="2em" color="#61DAFB" title="React" />
                        <FaJs size="2em" color="#F7DF1E" title="JavaScript" />
                        <FaFlask size="2em" color="#000000" title="Flask" />
                        <FaDatabase size="2em" color="#4DB33D" title="Database" />
                        <FaDocker size="2em" color="#0db7ed" title="Docker" />
                        <FaHtml5 size="2em" color="#E34F26" title="HTML5" />
                        <FaCss3Alt size="2em" color="#1572B6" title="CSS3" />
                        <FaBootstrap size="2em" color="#563D7C" title="Bootstrap" />
                    </div>
                </div>
            </div>
            <div className="about-me-section">
                <div className="about-me-container">
                    <div className="about-me-image">
                        <img src={aboutImage} alt="About Me" className="about-me-photo" />
                    </div>
                    <div className="about-me-text">
                        <h2>About Me</h2>
                        <p>
                            I am a dynamic and versatile professional with a unique combination of skills in both Computer Science and Finance. My strong foundation in software development, combined with a solid understanding of financial principles, allows me to create innovative and effective solutions that bridge the gap between technology and business.
                        </p>
                        <p>
                            As a team player and self-starter, I thrive in collaborative environments and am always eager to take on new challenges. My ability to adapt quickly and my passion for continuous learning enable me to stay at the forefront of technological advancements and apply the best practices in my work.
                        </p>
                        <p>
                            My impressive arsenal of skills includes full stack software development,algorithm engineering, fine-tuning AI models, data analysis, and financial modeling, making me well-equipped to tackle complex projects and deliver exceptional results. I am dedicated to building high-quality, scalable applications that meet the needs of users and drive business success.
                        </p>
                    </div>
                </div>
            </div>
            <div className="aspirations-section">
                <div className="aspirations-container">
                    <h2>Aspirations and Career Goals</h2>
                    <p>
                        My journey in technology is driven by a relentless desire to learn and grow. I am particularly
                        interested in roles that span across software engineering, Python development, and financial or
                        data analysis. I have a keen interest in risk management and exploring how technology can be
                        integrated into this field to create innovative solutions.
                    </p>
                    <p>
                        More importantly, I am passionate about building something that can revolutionize the tech
                        landscape, especially in third world countries. My startup, <a
                        href="https://www.nextbotswana.com" target="_blank" rel="noopener noreferrer">NEXT</a>,
                        embodies this vision. NEXT is an AI company aimed at integrating AI solutions such as WhatsApp
                        API for customer relations, API integrations for business processes, chatbot solutions, and
                        more. Through NEXT, I aspire to bring cutting-edge technology to businesses, enhancing their
                        efficiency and customer engagement.
                    </p>
                    <p>
                        Furthermore, I plan to pursue a master's in Software Engineering Systems to deepen my expertise
                        and stay at the forefront of technological advancements. This advanced education will equip me
                        with the latest knowledge and skills to tackle complex challenges and drive innovation in my
                        future endeavors.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
