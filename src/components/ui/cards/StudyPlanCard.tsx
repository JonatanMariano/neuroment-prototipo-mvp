import React from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import { FaPlus, FaRegLightbulb } from "react-icons/fa"; // ícones para new e template

type CardType = "new" | "template" | "created";

interface StudyPlanCardProps {
  title: string;
  description?: string;
  progress?: number; // 0 a 100
  onClick?: () => void;
  type?: CardType;
  image?: string;
}

const CardContainer = styled.div<{ type?: CardType }>`
  width: 200px;
  min-width: 200px;
  height: 160px;
  background-color: ${(props) =>
    props.type === "created" ? colors.white : "transparent"};
  border-radius: 12px;
  box-shadow: ${(props) =>
    props.type === "created" ? "0 4px 12px rgba(0,0,0,0.1)" : "none"};
  border: ${(props) =>
    props.type === "template" || props.type === "new"
      ? `2px dashed ${colors.tealLight}`
      : "none"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${(props) =>
      props.type === "created"
        ? "0 8px 20px rgba(0,0,0,0.15)"
        : "0 4px 12px rgba(0,0,0,0.1)"};
    background-color: ${(props) =>
      props.type === "template" || props.type === "new"
        ? colors.tealLight + "20"
        : colors.white};
  }
`;

// **Imagem de fundo**
const BackgroundImage = styled.div<{ src: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  opacity: 0.35; /* leve opacidade */
  border-radius: 12px;
  z-index: 0;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1; /* acima da imagem */
`;

const IconWrapper = styled.div`
  font-size: 20px;
  color: ${colors.tealMedium};
`;

const CardTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.tealDark};
  margin: 0;
  position: relative;
  z-index: 1;
`;

const CardDescription = styled.p`
  font-size: 12px;
  color: ${colors.grayDark};
  margin: 4px 0 0 0;
  flex: 1;
  position: relative;
  z-index: 1;
`;

const ProgressBarContainer = styled.div`
  height: 8px;
  background-color: ${colors.grayLight};
  border-radius: 4px;
  overflow: hidden;
  margin-top: 8px;
  position: relative;
  z-index: 1;
`;

const ProgressBar = styled.div<{ progress?: number }>`
  height: 100%;
  width: ${(props) => props.progress || 0}%;
  background-color: ${colors.tealMedium};
  transition: width 0.3s ease;
`;

const StudyPlanCard: React.FC<StudyPlanCardProps> = ({
  title,
  description,
  progress,
  onClick,
  type = "created",
  image,
}) => {
  const renderIcon = () => {
    switch (type) {
      case "new":
        return <FaPlus />;
      case "template":
        return <FaRegLightbulb />;
      default:
        return null;
    }
  };

  return (
    <CardContainer type={type} onClick={onClick}>
      {image && <BackgroundImage src={image} />}
      <CardHeader>
        {renderIcon() && <IconWrapper>{renderIcon()}</IconWrapper>}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {description && <CardDescription>{description}</CardDescription>}
      {type === "created" && progress !== undefined && (
        <ProgressBarContainer>
          <ProgressBar progress={progress} />
        </ProgressBarContainer>
      )}
    </CardContainer>
  );
};

export default StudyPlanCard;
