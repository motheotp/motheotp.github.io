// src/components/About.js
import React from 'react';
import aboutMeImage from '../assets/profile.jpg';
import './about.css';

function About() {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <div className="about-section">
                <img src={aboutMeImage} alt="About Me" className="about-image" />
                <div className="about-content">
                    <h2 style={{ color: 'skyblue' }}>Professional Background</h2>
                    <p>
                        I am a recent graduate from Michigan State University with double degrees in Computer Science and Finance. My academic journey has equipped me with a robust foundation in both technical and financial domains, allowing me to approach problem-solving with a unique and holistic perspective.
                    </p>
                    <p>
                        Professionally, I am a full stack developer specializing in Python. I am passionate about building efficient, scalable, and user-friendly applications. My work often involves leveraging technologies such as React, Flask, AWS, and various data analysis tools to deliver comprehensive solutions.
                    </p>

                    <h2 style={{ color: 'skyblue' }}>Personal Background</h2>
                    <p>
                        I am from Botswana and I came to the United States on a national top achievers scholarship. Raised by a single mother, I have always been driven by curiosity and an inquisitive nature. These traits have fueled my academic and professional journey, enabling me to excel in diverse fields.
                    </p>
                    <p>
                        When I am home, I am deeply involved with a charity group that tutors primary school students struggling academically in rural public schools. This work is incredibly fulfilling and aligns with my belief in giving back to the community and supporting the next generation.
                    </p>

                    <h2 style={{ color: 'skyblue' }}>Hobbies and Interests</h2>
                    <p>
                        Beyond my professional life, I have a rich array of hobbies and interests. I enjoy playing the piano, soccer, chess, and table tennis, and I also love singing. These activities provide a balanced and enjoyable contrast to my technical work, helping me to stay creative and energetic.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
