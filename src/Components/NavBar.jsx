import React from "react";
import LogoIcon from "../images/lightlogo.jpeg";
import { Navbar, Container, Logo, NavLink } from "../styles/NavBar.styled";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Container>
      <Navbar>
        <Link to="/">
          <Logo src={LogoIcon} alt="freelancer logo icon " />
        </Link>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/entreprise">Entreprise</NavLink>
        <NavLink to="/a-propos">A Propos</NavLink>
      </Navbar>
    </Container>
  );
};

export default Header;