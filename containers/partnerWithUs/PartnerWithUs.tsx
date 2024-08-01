"use client";

import "../Home/components/home.css";
import Header from "./component/header/Header";
import WhyUs from "./component/whyUs/WhyUs";

export default function PartnerWithUs() {
  return (
    <div className="home-container header_container">
      <div className="hero_frame">
        <Header />
      </div>
      <WhyUs />
    </div>
  );
}
