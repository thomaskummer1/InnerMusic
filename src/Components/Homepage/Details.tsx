import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as client from "./client";

export default function Details() {
  const { album } = useParams();
  const [ratings, setRatings] = useState([]);
  const [review, setReview] = useState<{ review: string }>({ review: "" });

  useEffect(() => {
    const fetchRatings = async () => {
      setRatings(await client.getRatingsByAlbum(album));
    };
    fetchRatings();
  }, [album]);

  useEffect(() => {
    const fetchReviews = async () => {
      setReview(await client.getReviewByAlbum(album));
    };
    fetchReviews();
    console.log(review);
  }, [album]);

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">User Ratings for {album}</h2>
      <div className="row g-4">
        {ratings.map((rating: any) => (
          <div key={rating._id} className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Rating: {rating.rating}</h5>
                <p className="card-text">Comment: {rating.comment}</p>
              </div>
              {/* <div className="card-footer bg-transparent">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(rating)}
              >
                Delete
              </button>
            </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className="container my-5">
        <h2 className="mb-4 text-center fw-bold">Experts Say:</h2>
        <div className="card shadow-sm">
          <div className="card-body">
            <p className="card-text fs-5 fst-italic text-muted">
              "{review.review}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
