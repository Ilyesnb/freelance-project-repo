import React from "react";
import { Container, Img, Heading } from "../styles/ImgSection.styled";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const About = ({ picteur, description, title }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    
  }, []);
  return (
    <Container>
      <Img src={picteur} alt={description} />
      <Heading data-aos="fade-up">{title}</Heading>
    </Container>
  );
};

export default About;
