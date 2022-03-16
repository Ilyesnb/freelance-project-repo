import { Link } from "react-router-dom";
import styled from "styled-components";
export const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  text-decoration: none;
`
export const Container = styled.div`
transform: translateY(-2px);
box-shadow: 0 0px 7px 0px rgb(204,204,204);
border-color: hsl(236, 33%, 92%);
`;
export const Logo = styled.img`
  width: 125px;
  height: 80px;
`;
export const NavLink = styled(Link)`
  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: rgb(26, 27, 29);
    transition: width 0.25s ease;
  }
  &:hover::after {
    width: 100%;
  }
  &:hover {
    transform: scale(1.1);
  }
  position: relative;
  text-decoration: none;
  color: black;
  font-size: 16px;
  color: hsl(237, 14%, 26%);
`;
