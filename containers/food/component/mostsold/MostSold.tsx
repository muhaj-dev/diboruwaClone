import React from "react";
import "./mostsold.css";
import Link from "next/link";
import { IoIosHeartEmpty, IoIosHeart, IoMdStopwatch } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { MdFavoriteBorder, MdOutlineTimer } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

const food = [
  {
    link: "/",
    img: "/images/dish.png",
  },
  {
    link: "/",
    img: "/images/dish.png",
  },
  {
    link: "/",
    img: "/images/dish.png",
  },
  {
    link: "/",
    img: "/images/dish.png",
  },
  {
    link: "/",
    img: "/images/dish.png",
  },
];
const MostSold = () => {
  return (
    <section className="mostsold_container">
      <div className="mostsold-frame">
        <p className="mostsold_title">Most Sold</p>
        <div className="mostsold-cards">
          <div className="mostsold-card">
            <div className="mostsold-card_food-img">
              <img
                src="/images/Rectangle 248 (10).png"
                alt=""
                className="mostsold-card_img"
              />
              <div className="mostsold-card_img-iconcontainer">
                <MdFavoriteBorder className="mostsold-card_img-icon" />
              </div>
            </div>
            <div className="mostsold-card_content">
            <div className="mostsold-card_context">
              <div className="mostsold-card_context-top">
                <small className="mostsold-card_title">Fried Rice</small>
                <span className="mostsold-card_dot"></span>
                <FaStar className="mostsold-card_star" />
                <small className="mostsold-card_rating">4.5</small>
              </div>
              <div className="mostsold-card_timer">
                <IoMdStopwatch className="mostsold-card_timer-icon" />
                <span className="mostsold-card_timer-text">30mins</span>
              </div>
            </div>
            <small className="mostsold-card_remender">
              10 Liters remaining
            </small>
            <div className="mostsold-card_prize">
              <p className="mostsold-card_prize-text">$40</p>
              <a href="/cart" className="mostsold-card_prize-link">
                <FaBagShopping className="mostsold-card_prize-icon" />
              </a>
            </div>
          </div>
              </div>
          <div className="mostsold-card">
            <div className="mostsold-card_food-img">
              <img
                src="/images/Rectangle 248 (10).png"
                alt=""
                className="mostsold-card_img"
              />
              <MdFavoriteBorder className="mostsold-card_img-icon" />
            </div>
            <div className="mostsold-card_context">
              <div className="mostsold-card_context">
                <small className="mostsold-card_title">Fried Rice</small>
                <span className="mostsold-card_dot"></span>
                <FaStar className="mostsold-card_star" />
                <small className="mostsold-card_rating">4.5</small>
              </div>
              <div className="mostsold-card_timer">
                <IoMdStopwatch className="mostsold-card_timer-icon" />
                <span className="mostsold-card_timer-text">30mins</span>
              </div>
            </div>
            <small className="mostsold-card_remender">
              10 Liters remaining
            </small>
            <div className="mostsold-card_prize">
              <p className="mostsold-card_prize-text">$40</p>
              <a href="/cart" className="mostsold-card_prize-link">
                <FaBagShopping className="mostsold-card_prize-icon" />
              </a>
            </div>
          </div>
          <div className="mostsold-card">
            <div className="mostsold-card_food-img">
              <img
                src="/images/Rectangle 248 (10).png"
                alt=""
                className="mostsold-card_img"
              />
              <MdFavoriteBorder className="mostsold-card_img-icon" />
            </div>
            <div className="mostsold-card_context">
              <div className="mostsold-card_context">
                <small className="mostsold-card_title">Fried Rice</small>
                <span className="mostsold-card_dot"></span>
                <FaStar className="mostsold-card_star" />
                <small className="mostsold-card_rating">4.5</small>
              </div>
              <div className="mostsold-card_timer">
                <IoMdStopwatch className="mostsold-card_timer-icon" />
                <span className="mostsold-card_timer-text">30mins</span>
              </div>
            </div>
            <small className="mostsold-card_remender">
              10 Liters remaining
            </small>
            <div className="mostsold-card_prize">
              <p className="mostsold-card_prize-text">$40</p>
              <a href="/cart" className="mostsold-card_prize-link">
                <FaBagShopping className="mostsold-card_prize-icon" />
              </a>
            </div>
          </div>
          <div className="mostsold-card">
            <div className="mostsold-card_food-img">
              <img
                src="/images/Rectangle 248 (10).png"
                alt=""
                className="mostsold-card_img"
              />
              <MdFavoriteBorder className="mostsold-card_img-icon" />
            </div>
            <div className="mostsold-card_context">
              <div className="mostsold-card_context">
                <small className="mostsold-card_title">Fried Rice</small>
                <span className="mostsold-card_dot"></span>
                <FaStar className="mostsold-card_star" />
                <small className="mostsold-card_rating">4.5</small>
              </div>
              <div className="mostsold-card_timer">
                <IoMdStopwatch className="mostsold-card_timer-icon" />
                <span className="mostsold-card_timer-text">30mins</span>
              </div>
            </div>
            <small className="mostsold-card_remender">
              10 Liters remaining
            </small>
            <div className="mostsold-card_prize">
              <p className="mostsold-card_prize-text">$40</p>
              <a href="/cart" className="mostsold-card_prize-link">
                <FaBagShopping className="mostsold-card_prize-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostSold;
