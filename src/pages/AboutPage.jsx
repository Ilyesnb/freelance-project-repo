import React from "react";
import NavBar from "../Components/NavBar";
import ImgSaction from "../Components/ImgSaction";
import AboutImg from "../images/AboutUs.jpeg";
const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <ImgSaction
        picteur={AboutImg}
        description="About picteur"
        title="A Propos"
      />
    </div>
  );
};

export default ContactPage;
