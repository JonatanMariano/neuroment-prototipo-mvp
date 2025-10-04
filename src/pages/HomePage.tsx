// src/pages/HomePage.tsx
import React, { useState } from "react";
import styled from "styled-components";
import colors from "../styles/colors";

// --- Layouts ---
import NavBar2 from "../components/layout/navbars/NavBar2";
import Footer from "../components/layout/Footer";
import SidebarLeft from "../components/layout/sidebars/SidebarLeft";
import SidebarRight from "../components/layout/sidebars/SidebarRight";

// --- UI Components ---
import StudyPlanCardList from "../components/ui/cards/StudyPlanCardList";
import MiniCalendar from "../components/ui/mini/MiniCalendar";

// --- Types ---
import type { CardData } from "../components/ui/cards/StudyPlanCardList";
import type { ActionData } from "../components/layout/sidebars/SidebarLeft";
import type { NotificationData } from "../components/layout/sidebars/SidebarRight";
import type { EventData } from "../components/ui/mini/MiniCalendar";

// --- Imagens ---
import sample1 from "../assets/images/sample1.png";
import sample2 from "../assets/images/sample2.png";
import sample3 from "../assets/images/sample3.png";
import sample4 from "../assets/images/sample4.png";
import sample5 from "../assets/images/sample5.png";

// --- Styled Components ---
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${colors.white};
`;

// HomePage.tsx - ajuste do NavBar2
const FixedNavBar = styled(NavBar2)`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const MainContent = styled.main`
  display: flex;
  flex: 1;
  padding: 24px 40px;
  gap: 24px;
  align-items: flex-start;
  transition: all 0.3s ease;
`;

const SidebarWrapper = styled.div<{ left?: boolean; minimized?: boolean }>`
  flex: 0 0 ${(props) => (props.minimized ? "50px" : "240px")};
  background-color: ${(props) => (props.left ? "#f7f7f7" : "transparent")};
  padding: 16px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;
  overflow: hidden;
`;

const CenterContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow: hidden;
`;

const ToggleButton = styled.button`
  background-color: ${colors.tealMedium};
  color: ${colors.white};
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
  margin-bottom: 12px;
  &:hover {
    background-color: ${colors.tealDark};
  }
`;

const FilterButton = styled.button`
  align-self: flex-start;
  background-color: ${colors.grayLight};
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.grayMedium};
    color: ${colors.white};
  }
`;

// --- Dados de templates ---
const templateCards: CardData[] = [
  { id: "new", title: "Create New Plan", type: "new" },
  { id: "tpl1", title: "Speed Learning", description: "Learn anything super fast", type: "template", image: sample1 },
  { id: "tpl2", title: "Math Mastery", description: "Focus on solving math problems", type: "template", image: sample2 },
  { id: "tpl3", title: "Language Boost", description: "Improve foreign languages quickly", type: "template", image: sample3 },
  { id: "tpl4", title: "Work Skills", description: "Learn skills for work & business", type: "template", image: sample4 },
  { id: "tpl5", title: "Hands-on Practice", description: "Learn by doing", type: "template", image: sample5 },
  { id: "tpl6", title: "Memory Training", description: "Boost your memory skills", type: "template" },
  { id: "tpl7", title: "Critical Thinking", description: "Develop reasoning skills", type: "template" },
  { id: "tpl8", title: "Speed Reading", description: "Read faster and comprehend more", type: "template" },
  { id: "tpl9", title: "Time Management", description: "Organize your day efficiently", type: "template" },
  { id: "tpl10", title: "Creative Writing", description: "Enhance your writing skills", type: "template" },
];

const createdCards: CardData[] = [
  { id: "p1", title: "Physics Revision", description: "Weekly review of concepts", progress: 40, type: "created" },
  { id: "p2", title: "English Vocabulary", description: "Daily practice words", progress: 60, type: "created" },
  { id: "p3", title: "History Timeline", description: "Prepare for exams", progress: 20, type: "created" },
];

// --- Actions pendentes e concluídas ---
const pendingActions: ActionData[] = [
  { id: "pend1", title: "Math Quiz", timestamp: "Due today", completed: false },
  { id: "pend2", title: "Complete Plan A Lesson 4", timestamp: "Due tomorrow", completed: false },
];

const completedActions: ActionData[] = [
  { id: "done1", title: "Lesson 3 of Plan B", timestamp: "Completed yesterday", completed: true },
  { id: "done2", title: "Task 5 of Plan C", timestamp: "Completed 2 days ago", completed: true },
  { id: "done3", title: "Lesson 2 of Plan D", timestamp: "Completed 3 days ago", completed: true },
  { id: "done4", title: "Lesson 1 of Plan E", timestamp: "Completed 4 days ago", completed: true },
];

// --- Notificações ---
const notifications: NotificationData[] = [
  { id: "n1", message: "Your Physics Plan is due tomorrow", type: "warning", timestamp: "10m ago" },
  { id: "n2", message: "New template available: Coding Skills", type: "info", timestamp: "1h ago" },
  { id: "n3", message: "You earned 50 XP!", type: "success", timestamp: "2h ago" },
  { id: "n4", message: "Don't forget to review Math Quiz", type: "info", timestamp: "5h ago" },
  { id: "n5", message: "History Timeline updated", type: "success", timestamp: "6h ago" },
];

// --- Eventos do MiniCalendar ---
const calendarEvents: EventData[] = [
  { id: "e1", date: "2025-10-01", title: "Math Quiz" },
  { id: "e2", date: "2025-10-03", title: "Physics Review" },
  { id: "e3", date: "2025-10-05", title: "English Vocabulary" },
  { id: "e4", date: "2025-10-06", title: "Plan A Lesson 4" },
  { id: "e5", date: "2025-10-07", title: "History Timeline Task" },
];

// --- HomePage Component ---
const HomePage: React.FC = () => {
  const [leftMinimized, setLeftMinimized] = useState(false);
  const [rightMinimized, setRightMinimized] = useState(false);

  return (
    <PageContainer>
      <FixedNavBar />

      <MainContent>
        {/* Sidebar esquerda */}
        <SidebarWrapper left minimized={leftMinimized}>
          <ToggleButton onClick={() => setLeftMinimized(!leftMinimized)}>
            {leftMinimized ? ">" : "<"} Actions
          </ToggleButton>
          {!leftMinimized && <SidebarLeft recentActions={[...pendingActions, ...completedActions]} />}
        </SidebarWrapper>

        {/* Conteúdo central */}
        <CenterContent>
          <FilterButton>Filter Templates</FilterButton>
          <StudyPlanCardList cards={templateCards} title="Suggested Templates" scrollable />
          <StudyPlanCardList cards={createdCards} title="Your Plans" scrollable />
        </CenterContent>

        {/* Sidebar direita */}
        <SidebarWrapper minimized={rightMinimized}>
          <ToggleButton onClick={() => setRightMinimized(!rightMinimized)}>
            {rightMinimized ? "<" : ">"} Alerts
          </ToggleButton>
          {!rightMinimized && (
            <>
              <MiniCalendar events={calendarEvents} />
              <SidebarRight notifications={notifications} />
            </>
          )}
        </SidebarWrapper>
      </MainContent>

      <Footer />
    </PageContainer>
  );
};

export default HomePage;
