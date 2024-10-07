import React from "react";
import { CustomBooking } from "./components/customBooking/CustomBooking";
// import { RestaurantMeal } from "./components/restaurantMeals/RestaurantMeal";
import { AboutMoving } from "./components/MovingDetails/AboutMoving";
import { LeftMovingContainer } from "./components/leftMovingContainer/LeftMovingContainer";
import './moving-details.css'

export const MovingDetails = () => {
  return (
    <div className="Moving_restCont">
      <div className="Moving_Cont">
        <AboutMoving />
        <CustomBooking />
        {/* <RestaurantMeal /> */}
      </div>
      <LeftMovingContainer />
    </div>
  );
};
