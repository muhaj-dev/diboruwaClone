"use client"
import Profile from "@/containers/profile/Profile";
import "../../containers/profile/profile.css";
import styled from "styled-components";

const ProfilePage = styled.div`
  background: var(--Background-color, #f8f8f8);
`;
export const metadata = {
  title: "Profile",
};

const page = () => {
  return (
    <ProfilePage>
      <Profile />
    </ProfilePage>
  );
};

export default page;
