import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import * as client from "../Homepage/client";

export default function Friends() {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { uid } = useParams();

  const fetchFriends = async () => {
    const newFriends = await client.getFriendsForUserID(uid);
    setFriends(newFriends);
  };
  const isFriend = (otherUser: any) => {
    const exists = friends.some(
      (friend: any) => friend.friend === otherUser._id
    );
    return exists;
  };
  useEffect(() => {
    console.log("running");
    const fetchUsers = async () => {
      const users = await client.getAllUsers();
      if (uid) {
        setUsers(users.filter((user: any) => user._id !== uid));
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
            {currentUser._id === uid && <th>Friend</th>}
            <th>Visit</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user: any) =>
              friends.find((friend: any) => friend.friend === user._id)
            )
            .map((user: any) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.firstName}</td>
                <td>{user.role}</td>
                {currentUser._id === uid && (
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
                            .createFriend({
                              user: currentUser,
                              friend: user,
                            })
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
                    onClick={() =>
                      navigate("/Profile/" + user._id + "/Ratings")
                    }
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
