import React, { useEffect } from "react";

const Build = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1>Build</h1>
    </div>
  );
};

export default Build;
