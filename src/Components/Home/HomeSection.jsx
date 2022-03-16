import React from 'react'
import Freelancer from "../../images/Freelancer.jpeg"
import {Container,Img} from "../../styles/HomeSection.styled"

function HomeSection(){
  return (
      <Container>
        <Img src={Freelancer} alt="choisier le bon client"/>


      </Container>

  )
}

export default HomeSection;