// src/components/layout/navbars/NavBar1.tsx
import React from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import { useNavigate } from "react-router-dom";

const NavBar = styled.nav`
  height: 64px;
  background-color: ${colors.tealDark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  color: ${colors.white};
`;

const LogoText = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;

  li {
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    &:hover {
      color: ${colors.tealLight};
    }
  }
`;

const SignInButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  color: ${colors.white};
  border: none;
  border-radius: 24px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const NavBar1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <NavBar>
      <LogoText>NeuroMent</LogoText>
      <NavLinks>
        <li>FAQ</li>
        <li>Solutions</li>
        <li onClick={() => navigate("/planos-landing")}>Pricing</li>
        <li>Company</li>
      </NavLinks>
      <SignInButton onClick={() => navigate("/register")}>
        Sign-In &gt;
      </SignInButton>
    </NavBar>
  );
};

export default NavBar1;

