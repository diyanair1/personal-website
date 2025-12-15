import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import video1 from '../assets/img/video2.mp4';

export const Banner = () => {
    const toRotate = [' Student ', ' Aspiring Developer ', ' Tech Enthusiast '];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100); // how fast the text is typed
    const period = 2000;

    useEffect(() => {                       // function responsible for the typing effect
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) }; // cleanup function
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length; // index of the current string to rotate
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); // type or delete characters based on isDeleting state
    
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2); // speed up deleting
        }

        if (!isDeleting && updatedText === fullText) { // finished typing
            setIsDeleting(true);
            setDelta(period); // set delta (speed) to normal pace
        } else if (isDeleting && updatedText === '') { // finished deleting
            setIsDeleting(false);
            setLoopNum(loopNum + 1); // move to next string
            setDelta(500); // pause before typing next string
        }
    }

    return (
        <section className="banner" id="home">
            <video className="banner-video" autoPlay loop muted playsInline>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="banner-overlay"></div>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={12} xl={12}>
                        <h1>{`Hi! I'm Diya Nair `}<span className="wrap"> {text} </span></h1>
                        <p>I'm a passionate student eager to learn and grow in the tech world. Explore my projects and skills!</p>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}