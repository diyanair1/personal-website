import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const projectData = [
        // Software Category
        {
            id: 1,
            title: "LLM Chatbot",
            category: "Software",
            description: "An intelligent chatbot that scans websites and provides context-aware answers using LangChain and OpenAI's GPT models",
            techStack: ["LangChain", "OpenAI GPT", "Python", "React"],
            githubLink: "https://github.com/diyanair1"
        },
        {
            id: 2,
            title: "DinoGame",
            category: "Software",
            description: "A custom recreation of the Chrome dino game with dynamic gameplay, animations, and scoring system",
            techStack: ["JavaScript", "HTML5 Canvas", "CSS3"],
            githubLink: "https://github.com/diyanair1"
        },
        {
            id: 3,
            title: "Library Manager",
            category: "Software",
            description: "A home lab project exploring data structures and microservices architecture with PostgreSQL backend",
            techStack: ["PostgreSQL", "Node.js", "Microservices", "Docker"],
            githubLink: "https://github.com/diyanair1"
        },
        // Hardware & Robotics Category
        {
            id: 4,
            title: "MediBot",
            category: "Hardware",
            description: "Autonomous first-aid ambulance robot built with Lego EV3, featuring maze navigation and obstacle detection",
            techStack: ["Lego EV3", "Python", "Sensors", "Robotics"],
            githubLink: "https://github.com/diyanair1"
        },
        {
            id: 5,
            title: "Simple Audio Player",
            category: "Hardware",
            description: "Programmable audio player using Arduino Uno with custom tone synthesis and potentiometer volume control",
            techStack: ["Arduino", "C++", "Electronics"],
            githubLink: "https://github.com/diyanair1"
        },
        {
            id: 6,
            title: "Op-Amps Circuit",
            category: "Hardware",
            description: "Multistage operational amplifier circuit for high-gain voltage amplification",
            techStack: ["Analog Electronics", "Circuit Design", "PCB"],
            githubLink: "https://github.com/diyanair1"
        }
    ];

    const filteredProjects = activeFilter === "All" 
        ? projectData 
        : projectData.filter(project => project.category === activeFilter);

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <div className="projects-box">
                            <h2>Projects</h2>
                            <p>Explore my work across software development and hardware engineering</p>
                            
                            {/* Filter Buttons */}
                            <div className="filter-buttons">
                                <button 
                                    className={activeFilter === "All" ? "active" : ""}
                                    onClick={() => setActiveFilter("All")}
                                >
                                    All Projects
                                </button>
                                <button 
                                    className={activeFilter === "Software" ? "active" : ""}
                                    onClick={() => setActiveFilter("Software")}
                                >
                                    Software
                                </button>
                                <button 
                                    className={activeFilter === "Hardware" ? "active" : ""}
                                    onClick={() => setActiveFilter("Hardware")}
                                >
                                    Hardware & Robotics
                                </button>
                            </div>

                            {/* Projects Grid */}
                            <Row className="projects-grid">
                                {filteredProjects.map((project) => (
                                    <Col key={project.id} xs={12} md={6} lg={4}>
                                        <div className="project-card">
                                            <div className="project-img-wrapper">
                                                <div className="project-img-placeholder">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                                        <circle cx="8.5" cy="8.5" r="1.5"/>
                                                        <polyline points="21 15 16 10 5 21"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="project-content">
                                                <div className="project-category">{project.category}</div>
                                                <h3>{project.title}</h3>
                                                <p>{project.description}</p>
                                                
                                                <div className="tech-stack">
                                                    {project.techStack.map((tech, index) => (
                                                        <span key={index} className="tech-tag">{tech}</span>
                                                    ))}
                                                </div>
                                                
                                                <a 
                                                    href={project.githubLink} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="github-link"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                    </svg>
                                                    View on GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
