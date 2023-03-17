import React from "react";

const Shimmer = () => {
  return (
    <div className="res-list" data-testid="shimmer">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer"></div>
        ))}
    </div>
  );
};

export default Shimmer;
