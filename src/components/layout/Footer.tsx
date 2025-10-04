// src/components/layout/Footer.tsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../styles/colors";

type FooterProps = {
  email?: string;
};

const FooterContainer = styled.footer`
  background-color: ${colors.tealMedium};
  color: ${colors.white};
  text-align: center;
  padding: 16px 24px;
  font-size: 14px;
  width: 100%;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterLink = styled(Link)`
  color: ${colors.white};
  text-decoration: underline;
  margin-left: 4px;

  &:hover {
    color: ${colors.tealLight};
  }
`;

const EmailLink = styled.a`
  color: ${colors.white};
  text-decoration: underline;

  &:hover {
    color: ${colors.tealLight};
  }
`;

const Footer: React.FC<FooterProps> = ({ email = "support@neuroment.com.br" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <p>© {currentYear} NeuroMent. All rights reserved.</p>
      <p>
        Contact: <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </p>
      <p>
        <FooterLink to="/about">About</FooterLink>
      </p>
    </FooterContainer>
  );
};

export default Footer;
