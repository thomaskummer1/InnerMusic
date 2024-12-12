import { useSelector } from "react-redux";
import AddFriends from "./AddFriends";
import AllRecents from "./AllRecents";
import FriendsRecents from "./FriendsRecents";

export default function DefaultHomepage() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="row">
      <div className="col-2 d-md-none d-sm-none d-none d-lg-block">
        {!currentUser && <h3>New Ratings:</h3>}
        {currentUser && <h3>New Friends Ratings:</h3>}
      </div>
      <div className="col">
        {!currentUser && <AllRecents />}
        {currentUser && <FriendsRecents />}
      </div>
      <div className="col">
        <h3>Discover:</h3>
        <AddFriends />
      </div>
    </div>
  );
}
