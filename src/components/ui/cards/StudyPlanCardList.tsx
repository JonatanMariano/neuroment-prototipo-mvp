// src/components/ui/cards/StudyPlanCardList.tsx
import React from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import StudyPlanCard from "./StudyPlanCard";

export interface CardData {
  id: string;
  title: string;
  description?: string;
  progress?: number;
  type?: "new" | "template" | "created";
  image?: string;
  onClick?: () => void;
}

interface StudyPlanCardListProps {
  cards: CardData[];
  title?: string;
  scrollable?: boolean; // horizontal scroll
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

const ListTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.tealDark};
`;

const CardsWrapper = styled.div<{ $scrollable?: boolean }>`
  display: flex;
  gap: 12px;
  overflow-x: ${(props) => (props.$scrollable ? "auto" : "visible")};
  padding-bottom: 4px;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.tealMedium};
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background: ${colors.grayLight};
  }
`;

const StudyPlanCardList: React.FC<StudyPlanCardListProps> = ({
  cards,
  title,
  scrollable = false,
}) => {
  return (
    <ListContainer>
      {title && <ListTitle>{title}</ListTitle>}
      <CardsWrapper $scrollable={scrollable}>
        {cards.map((card) => (
          <StudyPlanCard
            key={card.id}
            title={card.title}
            description={card.description}
            progress={card.progress}
            type={card.type}
            image={card.image}
            onClick={card.onClick}
          />
        ))}
      </CardsWrapper>
    </ListContainer>
  );
};

export default StudyPlanCardList;
