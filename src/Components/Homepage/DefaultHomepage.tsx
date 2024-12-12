import { useSelector } from "react-redux";
import AddFriends from "./AddFriends";
import AllRecents from "./AllRecents";
import FriendsRecents from "./FriendsRecents";
import { useState } from "react";

export default function DefaultHomepage() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [viewFriends, setViewFriends] = useState(true);

  return (
    <div className="row bluebutton">
      <div className="col-2 d-md-none d-sm-none d-none d-lg-block">
        {(!currentUser || !viewFriends) && <h3>Ratings:</h3>}
        {currentUser && viewFriends && <h3>Friends Ratings:</h3>}
        {currentUser && (
          <button onClick={() => setViewFriends(!viewFriends)}>
            Switch View
          </button>
        )}
      </div>
      <div className="col">
        {(!currentUser || !viewFriends) && <AllRecents />}
        {currentUser && viewFriends && <FriendsRecents />}
      </div>
      <div className="col">
        <h3>Discover:</h3>
        <AddFriends />
      </div>
    </div>
  );
}
