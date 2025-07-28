import React, { useEffect } from "react";
import SectionFour from "./section-four";
import SectionOne from "./section-one";
import SectionTwo from "./section-two";
import SectionThree from "./section-three";
import Testimonials from "../../components/testimonials";
import Journey from "../../components/journey";
import { Helmet } from "react-helmet";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Funadiq Trip Planner</title>
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <main className="mb-12 w-full flex-grow">
          <SectionOne />
          <div className="relative grid gap-y-16 overflow-hidden bg-white">
            <SectionTwo />
            <SectionThree />
            <Testimonials />
            <Journey />
            <SectionFour />
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
