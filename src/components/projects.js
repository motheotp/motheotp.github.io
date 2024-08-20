// src/components/Projects.js
import React from 'react';
import './projects.css';
import project1Image from '../assets/Picture1.png';
import project2Image from '../assets/bug.png';
import project3Image from '../assets/ASMSU.png';

const projects = [
    {
        title: 'AI Support Chatbot for Investor Relations',
        image: project1Image,
        description: 'Developed an AI-powered chatbot to enhance shareholder engagement for Ally by providing timely and relevant information about the company. Utilized Anthropic’s Claude 3, AWS, LangChain, and Flask for a robust and scalable solution. The chatbot featured seamless access to financial data, user authentication with Amazon Cognito, and deployment on Amazon EKS using a GitLab CI/CD pipeline.',
    },
    {
        title: 'Bug Squash Game',
        image: project2Image,
        description: 'Engineered an engaging and interactive Bug Squash Game using C++, wxGraphics, CMake, and virtual pixel libraries. This project involved extensive development of game mechanics, graphics rendering, and performance optimization to ensure a smooth and responsive gaming experience. The game not only demonstrates a strong understanding of C++ and graphics programming but also showcases my ability to create complex interactive applications from scratch. The use of CMake facilitated a seamless build process, while the virtual pixel libraries enabled high-resolution graphics and precise control over the game environment.',
    },
    {
        title: 'ASMSU School Website',
        image: project3Image,
        description: 'Developed and designed the ASMSU School Website to enhance the online presence and accessibility of the Associated Students of Michigan State University. This project involved the use of React.js, Node.js, and CSS for a modern, responsive design. The website features user-friendly navigation, dynamic content rendering, and integration with various APIs to provide real-time updates and information. <a href="https://asmsu.msu.edu/" target="_blank" rel="noopener noreferrer">Visit ASMSU Website</a>.',
    },
];

function Projects() {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            {projects.map((project, index) => (
                <div key={index} className="project-section">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-info">
                        <h2>{project.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
