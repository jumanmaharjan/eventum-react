import React from "react";
import Banner from "./Section/Banner";
import HomeAbout from "./Section/HomeAbout";
import HomeJoin from "./Section/HomeJoin";
import HomeTeam from "./Section/HomeTeam";
import HomeSchedule from "./Section/HomeSchedule";
import HomeSponsors from "./Section/HomeSponsors";
import HomePricing from "./Section/HomePricing";
import HomeGallery from "./Section/HomeGallery";
import HomeContact from "./Section/HomeContact";
export default function home() {
  return (
    <>
      <Banner />
      <HomeAbout />
      <HomeJoin />
      <HomeTeam />
      <HomeSchedule />
      <HomeSponsors />
      <HomePricing />
      <HomeGallery />
      <HomeContact />
    </>
  );
}
