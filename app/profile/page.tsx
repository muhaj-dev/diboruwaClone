import Profile from "@/containers/profile/Profile";
import "../../containers/profile/profile.css"
export const metadata = {
  title: "Profile",
};

const page = () => {
  return (
    <div className="profile_page">
      <Profile />
    </div>
  );
};

export default page;
