import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as client from "./client";
import { useNavigate } from "react-router";

export default function AddFriends() {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchFriends = async () => {
    const newFriends = await client.getFriendsForUser(currentUser);
    setFriends(newFriends);
  };
  const isFriend = (otherUser: any) => {
    const exists = friends.some(
      (friend: any) => friend.friend === otherUser._id
    );
    return exists;
  };
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await client.getAllUsers();
      if (currentUser) {
        setUsers(users.filter((user: any) => user._id !== currentUser._id));
      } else {
        setUsers(users);
      }
    };
    fetchUsers();
    if (currentUser) {
      fetchFriends();
    }
  }, []);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Name</th>
            <th>Role</th>
            {currentUser && <th>Friend</th>}
            <th>Visit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.role}</td>
              {currentUser && (
                <td className="bluebutton">
                  {isFriend(user) && (
                    <button
                      onClick={() =>
                        client
                          .deleteFriend(
                            friends.find(
                              (friend: any) => friend.friend === user._id
                            )
                          )
                          .then(() => fetchFriends())
                      }
                    >
                      Remove
                    </button>
                  )}
                  {!isFriend(user) && (
                    <button
                      onClick={() =>
                        client
                          .createFriend({ user: currentUser, friend: user })
                          .then(() => fetchFriends())
                      }
                    >
                      Add
                    </button>
                  )}
                </td>
              )}
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
