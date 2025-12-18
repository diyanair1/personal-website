import { Container, Row, Col } from "react-bootstrap";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import profileImg from '../assets/img/me.jpg';

export const About = () => {
    const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.3 });
    
    return (
        <section className="about" id="about" ref={sectionRef}>
            <Container>
                <Row>
                    <Col size={12}>
                        <div className={`about-box glass-card-large ${isVisible ? 'animate-in' : ''}`}>
                            <div className="about-header">
                                <div className="about-photo-circle">
                                    <img 
                                        src={profileImg} 
                                        alt="Diya Nair" 
                                        className="about-profile-img"
                                    />
                                </div>
                                <h2>About Me</h2>
                            </div>
                            
                            <div className="about-content">
                                <p>I'm a Mechatronics Engineering student at the University of Waterloo with a passion for robotics and innovative technology. 
                                    I'm driven by curiosity and building creative solutions that make a meaningful impact..</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
