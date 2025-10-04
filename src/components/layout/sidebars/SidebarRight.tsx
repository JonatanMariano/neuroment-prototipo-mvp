// src/components/layout/sidebar/SidebarRight.tsx
import React from "react";
import styled from "styled-components";
import NotificationCard from "../../ui/cards/NotificationCard";
import MiniCalendar from "../../ui/mini/MiniCalendar";
import type { EventData } from "../../ui/mini/MiniCalendar";

export interface NotificationData {
  id: string;
  message: string;
  type?: "info" | "warning" | "success";
  timestamp?: string;
}

interface SidebarRightProps {
  notifications: NotificationData[];
  calendarEvents?: EventData[];
}

const SidebarContainer = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CalendarSection = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 12px;
`;

const NotificationsSection = styled.div`
  background-color: #f7f7f7;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SidebarRight: React.FC<SidebarRightProps> = ({
  notifications,
  calendarEvents = [],
}) => (
  <SidebarContainer>
    <CalendarSection>
      <MiniCalendar events={calendarEvents} />
    </CalendarSection>

    <NotificationsSection>
      {notifications.map(n => (
        <NotificationCard
          key={n.id}
          message={n.message}
          type={n.type}
          timestamp={n.timestamp}
        />
      ))}
    </NotificationsSection>
  </SidebarContainer>
);

export default SidebarRight;
