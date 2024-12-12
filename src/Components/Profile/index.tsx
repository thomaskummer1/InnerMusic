import { Route, Routes } from "react-router";
import ProfileSidebar from "./ProfileSidebar";
import { useSelector } from "react-redux";
import Friends from "./Friends";
import Settings from "./Settings";
import Ratings from "./Ratings";
import ProtectedRoute from "./ProtectedRoute";

export default function Profile() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="d-flex p-3">
      <ProfileSidebar />
      <div className="flex-fill px-3">
        <Routes>
          <Route path="/Ratings" element={<Ratings />} />
          <Route path="/Friends" element={<Friends />} />
          <Route
            path="/Settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
