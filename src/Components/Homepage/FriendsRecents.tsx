import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as client from "./client";

export default function FriendsRecents() {
  const [users, setUsers] = useState([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await client.getAllUsers();
      setUsers(users);
    };
    fetchUsers();
    if (currentUser) {
      setUsers(users.filter((user: any) => user._id === currentUser._id));
    }
  }, []);
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap"></td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
