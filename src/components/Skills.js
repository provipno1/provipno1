import React from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx animate__animated animate__zoomIn">
              <h2>Skills</h2>
              <p>
                Provip no1<br></br> code 3 tiếng
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src="https://d1iv5z3ivlqga1.cloudfront.net/wp-content/uploads/2021/02/30162211/html-va-css.jpg" alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src="https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-built_knockout.png" alt="Image" />
                  <h5>Branding</h5>
                </div>
                <div className="item">
                  <img src="https://t3.ftcdn.net/jpg/03/34/08/04/360_F_334080417_LgCQeTMj7uSv1wBrNjX2TsNyjdsWZF9k.jpg" alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src="https://reactjs.org/logo-og.png" alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="Image" className="background-image-left" />
    </section>
  );
};
