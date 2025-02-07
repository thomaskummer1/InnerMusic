import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import * as client from "./Homepage/client";

export default function RatingCards(ratings: any) {
  const maxChar = 17;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { uid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const [isHomeScreen, setIsHomeScreen] = useState(homescreen);
  // const [ratingList, setRatingList] = useState(ratings);

  // useEffect(() => {
  //   setRatingList(ratings);
  // }, [ratings]);

  // const handleDelete = async (ranking: { _id: any }) => {
  //   try {
  //     await client.deleteRating(ranking);
  //     // Update the local state after deletion
  //     setRatingList(
  //       ratingList.ratings.filter((rating: any) => rating._id !== ranking._id)
  //     );
  //   } catch (error) {
  //     console.error("Error deleting rating:", error);
  //   }
  // };
  return (
    <div className="row bluebutton">
      <div className="row row-cols-9 row-cols-md-5">
        {ratings.ratings.map((ranking: any) => (
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
                {!pathname.includes("Ratings") && (
                  <button
                    onClick={() => {
                      navigate("/Profile/" + ranking.user + "/Ratings");
                    }}
                  >
                    View User
                  </button>
                )}
                {pathname.includes("Ratings") && (
                  <button
                    onClick={() => {
                      navigate("/Search/" + ranking.artist);
                    }}
                  >
                    View Artist
                  </button>
                )}
                {pathname.includes("Ratings") &&
                  currentUser &&
                  uid &&
                  uid === currentUser._id && (
                    <button
                      style={{ background: "red", float: "right" }}
                      onClick={() => {
                        client
                          .deleteRating(ranking)
                          .then(() => navigate("/Search/" + ranking.artist));
                      }}
                    >
                      Delete
                    </button>
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
