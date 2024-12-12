import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";

export default function ProfileSidebar() {
  const { pathname } = useLocation();
  const { uid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [links, setLinks] = useState(["Ratings", "Friends"]);

  useEffect(() => {
    if (!currentUser || uid !== currentUser._id) {
      setLinks(["Ratings", "Friends"]);
    } else {
      setLinks(["Ratings", "Friends", "Settings"]);
    }
  }, [uid, currentUser]);
  return (
    <div>
      {links.map((link) => (
        <div id="" className="list-group fs-5 rounded-0">
          <Link
            to={link}
            id={`${pathname.includes(link) ? "active" : "inactive"}`}
            className="list-group-item border border-0"
          >
            {link}
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
}
