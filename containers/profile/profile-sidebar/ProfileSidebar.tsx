import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { LiaAngleRightSolid } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineCube } from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import { LiaAwardSolid } from "react-icons/lia";
import { HiOutlineEnvelope } from "react-icons/hi2";

interface MenuItem {
  icon: JSX.Element;
  label: string;
  href: string;
}

const ProfileSidebarContainer = styled.div`
  width: 30%;
  height: 100vh;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
`;

const ProfileSidebarProfile = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 1rem 1.4rem 0.5rem;
`;

const ProfileSidebarPics = styled.div`
  width: 49.465px;
  height: 49.465px;
  flex-shrink: 0;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
`;

const ProfileIcon = styled(IoPersonOutline)`
  font-size: 24px;
  color: #27a124;
`;

const ProfileSidebarName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.7rem;
`;

const ProfileName = styled.p`
  color: #2a2a2a;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`;

const ProfileEmail = styled.p`
  color: #2a2a2a;
  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
`;

const SidebarLine = styled.hr`
  width: 88%;
  height: 1px;
  background: #d2d2d2;
  margin-inline: auto;
`;

const ProfileSidebarSidemenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 92%;
  gap: 20px;
  margin-inline: auto;
`;

const ProfileSidebarList = styled.ul`
  display: flex;
  padding: 10px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-inline: auto;
`;

const ProfileSidebarItem = styled.li<{ active: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
  border-radius: 8px;
  margin-inline: auto;
  background-color: ${(props) =>
    props.active ? "rgba(233, 233, 233, 0.25)" : "transparent"};
  &:hover {
    background: rgba(233, 233, 233, 0.25);
  }
`;

const ProfileSidebarLink = styled(Link)<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${(props) => (props.active ? "#27a124" : "#2a2a2a")};
`;

const ProfileSidebarLeftIcon = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const ProfileSidebarLinkName = styled.p<{ active: boolean }>`
  color: ${(props) => (props.active ? "#27a124" : "#2a2a2a")};
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

const ProfileSidebarRightIcon = styled(LiaAngleRightSolid)<{ active: boolean }>`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: ${(props) => (props.active ? "#27a124" : "#2a2a2a")};
  cursor: pointer;
`;

export const ProfileSidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Profile Settings");

  const profileInfo = {
    icon: <ProfileIcon  />,
    name: "Kelivin Chikezie",
    email: "chikeziekelivin@gmial.com",
  };

  const menuItems: MenuItem[] = [
    {
      icon: <BsPersonCircle />,
      label: "Profile Settings",
      href: "#",
    },

    {
      icon: <HiOutlineCube />,
      label: "Orders",
      href: "#",
    },

    {
      icon: <IoIosHeartEmpty />,
      label: "Favorite",
      href: "#",
    },

    {
      icon: <LiaAwardSolid />,
      label: "Subscriptions",
      href: "#",
    },

    {
      icon: <HiOutlineEnvelope />,
      label: "Messages",
      href: "#",
    },
  ];

  const handleItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <ProfileSidebarContainer>
      <ProfileSidebarProfile>
        <ProfileSidebarPics>{profileInfo.icon}</ProfileSidebarPics>
        <ProfileSidebarName>
          <ProfileName>{profileInfo.name}</ProfileName>
          <ProfileEmail>{profileInfo.email}</ProfileEmail>
        </ProfileSidebarName>
      </ProfileSidebarProfile>
      <SidebarLine />
      <ProfileSidebarSidemenu>
        <ProfileSidebarList>
          {menuItems.map((item, index) => (
            <ProfileSidebarItem
              key={index}
              active={activeItem === item.label}
              onClick={() => handleItemClick(item.label)}
            >
              <ProfileSidebarLink
                href={item.href}
                active={activeItem === item.label}
              >
                <ProfileSidebarLeftIcon>{item.icon}</ProfileSidebarLeftIcon>
                <ProfileSidebarLinkName active={activeItem === item.label}>
                  {item.label}
                </ProfileSidebarLinkName>
              </ProfileSidebarLink>
              <ProfileSidebarRightIcon active={activeItem === item.label} />
            </ProfileSidebarItem>
          ))}
        </ProfileSidebarList>
      </ProfileSidebarSidemenu>
    </ProfileSidebarContainer>
  );
};
