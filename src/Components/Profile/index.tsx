import { Route, Routes } from "react-router";
import ProfileSidebar from "./ProfileSidebar";
import { useSelector } from "react-redux";
import Friends from "./Friends";
import Settings from "./Settings";
import Ratings from "./Ratings";

export default function Profile() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="d-flex p-3">
      <ProfileSidebar />
      <div className="flex-fill px-3">
        <Routes>
          <Route path="/" element={<h1>User</h1>} />
          <Route path="Ratings" element={<Ratings />} />
          <Route path="Friends" element={<Friends />} />
          <Route path="Settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}
