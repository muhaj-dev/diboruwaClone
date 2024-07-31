"use client";

import Header from "./component/header/Header";
import WhyUs from "./component/whyUs/WhyUs";

export default function PartnerWithUs() {
  return (
    <div className="home-container">
      <div className="hero_frame">
        <Header />
      </div>
      <WhyUs />
    </div>
  );
}
