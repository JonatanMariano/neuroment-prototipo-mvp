// src/pages/ChangePassword.tsx
import React, { useState } from "react";
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

const FormCard = styled.div`
  background-color: ${colors.white};
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  color: ${colors.tealDark};
  text-align: center;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid ${colors.grayMedium};
  border-radius: 8px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: ${colors.tealMedium};
  }
`;

const ChangePassword: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = () => {
    if (!password || password !== confirm) {
      alert("Passwords must match.");
      return;
    }
    navigate("/login"); // volta para login após mudar senha
  };

  return (
    <PageContainer>
      <Content>
        <FormCard>
          <Title>Change Your Password</Title>
          <Input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <Button1 label="Save Password" onClick={handleSubmit} variant="primary" />
        </FormCard>
      </Content>
      <Footer />
    </PageContainer>
  );
};

export default ChangePassword;
