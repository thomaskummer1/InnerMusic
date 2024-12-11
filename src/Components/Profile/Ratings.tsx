import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as client from "../Homepage/client";
export default function Ratings() {
  const [ratings, setRatings] = useState([]);
  const maxChar = 17;
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  useEffect(() => {
    const fetchRatings = async () => {
      // fetch ratings
      setRatings(await client.getRatingsForUser(currentUser));
    };
    fetchRatings();
  }, []);
  return (
    <div className="row">
      <div className="row row-cols-1 row-cols-md-5">
        {ratings.map((ranking: any) => (
          <div className="col" style={{ width: 250 }}>
            <div className="card rounded-3 overflow-hidden">
              <img src={ranking.img} width="100%" height={200} />
              <div className="card-body">
                <h6 className="card-title">
                  {ranking.album.length > maxChar
                    ? ranking.album.substring(0, maxChar)
                    : ranking.album}
                </h6>
                <h6 className="card-title">Rating: {ranking.rating}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
