import React from "react";
import NavBar from "../Components/NavBar";
import CompanyImg from "../images/Entreprise.jpeg";
import ImgSaction from "../Components/ImgSaction.jsx";
import TextSaction from "../Components/TextSaction";

function CompanyPage() {
  return (
    <div>
      <NavBar />
      <ImgSaction
        picteur={CompanyImg}
        description="company picteur"
        title="Entreprise"
      />
      <TextSaction/>
    </div>
  );
}

export default CompanyPage;
