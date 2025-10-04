// src/components/ui/mini/MiniCalendar.tsx
import React from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";

export interface EventData {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  color?: string; // opcional para diferenciar eventos
}

interface MiniCalendarProps {
  events?: EventData[];
}

const CalendarContainer = styled.div`
  background-color: ${colors.white};
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  font-size: 12px;
  width: 100%; // não ultrapassar a sidebar
  box-sizing: border-box;
`;

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${colors.grayDark};
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

const Day = styled.div`
  width: 100%;
  padding-top: 100%; // cria quadrado responsivo
  position: relative;
  border-radius: 6px;
  background-color: transparent;
  color: ${colors.grayDark};
  font-size: 12px;
`;

const DayNumber = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
`;

const EventDot = styled.div<{ color?: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ color }) => color || colors.tealMedium};
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 2px;
`;

const MiniCalendar: React.FC<MiniCalendarProps> = ({ events = [] }) => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  // Para simulação, vamos pegar os 7 primeiros dias de outubro 2025
  const days = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <CalendarContainer>
      <WeekDays>
        {weekDays.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </WeekDays>
      <DaysGrid>
        {days.map((day) => {
          const dayStr = `2025-10-${day.toString().padStart(2, "0")}`;
          const dayEvents = events.filter((e) => e.date === dayStr);

          return (
            <Day key={day}>
              <DayNumber>{day}</DayNumber>
              {dayEvents.map((e) => (
                <EventDot key={e.id} color={e.color} />
              ))}
            </Day>
          );
        })}
      </DaysGrid>
    </CalendarContainer>
  );
};

export default MiniCalendar;
