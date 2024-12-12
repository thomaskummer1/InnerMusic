import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function RatingCards(ratings: any) {
  const maxChar = 17;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // const [isHomeScreen, setIsHomeScreen] = useState(homescreen);

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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
