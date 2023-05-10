import React from "react";
import HeroBanner from "./HeroBanner";
import Trending from "./Trending";
import Latest from './Latest';
import Popular from "./Popular";
import TopRated from './TopRated'

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Trending />
      <Latest />
      <Popular />
      <TopRated />
    </div>
  );
}
