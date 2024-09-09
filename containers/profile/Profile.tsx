"use client";
import { ProfileForm } from "./profile-form/ProfileForm";
import { ProfileSidebar } from "./profile-sidebar/ProfileSidebar";
import styled from "styled-components";

const PsPfContainer = styled.div`
  display: flex;
  width: min(93%, 1443px);
  height: 100%;
  margin: 6rem auto 0;
  padding-top: 2rem;
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    gap: 0;
    width: 100%;
  }

  @media (max-width: 1024px) {
    gap: 1rem;
    width: 93%;
  }
`;



const Profile = () => {
  return (
      <PsPfContainer>
        <ProfileSidebar />
        <ProfileForm />
      </PsPfContainer>
  );
};

export default Profile;
