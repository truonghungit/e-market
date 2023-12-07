import { useState } from "react";

const Star = ({ onClick, stars, value }) => {
  return (
    <span
      onClick={onClick}
      className={`star star-${stars} ${value === stars ? "active" : ""}`}
    >
      {stars}
    </span>
  );
};

export const Rating = () => {
  const [value, setValue] = useState(0);

  return (
    <p className="stars selected">
      <span>
        <Star onClick={() => setValue(1)} stars={1} value={value} />
        <Star onClick={() => setValue(2)} stars={2} value={value} />
        <Star onClick={() => setValue(3)} stars={3} value={value} />
        <Star onClick={() => setValue(4)} stars={4} value={value} />
        <Star onClick={() => setValue(5)} stars={5} value={value} />
      </span>
    </p>
  );
};
