// src/pages/ConfirmSuccess.tsx
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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

const ConfirmSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Content>
        <Card>
          <Title>Registration Successful!</Title>
          <Description>Your email has been verified. You can now log in.</Description>
          <Button1 label="Go to Login" onClick={() => navigate("/login")} variant="primary" />
        </Card>
      </Content>
      <Footer />
    </PageContainer>
  );
};

export default ConfirmSuccess;
