import Link from "next/link";
import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { LiaAngleRightSolid } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineCube } from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import { LiaAwardSolid } from "react-icons/lia";
import { HiOutlineEnvelope } from "react-icons/hi2";
import "./profile-sidebar.css";

interface MenuItem {
  icon: JSX.Element;
  label: string;
  href: string;
}

export const ProfileSidebar: React.FC = () => {
  
  const profileInfo = {
    icon: <IoPersonOutline className="profile_sidebar_pics_icon" />,
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
  
  const [activeItem, setActiveItem] = useState<string>(menuItems[0].label);
  
  const handleItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <div className="profile_sidebar_container">
      <div className="profile_sidebar_profile">
        <div className="profile_sidebar_pics">{profileInfo.icon}</div>
        <div className="profile_sidebar_name">
          <p className="profile_name">{profileInfo.name}</p>
          <p className="profile_email">{profileInfo.email}</p>
        </div>
      </div>
      <hr className="sidebar_line" />
      <div className="profile_sidebar_sidemenu">
        <ul className="profile_sidebar_list">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`profile_sidebar_item ${
                activeItem === item.label ? "active" : ""
              }`}
              onClick={() => handleItemClick(item.label)}
            >
              <Link href={item.href} className="profile_sidebar_link">
                <div className="profile_sidebar_lefticon">{item.icon}</div>
                <p className="profile_sidebar_link_name">{item.label}</p>
              </Link>
              <LiaAngleRightSolid
                className={`profile_sidebar_righticon ${
                  activeItem === item.label ? "active" : ""
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
