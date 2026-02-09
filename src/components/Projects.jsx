import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import chatbotImg from "../assets/img/chatbot.png";
import dinoImg from "../assets/img/dino.png";
import libraryManagerImg from "../assets/img/library_manager.png";
import medibotImg from "../assets/img/medibot.png";
import audioPlayerImg from "../assets/img/audio_player.png";
import opampImg from "../assets/img/opamp.png";
import opamp2Img from "../assets/img/opamp2.png";
import keychain from "../assets/img/keychain.png";
import stockPortfolioImg from "../assets/img/momentum.png";
import ura1Img from "../assets/img/ura1.png";
import ura2Img from "../assets/img/ura2.png";

// Component for alternating images in project cards
const AlternatingImage = ({ images, alt }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 6000); // Switch every 6 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return <img src={images[currentIndex]} alt={`${alt} - Image ${currentIndex + 1}`} className="project-img" />;
};

export const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [expandedProject, setExpandedProject] = useState(null);
    const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

    // Handle ESC key to close expanded view
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && expandedProject) {
                setExpandedProject(null);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [expandedProject]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (expandedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [expandedProject]);

    const projectDetails = {
        9: {
            fullTechStack: ["ROS 2", "Python", "C++", "Raspberry Pi", "Ubuntu", "Localization", "UAV"],
            detailedDescription: [
                "Working as an undergraduate research assistant at Robohub on instrumentation and control of mobile robotic networks",
                "Learning ROS 2 for localization, coordination, and control of wheeled robots and UAVs",
                "Gaining experience in real-time system integration, state feedback, and control loops. Integrating sensor data for localization and publishing state information over ROS topics",
                "Implementing control logic that generates motion commands for wheeled robots"
            ]
        },
        1: {
            fullTechStack: ["Python", "LangChain", "OpenAI (ChatGPT API)", "Beautiful Soup", "Streamlit", "Chroma Vector Store"],
            detailedDescription: [
                "Developed an LLM-based chatbot capable of scanning websites and providing interactive, context-aware answers",
                "Hosted on Streamlit, utilizing LangChain to handle real-time response streaming",
                "Used OpenAI's ChatGPT models for generating conversational responses",
                "Integrated Beautiful Soup for data extraction and Chroma Vector Store for vector-based data storage and retrieval"
            ]
        },
        2: {
            fullTechStack: ["Python", "Pygame"],
            detailedDescription: [
                "Developed a custom version of the popular dino game using Python and Pygame, with dynamic GUI gameplay",
                "Utilised object-oriented programming to design custom classes to control sprite behaviour",
                "Implemented scoring logic, obstacle spawning, and character control",
                "Enhanced game features with animation, sound effects, and gravity-based movement for a smooth player experience"
            ]
        },
        3: {
            fullTechStack: ["C++", "PostgreSQL", "Boost.Beast", "Docker", "Proxmox", "pfSense Firewall", "Dell PowerEdge R730 Server"],
            detailedDescription: [
                "Setting up a home lab Library Manager using C++ and Python to experiment with data structures like linked lists, trees, heaps, and hash tables",
                "Implemented backend logic for book cataloging, user operations, and other features",
                "Storing and managing data using PostgreSQL",
                "Built RESTful APIs with Boost.Beast and nlohmann/json to handle client-server communication",
                "Exploring microservices architecture for authentication and user management via REST APIs"
            ]
        },
        4: {
            fullTechStack: ["C/RobotC", "Lego EV3", "SolidWorks"],
            detailedDescription: [
                "Designed an autonomous first-aid ambulance robot with Lego EV3 programmed with C, to navigate a maze by simulating road conditions",
                "Integrated motors, ultrasonic, color, sound, and gyro sensors for obstacle detection",
                "Built a motored robotic arm to pick up first aid supplies",
                "Working on applying a PID controller system to enable accurate 90° turns and prevent overshooting"
            ]
        },
        5: {
            fullTechStack: ["Arduino Uno", "C++", "Oscilloscope", "Potentiometer"],
            detailedDescription: [
                "Designed and built a programmable audio player using an Arduino Uno to generate melodies through a speaker",
                "Created melodies by defining precise musical note frequencies in C++, leveraging PWM for sound generation",
                "Integrated a potentiometer to dynamically adjust amplifier output, with a capacitor for signal smoothing",
                "Used an oscilloscope to verify waveform accuracy and measure frequency stability"
            ]
        },
        6: {
            fullTechStack: ["LM741 Op-Amp IC", "TinkerCAD", "DigiKey", "Oscilloscope", "DMM"],
            detailedDescription: [
                "Designed and implemented a multistage operational amplifier circuit for high-gain voltage amplification",
                "Modeled circuit in TinkerCAD and constructed schematic in DigiKey Scheme-it",
                "Configured cascaded Op-Amp setup to amplify weak input signals with adjustable gain",
                "Verified amplification accuracy using DMM and oscilloscope to measure gain, offset voltages, and frequency response"
            ]
        },
        7: {
            fullTechStack: ["SolidWorks", "Lathe", "Mill", "Laser Cutter"],
            detailedDescription: [
                "Designed a gear spur keychain using SolidWorks with precise mechanical specifications",
                "Machined components using a lathe for cylindrical parts and a mill for detailed features",
                "Utilized laser cutting for intricate patterns and fine details",
                "Completed assembly and finishing to create a functional and aesthetic keychain"
            ]
        },
        8: {
            fullTechStack: ["Python", "React", "PostgreSQL", "Node + Express", "OpenAI", "Proxmox", "Wireguard", "Dell R730 Server"],
            detailedDescription: [
                "Developed a portfolio management system designed to select, track, and optimize a small set of high-performing stocks using AI-driven strategies",
                "Leveraged OpenAI for AI-based selection, and developed a live trading dashboard in React with PostgreSQL backend",
                "The platform automates stock selection, portfolio adjustments, performance tracking, and AI decisions"
            ]
        }
    };

    const projectData = [
        // Hardware & Robotics Category
        {
            id: 9,
            title: "Mobile Robotic Networks Research",
            category: "Hardware",
            description: "Undergraduate research on instrumentation and control of mobile robotic networks using ROS 2",
            techStack: ["ROS 2", "Python", "Control Systems", "Raspberry Pi", "Sensor Integration"],
            images: [ura1Img, ura2Img],
            image: ura1Img
        },
        // Software Category
        {
            id: 8,
            title: "Stock Portfolio Management Tool",
            category: "Software",
            description: "Portfolio management system that automates stock selection, tracking, and optimization using OpenAI",
            techStack: ["Python", "React", "PostgreSQL", "OpenAI"],
            image: stockPortfolioImg
        },
        {
            id: 1,
            title: "LLM Chatbot",
            category: "Software",
            description: "An intelligent chatbot that scans websites and provides context-aware answers using LangChain and OpenAI's GPT models",
            techStack: ["LangChain", "OpenAI GPT", "Python"],
            githubLink: "https://github.com/diyanair1/chatbot",
            image: chatbotImg
        },
        {
            id: 2,
            title: "DinoGame",
            category: "Software",
            description: "A custom recreation of the Chrome dino game with dynamic gameplay, animations, and scoring system",
            techStack: ["Python", "Pygame", "OOP"],
            githubLink: "https://github.com/diyanair1/Dino-Game",
            image: dinoImg
        },
        {
            id: 3,
            title: "Library Manager",
            category: "Software",
            description: "A home lab project exploring data structures and microservices architecture with PostgreSQL backend",
            techStack: ["C++", "PostgreSQL", "Boost.Beast", "Docker"],
            githubLink: "https://github.com/diyanair1/LibraryManager",
            image: libraryManagerImg
        },
        {
            id: 4,
            title: "MediBot",
            category: "Hardware",
            description: "Autonomous first-aid ambulance robot built with Lego EV3, featuring maze navigation and obstacle detection",
            techStack: ["Lego EV3", "Python", "C", "Robotics"],
            githubLink: "https://github.com/diyanair1/Medibot",
            image: medibotImg
        },
        {
            id: 5,
            title: "Simple Audio Player",
            category: "Hardware",
            description: "Programmable audio player using Arduino Uno with custom tone synthesis and potentiometer volume control",
            techStack: ["Arduino", "C++", "Electronics"],
            image: audioPlayerImg
        },
        {
            id: 6,
            title: "Op-Amps Circuit",
            category: "Hardware",
            description: "Multistage operational amplifier circuit for high-gain voltage amplification",
            techStack: ["Analog Electronics", "Circuit Design", "PCB"],
            image: opampImg
        },
        {
            id: 7,
            title: "Gear Spur Keychain",
            category: "Hardware",
            description: "Created in SolidWorks and machined using a lathe, mill, and laser cutter",
            techStack: ["SolidWorks", "Lathe", "Mill", "Laser Cutter"],
            image: keychain
        }
    ];

    const filteredProjects = activeFilter === "All" 
        ? projectData 
        : projectData.filter(project => project.category === activeFilter);

    const handleCardClick = (project) => {
        setExpandedProject(project);
    };

    const handleCloseModal = () => {
        setExpandedProject(null);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('project-modal-overlay')) {
            handleCloseModal();
        }
    };

    return (
        <section className="projects" id="projects" ref={sectionRef}>
            <Container>
                <Row>
                    <Col size={12}>
                        <div className={`projects-box ${isVisible ? 'animate-in' : ''}`}>
                            <h2>Projects</h2>
                            <p>Explore my work across software development and hardware engineering</p>
                            
                            {/* Filter Buttons */}
                            <div className="filter-buttons">
                                <button 
                                    className={activeFilter === "All" ? "active glass-filter-active" : ""}
                                    onClick={() => setActiveFilter("All")}
                                >
                                    All Projects
                                </button>
                                <button 
                                    className={activeFilter === "Software" ? "active glass-filter-active" : ""}
                                    onClick={() => setActiveFilter("Software")}
                                >
                                    Software
                                </button>
                                <button 
                                    className={activeFilter === "Hardware" ? "active glass-filter-active" : ""}
                                    onClick={() => setActiveFilter("Hardware")}
                                >
                                    Hardware & Robotics
                                </button>
                            </div>

                            {/* Projects Grid */}
                            <Row className="projects-grid">
                                {filteredProjects.map((project) => (
                                    <Col key={project.id} xs={12} md={6} lg={4}>
                                        <div className="project-card glass-card-subtle">
                                            <div className="project-img-wrapper">
                                                {project.images && project.images.length > 1 ? (
                                                    <AlternatingImage images={project.images} alt={project.title} />
                                                ) : (
                                                    <img src={project.image} alt={project.title} className="project-img" />
                                                )}
                                            </div>
                                            <div className="project-content">
                                                <h3>{project.title}</h3>
                                                <p>{project.description}</p>
                                                
                                                <div className="tech-stack">
                                                    {project.techStack.map((tech, index) => (
                                                        <span key={index} className="tech-tag">{tech}</span>
                                                    ))}
                                                </div>
                                                
                                                <div className="project-actions">
                                                    {project.githubLink && (
                                                        <a 
                                                            href={project.githubLink} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="github-link"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                            </svg>
                                                            GitHub
                                                        </a>
                                                    )}
                                                    <button 
                                                        className="learn-more-btn"
                                                        onClick={() => handleCardClick(project)}
                                                    >
                                                        <span>Learn More</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <polyline points="9 18 15 12 9 6"></polyline>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Expanded Project Modal */}
            {expandedProject && (
                <div className="project-modal-overlay" onClick={handleOverlayClick}>
                    <div className="project-modal-content">
                        <button className="modal-close-btn glass-button" onClick={handleCloseModal} aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        
                        <div className="modal-body">
                            <div className="modal-image-section">
                                {expandedProject.images && expandedProject.images.length > 1 ? (
                                    <>
                                        {expandedProject.images.map((img, index) => (
                                            <img 
                                                key={index}
                                                src={img} 
                                                alt={`${expandedProject.title} - Image ${index + 1}`} 
                                                className="modal-multiple-image"
                                            />
                                        ))}
                                    </>
                                ) : (
                                    <img src={expandedProject.image} alt={expandedProject.title} />
                                )}
                                {expandedProject.id === 6 && (
                                    <img src={opamp2Img} alt={`${expandedProject.title} - Circuit Design`} className="modal-second-image" />
                                )}
                            </div>
                            
                            <div className="modal-text-section">
                                <h2>{expandedProject.title}</h2>
                                
                                <div className="modal-tech-stack">
                                    {projectDetails[expandedProject.id]?.fullTechStack.map((tech, index) => (
                                        <span key={index} className="modal-tech-tag">{tech}</span>
                                    ))}
                                </div>
                                
                                <div className="modal-description">
                                    <h3>Project Details</h3>
                                    <ul>
                                        {projectDetails[expandedProject.id]?.detailedDescription.map((point, index) => (
                                            <li key={index}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
