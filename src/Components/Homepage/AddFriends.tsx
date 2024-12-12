import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as client from "./client";
import { useNavigate } from "react-router";

export default function AddFriends() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
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
            <th>User Name</th>
            <th>Name</th>
            <th>Number of Albums Ranked</th>
            <th>Role</th>
            <th>Visit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.firstName}</td>
              <td>{user.role}</td>
              <td className="bluebutton">
                <button
                  onClick={() => navigate("/Profile/" + user._id + "/Ratings")}
                >
                  Go
                </button>
              </td>
              {/* <td className="wd-role">{number of ratings}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
