// src/components/ui/cards/NotificationCard.tsx
import React from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";

interface NotificationCardProps {
  message: string;
  type?: "info" | "warning" | "success";
  timestamp?: string;
}

const CardContainer = styled.div<{ type?: "info" | "warning" | "success" }>`
  background-color: ${({ type }) =>
    type === "success"
      ? colors.success + "20"
      : type === "warning"
      ? colors.warning + "20"
      : colors.info + "20"};
  border-left: 4px solid
    ${({ type }) =>
      type === "success"
        ? colors.success
        : type === "warning"
        ? colors.warning
        : colors.info};
  border-radius: 8px;
  padding: 12px;
  font-size: 14px;
  color: ${colors.black};
`;

const Timestamp = styled.div`
  font-size: 10px;
  color: ${colors.grayDark};
  margin-top: 4px;
`;

const NotificationCard: React.FC<NotificationCardProps> = ({
  message,
  type = "info",
  timestamp,
}) => (
  <CardContainer type={type}>
    {message}
    {timestamp && <Timestamp>{timestamp}</Timestamp>}
  </CardContainer>
);

export default NotificationCard;
