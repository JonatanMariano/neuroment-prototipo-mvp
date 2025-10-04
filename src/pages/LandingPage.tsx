import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import NavBar1 from "../components/layout/navbars/NavBar1";
import Footer from "../components/layout/Footer";
import PlanCarousel from "../components/ui/cards/PlanCarousel";
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
  flex-direction: column;
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 80px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Section = styled.section`
  padding: 60px 80px;
  text-align: center;
  background-color: ${colors.grayLight};
  color: ${colors.black};
  font-size: 16px;
  line-height: 1.6;

  &:nth-of-type(even) {
    background-color: ${colors.white};
  }
`;

const plans = [
  {
    name: "Basic",
    description: "Free with only 3 consecutive plans at a time.",
    price: "R$ 0,00",
    action: () => alert("Basic Plan selected"),
  },
  {
    name: "Bronze",
    description: "Enhanced customization + 9 consecutive plans at a time.",
    price: "R$ 19,90 / month",
    action: () => alert("Bronze Plan subscription coming soon 🚀"),
  },
  {
    name: "Gold",
    description: "Full customization + unlimited consecutive plans.",
    price: "R$ 39,90 / month",
    action: () => alert("Gold Plan subscription coming soon 🚀"),
  },
];

const LandingPage: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <PageContainer>
      <NavBar1 />

      <Content>
        {/* Hero Section */}
        <HeroSection>
          <LeftColumn>
            <h2 style={{ color: colors.tealDark }}>Marketing</h2>
            <p style={{ color: colors.grayDark }}>
              Futuramente aqui vai ter uma imagem e um texto persuasivo
              destacando os diferenciais do NeuroMent.
            </p>
            <Button1 label="View More" onClick={() => alert("More details coming soon")} />
          </LeftColumn>

          <RightColumn>
            <Button1 label="Download App" variant="secondary" onClick={() => alert("Downloading App...")} />
            <div style={{ width: "280px" }}> 
              <PlanCarousel plans={plans} />
            </div>
          </RightColumn>
        </HeroSection>

        {/* App Explanation */}
        <Section>
          <h2>App Explanation</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            elementum, sapien sed cursus bibendum, ipsum urna cursus risus, eu
            aliquet justo erat a nisl.
          </p>
        </Section>

        {/* More Information */}
        <Section>
          <h2>More Information</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            facilisis ex nec odio bibendum, nec tempor lacus gravida.
          </p>
        </Section>
      </Content>

      <Footer />
    </PageContainer>
  );
};

export default LandingPage;
