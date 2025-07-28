import React from "react";
import ImageRight from "./image-right";
import ImageLeft from "./image-left";

const SectionTwo = () => {
  return (
    <>
      <div className="lazy-div" style={{ opacity: 1, transform: "none" }}>
        <section
          className="bg-background mb-12 mt-5 py-8 md:mt-10"
          id="product"
        >
          <div className="container m-8 mx-auto max-w-5xl">
            <h2 className="px-6 text-center text-3xl font-bold md:text-4xl lg:px-12 xl:text-5xl">
              Your <span className="text-[#C8A0FF]">AI-Powered </span>
              Trip
            </h2>
            <div className="mb-4 w-full">
              <div className="mx-auto h-1 bg-primary w-64 my-0 mb-10 rounded-t py-0 opacity-25"></div>
            </div>
            <ImageRight />
            <ImageLeft />
          </div>
        </section>
      </div>
    </>
  );
};

export default SectionTwo;
