// src/pages/Profile.tsx
import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import { useNavigate } from "react-router-dom";

// --- Layout ---
import NavBar2 from "../components/layout/navbars/NavBar2";
import Footer from "../components/layout/Footer";

// --- Assets ---
import profileIcon from "../assets/icons/profile.png";

// --- Styled Components ---
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${colors.white};
`;

const FixedNavBar = styled(NavBar2)`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  padding: 24px 40px;
  gap: 24px;
  background-color: ${colors.white};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
  }
`;

const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
  background-color: ${colors.white};
  border: 1px solid ${colors.grayLight};
  border-radius: 12px;
  overflow: hidden;
`;

/* Sidebar */
const Sidebar = styled.aside`
  flex: 0 0 240px;
  background-color: ${colors.grayLight};
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid ${colors.grayMedium};
  position: sticky;
  top: 80px;
  height: calc(100vh - 80px);

  @media (max-width: 768px) {
    flex: 0 0 auto;
    flex-direction: row;
    overflow-x: auto;
    border-right: none;
    border-bottom: 1px solid ${colors.grayMedium};
    justify-content: flex-start;
  }
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 12px;
  border: 2px solid ${colors.tealMedium};
`;

const Username = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: ${colors.grayDark};
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 16px;
    overflow-x: auto;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.95rem;
  color: ${colors.black};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.tealLight};
    color: ${colors.white};
  }
`;

/* Área de formulário scrollável */
const ContentArea = styled.section`
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  scroll-behavior: smooth;
`;

/* Categorias */
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${colors.grayLight};
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${colors.tealDark};
`;

const TopTitle = styled.div`
  padding-bottom: 16px;
  border-bottom: 2px solid ${colors.tealMedium};
  margin-bottom: 16px;

  h2 {
    font-size: 1.6rem;
    color: ${colors.tealDark};
  }
  p {
    color: ${colors.grayMedium};
    font-size: 0.95rem;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${colors.grayMedium};
  border-radius: 6px;
  font-size: 0.95rem;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid ${colors.grayMedium};
  border-radius: 6px;
  font-size: 0.95rem;
  width: 100%;
  min-height: 80px;
`;

const DisabledInput = styled(Input)`
  background-color: ${colors.grayLight};
  color: ${colors.grayMedium};
`;

const Row = styled.div<{ cols?: number }>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.cols || 2}, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CheckboxRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Button = styled.button`
  background-color: ${colors.tealMedium};
  color: ${colors.white};
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;

  &:hover {
    background-color: ${colors.tealDark};
  }
`;

// --- Profile Page ---
const Profile: React.FC = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageContainer>
      <FixedNavBar />

      <MainContent>
        <ProfileContainer>
          {/* Sidebar esquerda */}
          <Sidebar>
            <div>
              <ProfileImage src={profileIcon} alt="Profile" />
              <Username>Usuário da Silva</Username>
            </div>
            <Menu>
             <MenuItem>View Public Profile</MenuItem> 
             <MenuItem onClick={() => scrollToSection("basic")}>Profile</MenuItem> 
             <MenuItem>Photo</MenuItem> 
             <MenuItem onClick={() => scrollToSection("playerstats")}>Player Stats</MenuItem> 
             <MenuItem onClick={() => scrollToSection("insights")}>Study Personalization</MenuItem> 
             <MenuItem onClick={() => scrollToSection("privacy")}>Account Security</MenuItem>
             <MenuItem>Subscriptions</MenuItem> 
             <MenuItem>Payment Methods</MenuItem> 
             <MenuItem>Privacy</MenuItem> 
             <MenuItem>Notification Preference</MenuItem> 
             <MenuItem>Close Account</MenuItem>
            </Menu>

          </Sidebar>

          {/* Conteúdo principal */}
          <ContentArea>
            <TopTitle>
              <h2>Public Profile</h2>
              <p>Add information or personalize it. About yourself.</p>
            </TopTitle>

            {/* Seção 1: Dados básicos */}
            <Section id="basic">
              <SectionTitle>Basic Information</SectionTitle>
              <Row cols={2}>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </Row>
              <Input placeholder="Username" />
              <DisabledInput value="email@email.com" readOnly />
              <Input placeholder="Phone Number" />
              <Input placeholder="Date of Birth" type="date" />
            </Section>

            {/* Seção 2: Bibliografia */}
            <Section>
              <SectionTitle>Bibliography</SectionTitle>
              <TextArea placeholder="Write a short bio about yourself..." />
            </Section>

            {/* Seção 3: Informações pessoais */}
            <Section>
              <SectionTitle>Personal Information</SectionTitle>
              <Row cols={3}>
                <Input placeholder="Country" />
                <Input placeholder="State" />
                <Input placeholder="City" />
              </Row>
              <Row cols={2}>
                <Input placeholder="Gender Identity" />
                <Input placeholder="Profession (e.g. Student, Engineer...)" />
              </Row>
              <Row cols={2}>
                <Input placeholder="Education Level" />
                <Input placeholder="Course(s)" />
              </Row>
              <Input placeholder="Specialties" />
            </Section>

            {/* Seção 4: Preferências acadêmicas */}
            <Section>
              <SectionTitle>Academic Preferences</SectionTitle>
              <TextArea placeholder="Languages (tags system later...)" />
              <TextArea placeholder="Favorite Subjects (max 3, ranked)" />
            </Section>

            {/* Seção 5: NeuroMent Insights */}
            <Section id="insights">
              <SectionTitle>NeuroMent Insights</SectionTitle>
  
{/* MBTI */}
<p><b>MBTI Result:</b> ENFP</p>

{/* Extroversion vs Introversion */}
<p style={{ fontSize: "14px", margin: "4px 0" }}>Extroversion (E) vs Introversion (I)</p>
<div style={{ background: colors.grayLight, borderRadius: "8px", height: "14px", width: "100%" }}>
  <div style={{ background: colors.tealMedium, width: "70%", height: "100%", borderRadius: "8px" }} />
</div>

{/* Intuition vs Sensing */}
<p style={{ fontSize: "14px", margin: "4px 0" }}>Intuition (N) vs Sensing (S)</p>
<div style={{ background: colors.grayLight, borderRadius: "8px", height: "14px", width: "100%" }}>
  <div style={{ background: colors.orange, width: "65%", height: "100%", borderRadius: "8px" }} />
</div>

{/* Feeling vs Thinking */}
<p style={{ fontSize: "14px", margin: "4px 0" }}>Feeling (F) vs Thinking (T)</p>
<div style={{ background: colors.grayLight, borderRadius: "8px", height: "14px", width: "100%" }}>
  <div style={{ background: colors.purple, width: "80%", height: "100%", borderRadius: "8px" }} />
</div>

{/* Perceiving vs Judging */}
<p style={{ fontSize: "14px", margin: "4px 0" }}>Perceiving (P) vs Judging (J)</p>
<div style={{ background: colors.grayLight, borderRadius: "8px", height: "14px", width: "100%" }}>
  <div style={{ background: colors.green, width: "60%", height: "100%", borderRadius: "8px" }} />
</div>



              {/* Estilo de Aprendizagem */}
              <p><b>Learning Style:</b></p>
              <ul>
                <li>Visual - 50%</li>
                <li>Kinesthetic - 30%</li>
                <li>Auditory - 20%</li>
              </ul>

              {/* Inteligências Múltiplas */}
              <p><b>Multiple Intelligences:</b></p>
              <div>
                <p>Linguistic - 70%</p>
                <p>Interpersonal - 65%</p>
                <p>Logical - 40%</p>
                <p>Musical - 30%</p>
                <p>Bodily - 20%</p>
                <p>Naturalist - 25%</p>
                <p>Intrapersonal - 50%</p>
                <p>Visual-Spatial - 60%</p>
                <p>Existential - 35%</p>
              </div>

              {/* Ritmo Circadiano */}
                <p><b>Circadian Rhythm:</b> Night-oriented learner 🌙</p>

              {/* Motivação */}
                <p><b>Motivations:</b> Gamification, peer recognition</p>
             <Button>Redo Tests</Button>
            </Section>


            {/* Seção 6: Player Stats */}
            <Section id="playerstats">
             <SectionTitle>Player Stats</SectionTitle>
             <p><b>XP:</b> 120 / 200</p>
             <div style={{ background: colors.grayLight, borderRadius: "8px", height: "20px", width: "100%" }}>
             <div style={{ background: colors.orangeSoft, width: "60%", height: "100%", borderRadius: "8px" }} />
             </div>
              <ul>
               <li>🏆 5 Lessons Completed</li>
               <li>🔥 3-Day Streak</li>
               <li>⭐ Bronze Rank</li>
              </ul>
            </Section>


            {/* Seção 7: Privacidade & Segurança */}
            <Section id="privacy">
             <SectionTitle>Privacy & Security</SectionTitle>
              <p>The following data is always private: Email, Password</p>
              <CheckboxRow>
               <label><input type="checkbox" /> Show Username</label>
               <label><input type="checkbox" /> Show Phone Number</label>
               <label><input type="checkbox" /> Show Birthdate</label>
               <label><input type="checkbox" /> Show Location</label>
               <label><input type="checkbox" /> Show Bibliography</label>
               <label><input type="checkbox" /> Show Links</label>
              </CheckboxRow>
              <Button onClick={() => navigate("/change-password")}>Change Password</Button>
            </Section>


            {/* Seção 8: Links */}
            <Section>
              <SectionTitle>Links</SectionTitle>
              <Row cols={4}>
                <Input placeholder="YouTube" />
                <Input placeholder="LinkedIn" />
                <Input placeholder="Instagram" />
                <Input placeholder="Other Platform" />
              </Row>
              <Button>Add another link</Button>
            </Section>
          </ContentArea>
        </ProfileContainer>
      </MainContent>

      <Footer />
    </PageContainer>
  );
};

export default Profile;
