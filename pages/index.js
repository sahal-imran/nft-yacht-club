import React from "react";
import Hero from "../components/Home/Hero";
import Access from "../components/Access/Access";
import MintSchedule from "../components/MintSchedule/MintSchedule";
import Member from "../components/Home/Member";
import Team from "../components/Home/Team";
import Roadmap from "../components/Home/Roadmap";

function index() {
  return (
    <>
      <Hero />
      <Access />
      <MintSchedule />
      <Member />
      <Roadmap />
      <Team />
    </>
  );
}

export default index;
