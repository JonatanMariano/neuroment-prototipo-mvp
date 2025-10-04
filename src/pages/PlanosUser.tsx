// src/pages/PlanosUser.tsx
import React from "react";
import styled from "styled-components";
import NavBar2 from "../components/layout/navbars/NavBar2";
import Footer from "../components/layout/Footer";
import Button1 from "../components/ui/buttons/Button1";
import colors from "../styles/colors";

interface Plan {
  name: string;
  description: string;
  price: string;
  action: () => void;
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${colors.white};
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  gap: 40px;
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const PlanCard = styled.div<{ planName: string }>`
  background: ${({ planName }) =>
    planName === "Gold"
      ? "linear-gradient(135deg, #FFD700, #FFA500)"
      : planName === "Bronze"
      ? "linear-gradient(135deg, #CD7F32, #8B4513)"
      : colors.grayLight};
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ planName }) =>
    planName === "Gold" || planName === "Bronze" ? colors.white : colors.black};
`;

const PlanTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 12px;
`;

const PlanDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 16px;
`;

const Price = styled.p`
  font-weight: bold;
  margin-bottom: 16px;
`;

const InfoSection = styled.section`
  background-color: ${colors.grayLight};
  padding: 40px;
  border-radius: 12px;
  text-align: center;
`;

const PlanosUser: React.FC = () => {
  const plans: Plan[] = [
    { name: "Basic", description: "Free with only 3 consecutive plans.", price: "R$ 0,00", action: () => alert("Basic selected") },
    { name: "Bronze", description: "9 consecutive plans + customization.", price: "R$ 19,90 / month", action: () => alert("Bronze subscription coming soon") },
    { name: "Gold", description: "Unlimited consecutive plans + full customization.", price: "R$ 39,90 / month", action: () => alert("Gold subscription coming soon") },
  ];

  return (
    <PageContainer>
      <NavBar2 />

      <Content>
        <h1>Your Current and Suggested Plans</h1>
        <PlansGrid>
          {plans.map((plan) => (
            <PlanCard key={plan.name} planName={plan.name}>
              <div>
                <PlanTitle>{plan.name}</PlanTitle>
                <PlanDescription>{plan.description}</PlanDescription>
                <Price>{plan.price}</Price>
              </div>
              <Button1 label="Select Plan" onClick={plan.action} />
            </PlanCard>
          ))}
        </PlansGrid>

        <InfoSection>
          <h2>Our Recommendation</h2>
          <p>Based on your usage, we suggest the plan that best fits your learning style.</p>
          <Button1 label="View Analysis" onClick={() => alert("Personalized Analysis coming soon")} />
        </InfoSection>
      </Content>

      <Footer />
    </PageContainer>
  );
};

export default PlanosUser;
