import React from "react";
import NavBar from "../Components/NavBar";
import CompanyImg from "../images/Entreprise.jpeg";
import ImgSaction from "../Components/ImgSaction.jsx";

function CompanyPage() {
  return (
    <div>
      <NavBar />
      <ImgSaction picteur={CompanyImg} description="company picteur"
      title="Entreprise" />
    </div>
  );
}

export default CompanyPage;
