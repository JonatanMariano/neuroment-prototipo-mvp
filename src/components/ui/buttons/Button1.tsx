// src/components/ui/buttons/Button1.tsx
import React from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
};

const StyledButton = styled.button<{ variant: "primary" | "secondary" | "tertiary" }>`
  background-color: ${(props) =>
    props.variant === "primary"
      ? colors.tealMedium
      : props.variant === "secondary"
      ? colors.orangeVibrant
      : "transparent"};

  color: ${(props) =>
    props.variant === "tertiary" ? colors.tealMedium : colors.white};

  border: ${(props) =>
    props.variant === "tertiary" ? `2px solid ${colors.tealMedium}` : "none"};

  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s, color 0.2s, border 0.2s;
  box-shadow: ${(props) =>
    props.variant === "tertiary" ? "none" : "0px 2px 4px rgba(0, 0, 0, 0.15)"};

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary"
        ? colors.tealLight
        : props.variant === "secondary"
        ? colors.orangeAccent
        : colors.tealLight};
    color: ${(props) =>
      props.variant === "tertiary" ? colors.white : colors.white};
    border: ${(props) =>
      props.variant === "tertiary" ? `2px solid ${colors.tealLight}` : "none"};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0px);
  }
`;

const Button1: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
}) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {label}
    </StyledButton>
  );
};

export default Button1;
