"use client";

import "../Home/components/home.css";
import BarbingService from "./component/barbingservices/BarbingService";
import DeliveryService from "./component/deliveryservice/DeliveryService";
import Header from "./component/header/Header";
import LaundryService from "./component/laundryservice/LaundryService";
import WhyUs from "./component/whyUs/WhyUs";

export default function PartnerWithUs() {
  return (
    <div className="home-container header_container">
      <div className="hero_frame">
        <Header />
      </div>
      <WhyUs />
      <DeliveryService />
      <BarbingService />
      <LaundryService />
    </div>
  );
}
