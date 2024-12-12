import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as client from "../Homepage/client";
import { useNavigate, useParams } from "react-router";
import RatingCards from "../RatingCards";
export default function Ratings() {
  const [ratings, setRatings] = useState([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const navigate = useNavigate();
  const { uid } = useParams();

  useEffect(() => {
    const fetchRatings = async () => {
      // fetch ratings
      if (uid) {
        setRatings(await client.getRatingsForUserID(uid));
      }
    };
    fetchRatings();
  }, [uid]);
  return <RatingCards ratings={ratings} />;
}
