import React from 'react'
import CompanyImg from "../../images/Entreprise.jpeg"
import {Container,Img} from "../../styles/CompanySaction"

const CompanySaction = () => {
  return (
    <Container>
        <Img src={CompanyImg} alt="trouver un freelancer"/>

    </Container>
    
  )
}

export default CompanySaction