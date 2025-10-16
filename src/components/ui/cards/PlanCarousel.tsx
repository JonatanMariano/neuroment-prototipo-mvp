import React, { useState } from "react";
import styled from "styled-components";
import PlanCard from "./PlanCard";
import colors from "../../../styles/colors";

const CarouselContainer = styled.div`
  width: 320px; /* maior que antes */
  padding: 24px;
  background-color: ${colors.grayLight};
  border-radius: 20px;
  box-shadow: 0 12px 24px rgba(0,0,0,0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Track = styled.div`
  overflow: hidden;
  flex: 1;
`;

const TrackInner = styled.div<{ index: number }>`
  display: flex;
  gap: 16px;
  transform: translateX(${props => -props.index * 276}px);
  transition: transform 0.5s ease-in-out;
`;

const ArrowButton = styled.button<{ position: "left" | "right" }>`
  background-color: rgba(84,134,135,0.3); /* tealMedium com transparência */
  color: ${colors.white};
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.position === "left" ? "left: -18px;" : "right: -18px;"}
  z-index: 2;

  &:hover {
    background-color: rgba(94,234,212,0.9); /* tealLight transparente */
  }
`;

type Plan = {
  name: string;
  description: string;
  price: string;
  action?: () => void;
};

type PlanCarouselProps = {
  plans: Plan[];
};

const PlanCarousel: React.FC<PlanCarouselProps> = ({ plans }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < plans.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <CarouselContainer>
      <ArrowButton position="left" onClick={handlePrev}>
        &lt;
      </ArrowButton>

      <Track>
        <TrackInner index={currentIndex}>
          {plans.map((plan, idx) => (
            <PlanCard key={idx} {...plan} />
          ))}
        </TrackInner>
      </Track>

      <ArrowButton position="right" onClick={handleNext}>
        &gt;
      </ArrowButton>
    </CarouselContainer>
  );
};

export default PlanCarousel;
