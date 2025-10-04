// src/pages/ConfirmEmailPage.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Button1 from "../components/ui/buttons/Button1";
import Footer from "../components/layout/Footer";
import colors from "../styles/colors";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${colors.white};
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Card = styled.div`
  background-color: ${colors.white};
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;

const Title = styled.h2`
  color: ${colors.tealDark};
`;

const Description = styled.p`
  color: ${colors.grayDark};
  font-size: 14px;
`;

const ConfirmEmailPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from || "register"; // default "register"

  const [verified, setVerified] = useState(false);

  const handleVerify = () => {
    setVerified(true);
    setTimeout(() => {
      if (from === "forgot") {
        navigate("/change-password");
      } else {
        navigate("/confirm-success");
      }
    }, 500); // simula transição rápida
  };

  return (
    <PageContainer>
      <Content>
        <Card>
          {!verified ? (
            <>
              <Title>Confirm Your Email</Title>
              <Description>
                We have sent a verification code to your email. Please check your inbox and click the button below when ready.
              </Description>
              <Button1 label="I Verified My Email" onClick={handleVerify} variant="primary" />
            </>
          ) : (
            <>
              <Title>Email Verified!</Title>
              <Description>Redirecting...</Description>
            </>
          )}
        </Card>
      </Content>
      <Footer />
    </PageContainer>
  );
};

export default ConfirmEmailPage;
