// src/components/layout/navbars/NavBar2.tsx
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import { useNavigate } from "react-router-dom";
import profileImg from "../../../assets/icons/profile.png"; // ajuste se necessário

const NavBar = styled.nav`
  height: 64px;
  background-color: ${colors.tealDark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  color: ${colors.white};
  position: relative;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CenterSection = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;
  li {
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    &:hover {
      color: ${colors.tealLight};
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
`;

const IconButton = styled.button<{ size?: string }>`
  background: none;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  font-size: ${(props) => props.size || "20px"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const DropDown = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 64px;
  left: 0;
  background-color: ${colors.white};
  color: ${colors.black};
  min-width: 200px;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: ${(props) => (props.visible ? "block" : "none")};
  z-index: 1000;
`;

const DropDownRight = styled(DropDown)`
  right: 0;
  left: auto;
`;

const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const XPContainer = styled.div`
  background-color: ${colors.orangeAccent};
  border-radius: 12px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
`;

const SearchContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input<{ visible: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 32px; /* abre à esquerda da lupa */
  width: ${(props) => (props.visible ? "180px" : "0")};
  padding: ${(props) => (props.visible ? "4px 12px" : "0")};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: all 0.2s ease;
  border-radius: 8px;
  border: 1px solid ${colors.white};
  background-color: ${colors.tealMedium};
  color: ${colors.white};
  outline: none;
`;

const NavBar2: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  // Fecha dropdowns ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <NavBar>
      {/* Left */}
      <LeftSection ref={menuRef}>
        <IconButton onClick={() => setMenuOpen(!menuOpen)}>☰</IconButton>
        <DropDown visible={menuOpen}>
          <p>Menu Option 1</p>
          <p>Menu Option 2</p>
        </DropDown>
      </LeftSection>

      {/* Center */}
      <CenterSection>
        <li>Home</li>
        <li>Dashboard</li>
        <li>Pricing</li>
        <li>News</li>
      </CenterSection>

      {/* Right */}
      <RightSection ref={profileRef}>
        <SearchContainer>
          <IconButton onClick={() => setSearchOpen(!searchOpen)}>🔍</IconButton>
          <SearchInput visible={searchOpen} placeholder="Search..." />
        </SearchContainer>

        <IconButton onClick={() => navigate("/settings")}>⚙️</IconButton>

        <ProfileIcon src={profileImg} alt="Profile" onClick={() => navigate("/profile")} />
        <IconButton onClick={() => setProfileOpen(!profileOpen)}>▼</IconButton>
        <DropDownRight visible={profileOpen}>
          <p>Profile Option 1</p>
          <p>Profile Option 2</p>
        </DropDownRight>

        <XPContainer>XP 120</XPContainer>
      </RightSection>
    </NavBar>
  );
};

export default NavBar2;
