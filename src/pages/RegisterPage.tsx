import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Button1 from "../components/ui/buttons/Button1";
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
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid ${colors.grayMedium};
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border 0.2s;

  &:focus {
    border-color: ${colors.tealMedium};
  }
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${colors.grayDark};
  gap: 8px;

  a {
    color: ${colors.link};
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: ${colors.tealMedium};
    }
  }
`;

const SmallText = styled.p`
  text-align: center;
  font-size: 14px;
  color: ${colors.grayDark};

  a {
    color: ${colors.link};
    text-decoration: underline;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
`;

const GoogleButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  border: 1px solid ${colors.grayMedium};
  border-radius: 8px;
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.2s;

  &:hover {
    background-color: ${colors.grayLight};
  }
`;

const AppleButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background 0.2s;

  &:hover {
    background-color: ${colors.grayDark};
  }
`;

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);

  const handleRegister = () => {
    if (!email || !password || password !== confirm || !agree) {
      alert("Please fill all fields correctly and accept the terms.");
      return;
    }
    navigate("/confirm-email", { state: { from: "register" } });
  };

  return (
    <PageContainer>
      <Content>
        <FormCard>
          <Title>Create Account</Title>

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <CheckboxContainer>
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            I agree with the <Link to="/terms">terms of use</Link>
          </CheckboxContainer>

          <Button1
            label="Register"
            onClick={handleRegister}
            variant="primary"
          />

          <SmallText>
            Already have an account? <Link to="/login">Sign in</Link>
          </SmallText>

          <SocialButtons>
            <GoogleButton onClick={() => alert("Google login simulation")}>
              <img src="/src/assets/icons/google.png" alt="Google" width="20" />
              Sign in with Google
            </GoogleButton>

            <AppleButton onClick={() => alert("Apple login simulation")}>
              <img src="/src/assets/icons/apple.png" alt="Apple" width="20" />
              Sign in with Apple
            </AppleButton>
          </SocialButtons>
        </FormCard>
      </Content>

      <Footer />
    </PageContainer>
  );
};

export default RegisterPage;

