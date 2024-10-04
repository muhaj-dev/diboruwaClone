import React, { useEffect, useState } from "react";
import "./other-laundry.css";
import Link from "next/link";
import {
  MobileOtherLaundry,
  OtherLaundryType,
} from "@/constants";

export const MobileOtherLaundryRoom: React.FC = () => {
  return (
    <div className="Mobileother_Moving_container">
      <div className="Mobileother_Moving_cards">
        {MobileOtherLaundry.map((item: OtherLaundryType) => (
          <div key={item._id} className="Mobileother_Moving_card">
            <img
              className="Mobileother_Moving_img"
              src={item.image}
              alt={item.tag}
            />
            <div className="Mobileother_Moving_card-details">
              <div className="Mobileother_Moving_text-details">
                <div className="Mobileother_Moving_title_rating_container">
                  <p className="Mobileother_Moving_small-title">
                    {item.smallTitle}
                  </p>
                  <div className="Mobileother_Moving_rating-container">
                    {item.starIcon &&
                      React.createElement(item.starIcon, {
                        className: "Mobileother_Moving_rating_star_icon",
                      })}
                    <small className="Mobileother_Moving_rating_num">
                      {item.rating}
                    </small>
                    <small className="Mobileother_Moving_reviews">
                      {item.reviewsText} {item.reviewsNum}
                    </small>
                  </div>
                </div>
                <div className="Mobileother_Moving_location_time_container">
                  <div className="Mobileother_Moving_location">
                    {item.locationIcon &&
                      React.createElement(item.locationIcon, {
                        className: "Mobileother_Moving_top_rated_loction_icon",
                      })}
                    <div className="Mobileother_Moving_location-text">
                      {item.locationText}
                    </div>
                  </div>
                  <div className="Mobileother_Moving_time_dot"></div>
                  <div className="Mobileother_Moving_time">{item.timeNum}</div>
                  <div className="Mobileother_Moving_time_dot"></div>
                  <div
                    className={`Mobileother_Moving_OpeningTime 
                                ${
                                  item.openTime?.toLowerCase() === "open"
                                    ? "open"
                                    : "closed"
                                }`}
                  >
                    {item.openTime}
                  </div>
                </div>
              </div>

              <Link
                href={`/restaurant/${item._id}`}
                className="Mobileother_Moving_visit-link"
              >
                <p className="Mobileother_Moving_visit-link_text">visit</p>
                {item.arrowIcon &&
                  React.createElement(item.arrowIcon, {
                    className: "Mobileother_Moving_visit_link_icon",
                  })}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
