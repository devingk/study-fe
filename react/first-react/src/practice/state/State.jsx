import { useState } from "react";
import { sculptureList } from "./data";

export default function State() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handlePrevious() {
    setIndex((current) => (current - 1 < 0 ? 0 : current - 1));
  }

  function handleNext() {
    setIndex((current) =>
      current + 1 >= sculptureList.length
        ? sculptureList.length - 1
        : current + 1
    );
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <h1>State Practice</h1>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <div>
        <button onClick={handleMoreClick}>
          {showMore ? "Hide" : "Show"} details
        </button>
      </div>
      <img src={sculpture.url} alt={sculpture.description} />
    </>
  );
}
