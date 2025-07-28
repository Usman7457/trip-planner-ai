import React from "react";
import { Link } from "react-router-dom";

const FooterTop = () => {
  const box = [
    {
      boxTitle: "Legal",
      URLText1: "Terms and Conditions",
      URL1: "/terms",
      URLText2: "Privacy Policy",
      URL2: "/privacy",
    },
    {
      boxTitle: "Support",
      URLText1: "Contact Us",
      URL1: "/contact-us",
      URLText2: "Disclaimer",
      URL2: "/disclaimer",
    },
    {
      boxTitle: "Itineraries",
      URLText1: "Community Trips",
      URL1: "/community-trips",
      URLText2: "Sign In/Up",
      URL2: "/login",
    },
  ];
  const footerHeading = "Funadiq Trip Planner";
  const imageUrl = "img/logo.webp";
  const footerDescription =
    "Turn your next trip into a hassle-free experience with Funadiq Trip Planner.";
  return (
    <div className="mx-auto flex max-w-screen-xl flex-wrap justify-center gap-12 md:justify-between">
      <div>
        <div className="flex justify-center gap-3 md:justify-start">
          <img
            alt="logo"
            loading="lazy"
            width="20"
            height="20"
            decoding="async"
            data-nimg="1"
            className="h-9 w-9 items-center"
            style={{ color: "transparent" }}
            src={imageUrl}
          />
          <h1 className="text-2xl/10 font-medium">{footerHeading}</h1>
        </div>
        <div className="mt-4 flex flex-col gap-5">
          <p className="max-w-[23rem] text-center text-gray-600 md:text-start">
            {footerDescription}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12 xl:grid-cols-3">
        {box.map((item, index) => (
          <ul className="flex flex-col gap-3" key={index}>
            <li className="font-medium text-2xl">{item.boxTitle}</li>
            <li>
              <Link className="hover:underline" to={item.URL1}>
                {item.URLText1}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to={item.URL2}>
                {item.URLText2}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default FooterTop;
