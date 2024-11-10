import { useSelector } from "react-redux";

export default function Ratings() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const maxChar = 17;
  return (
    <div className="row">
      <div className="row row-cols-1 row-cols-md-5">
        {currentUser.ratings.map((ranking: any) => (
          <div className="col" style={{ width: 250 }}>
            <div className="card rounded-3 overflow-hidden">
              <img src={ranking.img} width="100%" height={200} />
              <div className="card-body">
                <h6 className="card-title">
                  {ranking.title.length > maxChar
                    ? ranking.title.substring(0, maxChar)
                    : ranking.title}
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
