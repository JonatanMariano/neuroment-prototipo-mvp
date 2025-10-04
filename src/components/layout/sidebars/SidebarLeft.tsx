// src/components/layout/sidebar/SidebarLeft.tsx
import React from "react";
import styled from "styled-components";

export interface ActionData {
  id: string;
  title: string;
  description?: string;
  timestamp?: string;
  completed?: boolean;
}

interface SidebarLeftProps {
  recentActions: ActionData[];
}

const SidebarContainer = styled.div`
  width: 240px;
  background-color: #f7f7f7;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
`;

const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const ActionItem = styled.div`
  padding: 8px 12px;
  background-color: #ffffff;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 2px;
  &:hover {
    background-color: #e0f7f5;
  }
`;

const Timestamp = styled.span`
  font-size: 11px;
  color: #666666;
`;

const SidebarLeft: React.FC<SidebarLeftProps> = ({ recentActions }) => {
  const pendingActions = recentActions.filter(a => !a.completed);
  const completedActions = recentActions.filter(a => a.completed);

  return (
    <SidebarContainer>
      {pendingActions.length > 0 && (
        <>
          <SectionTitle>Pending Actions</SectionTitle>
          {pendingActions.map(action => (
            <ActionItem key={action.id}>
              <strong>{action.title}</strong>
              {action.description && <span>{action.description}</span>}
              {action.timestamp && <Timestamp>{action.timestamp}</Timestamp>}
            </ActionItem>
          ))}
        </>
      )}

      {completedActions.length > 0 && (
        <>
          <SectionTitle>Completed Actions</SectionTitle>
          {completedActions.map(action => (
            <ActionItem key={action.id}>
              <strong>{action.title}</strong>
              {action.description && <span>{action.description}</span>}
              {action.timestamp && <Timestamp>{action.timestamp}</Timestamp>}
            </ActionItem>
          ))}
        </>
      )}
    </SidebarContainer>
  );
};

export default SidebarLeft;
