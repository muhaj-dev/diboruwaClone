"use client";
import { ProfileForm } from "./profile-form/ProfileForm";
import { ProfileSidebar } from "./profile-sidebar/ProfileSidebar";
import "./profile.css"
const Profile = () => {
  return (
    <div className="ps_pf_container">
      <ProfileSidebar />
      <ProfileForm />
    </div>
  );
};

export default Profile;
