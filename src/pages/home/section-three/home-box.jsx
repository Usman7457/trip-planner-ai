import React from "react";

const HomeBox = () => {
  const boxes = [
    {
      imageUl: "img/map.webp",
      heading: "Optimal Route Planning",
      paragraph:
        "Our AI algorithms analyze your preferences to craft the most efficient route, saving you time and effort.",
    },
    {
      imageUl: "img/story.webp",
      heading: "Personalize Your Adventure",
      paragraph:
        "Shape your journey by freely adding, editing, or deleting activities from your itinerary.",
    },
    {
      imageUl: "img/food.webp",
      heading: "Local Cuisine Recommendations",
      paragraph:
        "Discover local cuisines and hidden gems recommended by our AI, tailored to your taste buds.",
    },
  ];
  return (
    <>
      <div className="mx-auto mt-10 grid h-full max-w-6xl grid-cols-1 flex-wrap items-start gap-5 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="undefined w-full flex-1 rounded-xl border border-solid border-gray-200 p-6 last:md:col-span-2 last:lg:col-span-1"
          >
            <div className="flex items-center gap-3">
              <img
                alt=""
                loading="lazy"
                width="300"
                height="300"
                decoding="async"
                data-nimg="1"
                className="h-[3rem] w-auto md:h-[5rem]"
                style={{ color: "transparent" }}
                src={box.imageUl}
              />
              <p className="leading-2 max-w-[12rem] text-lg font-bold text-gray-900 md:text-xl lg:text-2xl">
                {box.heading}
              </p>
            </div>
            <p className="mt-2 text-base text-gray-500 md:text-lg">
              {box.paragraph}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeBox;
