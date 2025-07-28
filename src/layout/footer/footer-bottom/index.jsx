import React from "react";

const FooterBottom = () => {
  const footerText = "© 2024 Funadiq Trip Planner. All Rights Reserved.";
  return (
    <div className="mx-auto mt-12 max-w-screen-xl border-t border-solid border-gray-300 py-7 text-center text-gray-600 md:text-start">
      <p>{footerText}</p>
    </div>
  );
};

export default FooterBottom;
