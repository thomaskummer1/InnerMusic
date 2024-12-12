import { useEffect, useState } from "react";
import * as client from "./client";
import RatingCards from "../RatingCards";

export default function AllRecents() {
  const [allRatings, setAllRatings] = useState([]);
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(6);

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
    fetchData();
  }, []);
  return (
    <div className="bluebutton">
      <RatingCards ratings={allRatings.slice(leftIndex, rightIndex)} />
      <button onClick={() => previous()}>Previous</button>
      <button className="float-right" onClick={() => next()}>
        Next
      </button>
    </div>
  );
}
