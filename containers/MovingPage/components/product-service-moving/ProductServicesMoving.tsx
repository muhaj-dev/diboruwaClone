"use client";
import "./product-service-laundrying.css";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState } from "react";
import {
  ProductServiceLaundryData,
  ProductServiceLaundryType,
} from "@/constants";
import { RiSearch2Line } from "react-icons/ri";
import { FaRegStar, FaStar  } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

const MobileView: React.FC = () => {
 const [selectedVendor, setSelectedVendor] = useState<
   ProductServiceLaundryType | undefined
 >(ProductServiceLaundryData[0]);

  return (
    <div className="Movingmobile-display">
      <div
        className="Movingmob"
        style={{
          backgroundImage: `url(${selectedVendor?.bigImg})`,
          backgroundSize: "140% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="Movingmob_overlay">
          <div className="Movingmob-cont">
            <div className="Movingtext-container">
              <div className="Movingdescription">
                Order from your favorite restaurant and get your meal delivered
                to you in minutes.
              </div>
            </div>
          </div>
        </div>
        <div className="MovingMobilesearch_filter_box">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search here"
            className="MovingMobilesearch_filter_input"
          />
          <RiSearch2Line className="MovingMobilesearch_filter_icon" />
        </div>
      </div>
      <div className="Mobile_TopMoving_container">
        <div className="MobileTopMoving_Frame_Container">
          <p className="MobileTopMoving_Text">Top Laundry Near you.</p>
          <div className="Mobile_TopMoving_Images">
            <img
              src="/images/Rectangle 291.png"
              alt="Top Moving Images"
              className="Mobile_TopMoving_Image"
            />
            <img
              src="/images/Rectangle 293 (2).png"
              alt="Top Moving Images"
              className="Mobile_TopMoving_Image"
            />
            <img
              src="/images/Rectangle 294.png"
              alt="Top Moving Images"
              className="Mobile_TopMoving_Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductServicesMoving: React.FC = () => {
  const [selectedVendor, setSelectedVendor] = useState<
    ProductServiceLaundryType | undefined
  >(ProductServiceLaundryData[0]);

  return (
    <>
      <div className="Moving_hero_cont">
        <div className="Moving_hero_prod">
          <div className="Moving_prod">
            <div className="Moving_prod-cont">
              <div className="Moving_tags-container">
                {ProductServiceLaundryData.map(
                  (item: ProductServiceLaundryType) => (
                    <button
                      type="button"
                      key={item._id}
                      className={`Moving_tag-text ${
                        item === selectedVendor ? "Moving_tag-text-active" : ""
                      }`}
                      onClick={() => setSelectedVendor(item)}
                    >
                      {item.tag}
                    </button>
                  )
                )}
              </div>
              <div className="Moving_text-container">
                <p className="Moving_highlight">
                  Experience the Ultimate in
                </p>
                <p className="Moving_highlight2">
                  cleanliness and convenience
                </p>
                <div className="Moving_description">
                  Let us handle the dirty work while you enjoy life's fine
                  moment
                </div>
                <button type="button" className="Moving_get-started-btn">
                  Book Now
                  <FaArrowRightLong className="Moving_get-started-btn-icon" />
                </button>
              </div>
            </div>
            {selectedVendor && (
              <div className="Moving_Image">
                <img src={selectedVendor.bigImg} alt={selectedVendor.tag} />
                <div className="Moving_overlay">
                  <div className="Moving_footer-text">{selectedVendor.foodText}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {selectedVendor && (
          <div className="MovingHero_map">
            <img
              className="MovingMap"
              src={selectedVendor.map}
              alt={selectedVendor.tag}
            />
            <div className="MovingHero_Name">
              <div className="MovingPro-name">
                <img
                  className="MovingPro-img"
                  src={selectedVendor.foodImg}
                  alt={selectedVendor.tag}
                />
                <div className="NameAndStarRating">
                  <p className="MovingName">Christopher Laundry Room</p>
                  <div className="MovingRating">
                    <div className="Moving_RatingStars">
                      <FaStar className="Moving_RatingStar" />
                      <FaStar className="Moving_RatingStar" />
                      <FaStar className="Moving_RatingStar" />
                      <FaStar className="RatingStar" />
                      <FaRegStar className="Moving_RatingStarReg" />
                    </div>
                    <p className="Moving_RatingNum">4.5</p>
                  </div>
                </div>
              </div>
              <div className="MovingLocationAndTime">
                <p className="MovingTimeD">17 - Mon</p>
                <p className="MovingTimeD">2pm - Wed</p>
                <div className="MovingLocation">
                  <CiLocationOn className="MovingLocationIcon" />
                  <p className="MovingLocationText">Lagos</p>
                </div>
              </div>
              <div className="MovingVisitLink">
                <Link
                  href={`/laundry/${selectedVendor._id}`}
                  className="Moving_visit-link"
                >
                  <p className="Moving_visit-link_text">visit</p>
                  <FaArrowRightLong className="Moving_visit_link_icon" />
                </Link>
              </div>
            </div>
          </div>
        )}
        <MobileView />
      </div>
    </>
  );
};
