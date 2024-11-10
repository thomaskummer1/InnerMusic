import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function ProfileSidebar() {
  const { pathname } = useLocation();
  const links = ["Ratings", "Friends", "Settings"];
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
