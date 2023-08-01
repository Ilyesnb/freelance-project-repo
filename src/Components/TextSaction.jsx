import React from "react";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import {Containers,Img,Heading,Paragraph, TextContainer,ParagraphContainer} from "../styles/TextSaction.styled";
const TextSaction = ({ photo, description, text1, text2,title1,title2 }) => {
    useEffect(()=>{
        Aos.init({duration:2000})

    },[])
  return (
    <Containers>
      <Img data-aos="fade-up" src={photo} alt={description} />
      <TextContainer>
        <Heading data-aos="fade-down" >
          {title1}
          <br />
          <b style={{ color: "#8E44AD" }}>{title2}</b>
        </Heading>
        <ParagraphContainer  data-aos="fade-left">
          <Paragraph>{text1}</Paragraph>
          <Paragraph>{text2}</Paragraph>
        </ParagraphContainer>
      </TextContainer>
    </Containers>
  );
};

export default TextSaction;
