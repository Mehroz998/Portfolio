import React, { useState } from 'react';
import {motion} from 'motion/react'
import '../App.css'

const About = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div id="about">
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}}
            id='About'  
            className="container2">
                <div className="row">
                    <motion.div
                    initial={{x:-20 , opacity:0}}
                    whileInView={{x:0 , opacity:1}}
                    transition={{duration:0.4 , delay:0.3}} 
                    className="col1">
                        <img src="pic1.jpg" alt="Mehroz Ali" />
                    </motion.div>
                    <div className="col2">
                        <motion.h1
                        initial={{y:-20 , opacity:0}}
                        whileInView={{y:0 , opacity:1}}
                        transition={{duration:0.4 , delay:0.3}} 
                        className="sub_title1 text-red-600">About Me</motion.h1>
                        <motion.p initial={{x:20 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.3 , delay:0.4}}>
                            I am Mehroz Ali from Karachi, Pakistan. I am pursuing my Graduation from The Federal Urdu
                            University Arts, Science and Technology. I am a Full-Stack(MERN) Developer. I have a deep
                            understanding of web development technologies such as HTML, CSS, JavaScript, NodeJS, MongoDB,
                            Express, and ReactJs. As a web Developer, my responsibility is to create websites that are both
                            functional and aesthetically pleasing, and to deliver high-quality web solutions that meet the
                            needs of your clients and users.
                        </motion.p>

                        <div className="tab-titles">
                            <motion.p
                                initial={{opacity:0}}
                                whileInView={{opacity:1}}
                                transition={{duration:0.3 , delay:0.6}}
                                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                                onClick={() => handleTabClick('skills')}
                            >
                                Skills
                            </motion.p>
                            <motion.p
                                initial={{opacity:0}}
                                whileInView={{opacity:1}}
                                transition={{duration:0.3 , delay:0.6}}
                                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                                onClick={() => handleTabClick('experience')}
                            >
                                Experience
                            </motion.p>
                            <motion.p
                                initial={{opacity:0}}
                                whileInView={{opacity:1}}
                                transition={{duration:0.3 , delay:0.6}}
                                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                                onClick={() => handleTabClick('education')}
                            >
                                Education
                            </motion.p>
                        </div>

                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.3 , delay:0.2}} className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                        <ul>
                            <li><span>Frontend Developer</span><br/>• HTML, CSS, JavaScript, React.js</li>
                            <li><span>Backend Developer</span><br/>• Node.js, Express.js, MongoDB</li>
                            <li><span>Full-Stack Developer (MERN Stack)</span><br/>• React.js, Node.js, Express.js, MongoDB</li>
                        </ul>
                        </motion.div>

                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.3 , delay:0.2}} className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                            <ul>
                                <li><span>Self-Learning & Projects</span><br/>• Developed a Quiz App with React.js, featuring timer, multiple-choice questions, and score tracking.</li>
                                <li>• Worked on full-stack projects using MERN stack, integrating authentication, API handling, and database management.</li>
                                <li>• Developed a dashboard application with CRUD operations, allowing users to create, read, update, and delete data efficiently. Implemented authentication, and API integration.</li>
                                <li>• Built a real-time messaging application using MERN stack & Socket.io, featuring instant messaging, user authentication, and chat history storage in MongoDB.</li>
                            </ul>
                        </motion.div>

                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.3 , delay:0.2}} className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                            <ul>
                                <li><span>2021-Present</span><br />• Bachelors in Computer Science from Federal Urdu University</li>
                                <li><span>2023</span><br />• MERN Stack Web Developer at Bano Qabil Program Organized by Alkhidmat Foundation</li>
                                <li><span>2021-2022</span><br />• PCIT (Professional Certificate Information Technology) from Sindh Technical Board Karachi</li>
                                <li><span>2020</span><br />• Intermediate in Pre-Engineering from Degree Boys College</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;