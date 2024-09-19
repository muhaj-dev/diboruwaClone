import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { RxStopwatch } from "react-icons/rx";
import "./restaurant-meal.css";
import Link from "next/link";

export const RestaurantMeal = () => {
  return (
    <div className="Mobile_RestaurantMeal_container">
      <p className="Mobile_RestaurantMeal_title">All Meals</p>

      <div className="Mobile_RestaurantMeal_cards">
        <div className="Mobile_RestaurantMeal_card">
          <div className="Mobile_RestaurantMeal_FavANDImage">
            <img
              src="/images/Rectangle 248 (12).png"
              alt=""
              className="Mobile_RestaurantMeal_Image"
            />
            <div className="Mobile_RestaurantMeal_Fav">
              <CiHeart className="Mobile_RestaurantMeal_FavIcon" />
            </div>
          </div>
          <div className="Mobile_RestaurantMeal_details">
            <div className="Mobile_RestaurantMeal_NRT">
              <div className="Mobile_RestaurantMeal_Name_Rating">
                <p className="Mobile_RestaurantMeal_N">Fried Rice</p>
                <div className="Mobile_RestaurantMeal_Dot"></div>
                <div className="Mobile_RestaurantMeal_R">
                  <FaStar className="Mobile_RestaurantMeal_R_Icon" />
                  <p className="Mobile_RestaurantMeal_R_Num">4.5</p>
                </div>
              </div>
              <div className="Mobile_RestaurantMeal_T">
                <RxStopwatch className="Mobile_RestaurantMeal_T_Icon" />
                <p className="Mobile_RestaurantMeal_T_Time">30mins</p>
              </div>
            </div>
            <p className="Mobile_RestaurantMeal_Liters">10 Liters remaining</p>
            <div className="Mobile_RestaurantMeal_amount_and_cart">
              <div className="Mobile_RestaurantMeal_amount">
                <p className="Mobile_RestaurantMeal_realAmount">$40,000</p>
                <p className="Mobile_RestaurantMeal_discountAmount">$30,000</p>
              </div>
              <Link href="./cart" className="Mobile_RestaurantMeal_cart">
                <FaBagShopping className="Mobile_RestaurantMeal_cart_Icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="Mobile_RestaurantMeal_card">
          <div className="Mobile_RestaurantMeal_FavANDImage">
            <img
              src="/images/Rectangle 248 (12).png"
              alt=""
              className="Mobile_RestaurantMeal_Image"
            />
            <div className="Mobile_RestaurantMeal_Fav">
              <CiHeart className="Mobile_RestaurantMeal_FavIcon" />
            </div>
          </div>
          <div className="Mobile_RestaurantMeal_details">
            <div className="Mobile_RestaurantMeal_NRT">
              <div className="Mobile_RestaurantMeal_Name_Rating">
                <p className="Mobile_RestaurantMeal_N">Fried Rice</p>
                <div className="Mobile_RestaurantMeal_Dot"></div>
                <div className="Mobile_RestaurantMeal_R">
                  <FaStar className="Mobile_RestaurantMeal_R_Icon" />
                  <p className="Mobile_RestaurantMeal_R_Num">4.5</p>
                </div>
              </div>
              <div className="Mobile_RestaurantMeal_T">
                <RxStopwatch className="Mobile_RestaurantMeal_T_Icon" />
                <p className="Mobile_RestaurantMeal_T_Time">30mins</p>
              </div>
            </div>
            <p className="Mobile_RestaurantMeal_Liters">10 Liters remaining</p>
            <div className="Mobile_RestaurantMeal_amount_and_cart">
              <div className="Mobile_RestaurantMeal_amount">
                <p className="Mobile_RestaurantMeal_realAmount">$40,000</p>
                <p className="Mobile_RestaurantMeal_discountAmount">$30,000</p>
              </div>
              <Link href="./cart" className="Mobile_RestaurantMeal_cart">
                <FaBagShopping className="Mobile_RestaurantMeal_cart_Icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="Mobile_RestaurantMeal_card">
          <div className="Mobile_RestaurantMeal_FavANDImage">
            <img
              src="/images/Rectangle 248 (12).png"
              alt=""
              className="Mobile_RestaurantMeal_Image"
            />
            <div className="Mobile_RestaurantMeal_Fav">
              <CiHeart className="Mobile_RestaurantMeal_FavIcon" />
            </div>
          </div>
          <div className="Mobile_RestaurantMeal_details">
            <div className="Mobile_RestaurantMeal_NRT">
              <div className="Mobile_RestaurantMeal_Name_Rating">
                <p className="Mobile_RestaurantMeal_N">Fried Rice</p>
                <div className="Mobile_RestaurantMeal_Dot"></div>
                <div className="Mobile_RestaurantMeal_R">
                  <FaStar className="Mobile_RestaurantMeal_R_Icon" />
                  <p className="Mobile_RestaurantMeal_R_Num">4.5</p>
                </div>
              </div>
              <div className="Mobile_RestaurantMeal_T">
                <RxStopwatch className="Mobile_RestaurantMeal_T_Icon" />
                <p className="Mobile_RestaurantMeal_T_Time">30mins</p>
              </div>
            </div>
            <p className="Mobile_RestaurantMeal_Liters">10 Liters remaining</p>
            <div className="Mobile_RestaurantMeal_amount_and_cart">
              <div className="Mobile_RestaurantMeal_amount">
                <p className="Mobile_RestaurantMeal_realAmount">$40,000</p>
                <p className="Mobile_RestaurantMeal_discountAmount">$30,000</p>
              </div>
              <Link href="./cart" className="Mobile_RestaurantMeal_cart">
                <FaBagShopping className="Mobile_RestaurantMeal_cart_Icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
