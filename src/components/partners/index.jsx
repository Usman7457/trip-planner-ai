import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Partners = () => {
  const partners = [
    "img/booking-logo.webp",
    "img/hostelworld-logo.webp",
    "https://tripplanner.ai/landing/images/affiliates/freetour.svg",
    "https://tripplanner.ai/landing/images/affiliates/viator.svg",
    "https://tripplanner.ai/landing/images/affiliates/airalo.svg",
    "https://tripplanner.ai/landing/images/affiliates/holafly.svg",
    "https://tripplanner.ai/landing/images/affiliates/tiqets.svg",
    "https://tripplanner.ai/landing/images/affiliates/safety_wing.svg",
    "https://tripplanner.ai/landing/images/affiliates/getyourguide.svg",
  ];
  return (
    <>
      <div className="mx-auto mt-3 w-full max-w-screen-2xl md:mt-14">
        <h2 className="px-6 text-center text-3xl font-bold md:text-4xl lg:px-12 xl:text-5xl">
          Our Trusted Partners
        </h2>
      </div>
      <div className="mt-12">
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            perMove: 1,
            autoplay: true,
            interval: 2000,
            speed: 1500,
            pagination: false,
            arrows: false,
            drag: "free",
          }}
          className="main-carousel"
        >
          {partners.map((src, index) => (
            <SplideSlide key={index}>
              <div className="flex justify-center items-center mx-4">
                <img
                  src={src}
                  alt={`Partner ${index + 1}`}
                  className="w-[126px] h-[32px] object-contain"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default Partners;
