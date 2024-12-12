import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as client from "./client";
import RatingCards from "../RatingCards";

export default function FriendsRecents() {
  interface Rating {
    user: string;
    // other properties
  }

  interface Friend {
    friend: string;
    // other properties
  }

  const [allRatings, setAllRatings] = useState<Rating[]>([]);
  const [filteredRatings, setFilteredRatings] = useState<Rating[]>([]);
  const [friends, setFriends] = useState<Friend[]>([]);
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(6);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const previous = () => {
    if (leftIndex - 6 >= 0 && rightIndex === leftIndex + 6) {
      setLeftIndex(leftIndex - 6);
      setRightIndex(rightIndex - 6);
    } else if (leftIndex - 6 >= 0) {
      setRightIndex(leftIndex);
      setLeftIndex(leftIndex - 6);
    } else {
      setLeftIndex(0);
      setRightIndex(6);
    }
  };
  const next = () => {
    if (rightIndex + 7 <= allRatings.length) {
      setLeftIndex(leftIndex + 6);
      setRightIndex(rightIndex + 6);
    } else if (rightIndex < allRatings.length) {
      setLeftIndex(leftIndex + 6);
      setRightIndex(allRatings.length);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      setAllRatings(await client.getAllRatings());
    };
    const fetchFriends = async () => {
      const friends = await client.getFriendsForUser(currentUser);
      setFriends(friends);
    };
    fetchData();
    if (currentUser) {
      fetchFriends();
    }
    setFilteredRatings(
      allRatings.filter((rating) =>
        friends.some((friend) => friend.friend === rating.user)
      )
    );
  }, [friends]);
  return (
    <div className="bluebutton">
      <RatingCards ratings={filteredRatings.slice(leftIndex, rightIndex)} />
      <button onClick={() => previous()}>Previous</button>
      <button className="float-right" onClick={() => next()}>
        Next
      </button>
    </div>
  );
}
