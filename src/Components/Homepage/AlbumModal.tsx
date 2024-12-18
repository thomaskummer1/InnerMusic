import { title } from "process";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useSelector } from "react-redux";

export default function AlbumModal(album: any) {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [rating, setRating] = useState({
    album: "",
    artist: "",
    img: "",
    rating: 0,
    comment: "",
    user: "",
  });
  const [fullReview, setFullReview] = useState("");

  let response: any;
  const addRating = async () => {
    if (currentUser && currentUser.role === "EXPERT") {
      const response = await client.getReviewByAlbum(album.album.name);
      if (response) {
        client.updateReview({
          review: fullReview,
          albumName: album.album.name,
        });
        return;
      }
      client.addReview({ review: fullReview, albumName: album.album.name });
      return;
    }
    const oldRating = await client.getRatingByUserAndAlbum(
      currentUser,
      album.album.name
    );
    if (oldRating) {
      // alert("You have already rated this album");
      response = await client.updateRating({ ...oldRating, ...rating });
    } else {
      try {
        if (rating.comment === "") {
          alert("Please add a comment");
          return;
        }
        response = await client.createRating(rating);
      } catch (error) {
        console.error(error);
      }
    }
    if (!response) return;
    navigate("/Profile/" + currentUser._id + "/Ratings");
  };
  return (
    <div
      id="inner-music-playlist-modal"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {album.album.name}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              style={{ color: "#28245e", backgroundColor: "white" }}
            ></button>
          </div>
          <div className="modal-body">
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  <img
                    src={album.album.images[0].url}
                    width={200}
                    height={200}
                  />
                  <h5>Artist: {album.album.artists[0].name}</h5>
                  <h5>Release Date: {album.album.release_date}</h5>
                  <h5>Tracks: {album.album.total_tracks}</h5>
                  <h5>
                    <Link to={album.album.external_urls.spotify}>
                      Spotify Link
                    </Link>
                  </h5>
                </div>
                {((currentUser && currentUser.role === "USER") ||
                  !currentUser) && (
                  <div className="col">
                    <input
                      type="number"
                      className="form-control mb-4"
                      placeholder="Album Rating Out Of 10"
                      min="1"
                      max="10"
                      onChange={(e) =>
                        setRating({
                          ...rating,
                          album: album.album.name,
                          artist: album.album.artists[0].name,
                          img: album.album.images[0].url,
                          rating: Number(e.target.value),
                          user: currentUser._id,
                        })
                      }
                    />
                    <textarea
                      className="form-control"
                      placeholder="Comments"
                      onChange={(e) =>
                        setRating({
                          ...rating,
                          album: album.album.name,
                          artist: album.album.artists[0].name,
                          img: album.album.images[0].url,
                          comment: e.target.value,
                          user: currentUser._id,
                        })
                      }
                    />
                    {!currentUser && (
                      <p className="text-danger">*Sign in to add rating</p>
                    )}
                  </div>
                )}
                {currentUser && currentUser.role === "EXPERT" && (
                  <div className="col">
                    <textarea
                      className="form-control"
                      placeholder="Full Review"
                      onChange={(e) => setFullReview(e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>
            {/* <input
              className="form-control"
              defaultValue="name"
              placeholder="Module Name"
              //   onChange={(e) => setModuleName(e.target.value)}
            /> */}
            {/* {JSON.stringify(album)} */}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              data-bs-dismiss="modal"
              onClick={() => navigate("/details/" + album.album.name)}
            >
              See More{" "}
            </button>
            {currentUser && (
              <button
                //   onClick={addModule}
                type="button"
                data-bs-dismiss="modal"
                onClick={addRating}
              >
                Add Rating{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
