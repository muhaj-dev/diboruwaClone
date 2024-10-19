"use client";
import React from "react";
import "../LeftRestaurantContainer.css";
export const DaysPicked = () => {
  return (
    <>
      <div className="DaysPicked_Card">
        <p className="DaysPicked_CardTitle">Monday</p>
        <div className="DaysPicked_CardItems">
          <div className="DaysPicked_CardItem">
            <p className="DaysPicked_CardItemText">Meal</p>
            <p className="DaysPicked_CardItemText2">Jollof Rice</p>
          </div>
          <div className="DaysPicked_CardItem">
            <p className="DaysPicked_CardItemText">Plate(s)</p>
            <p className="DaysPicked_CardItemText2">2</p>
          </div>
          <div className="DaysPicked_CardItem">
            <p className="DaysPicked_CardItemText">Delivery Time</p>
            <p className="DaysPicked_CardItemText2">7pm</p>
          </div>
        </div>
      </div>
      <hr className="DaysPicked_CardLine" />
      <div className="DaysPicked_Card">
        <p className="DaysPicked_CardTitle">Tuesday</p>
        <div className="DaysPicked_CardItems">
          <div className="DaysPicked_CardItem">
            <p className="DaysPicked_CardItemText">Meal</p>
            <p className="DaysPicked_CardItemText">Jollof Rice</p>
          </div>
          <div className="DaysPicked_CardItem">
            <p className="DaysPicked_CardItemText">Plate(s)</p>
            <p className="DaysPicked_CardItemText">2</p>
          </div>
          <div className="DaysPicked_CardItem">
            <p className="DaysPicked_CardItemText">Delivery Time</p>
            <p className="DaysPicked_CardItemText">7pm</p>
          </div>
        </div>
      </div>
      <hr className="DaysPicked_CardLine" />
      <div className="DaysPicked_Card">
        <p className="DaysPicked_CardTitle">Wednesday</p>
        <div className="DaysPicked_CardItems">
          <div className="DaysPicked_CardItem">
            <p className="DaysPicked_CardItemText">Meal</p>
            <p className="DaysPicked_CardItemText">Jollof Rice</p>
          </div>
          <div className="DaysPicked_CardItem">
            <p className="DaysPicked_CardItemText">Plate(s)</p>
            <p className="DaysPicked_CardItemText">2</p>
          </div>
          <div className="DaysPicked_CardItem">
            <p className="DaysPicked_CardItemText">Delivery Time</p>
            <p className="DaysPicked_CardItemText">7pm</p>
          </div>
        </div>
      </div>
    </>
  );
};
