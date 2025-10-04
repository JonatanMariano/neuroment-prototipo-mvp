import React from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";

type PlanProps = {
  name: string;
  description: string;
  price: string;
  action?: () => void;
};

const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 16px;
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  flex-shrink: 0; /* necessário para carrossel */
`;

const Title = styled.h3`
  font-size: 18px;
  color: ${colors.tealDark};
`;

const Description = styled.p`
  font-size: 14px;
  color: ${colors.grayDark};
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.orangeVibrant};
`;

const Button = styled.button`
  background-color: ${colors.tealMedium};
  color: ${colors.white};
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: ${colors.tealLight};
  }
`;

const PlanCard: React.FC<PlanProps> = ({ name, description, price, action }) => {
  return (
    <Card onClick={action}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Price>{price}</Price>
      <Button>Select</Button>
    </Card>
  );
};

export default PlanCard;
