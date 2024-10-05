import React from "react";
import { CustomBooking } from "./components/customBooking/CustomBooking";
import { RestaurantMeal } from "./components/restaurantMeals/RestaurantMeal";
import { AboutRestaurant } from "./components/detailsRestaurant/AboutRestaurant";
import { LeftRestaurantContainer } from "./components/leftRestaurantContainer/LeftRestaurantContainer";
import './moving-details.css'

export const MovingDetails = () => {
  return (
    <div className="Moving_restCont">
      <div className="Moving_Cont">
        <AboutRestaurant />
        <CustomBooking />
        <RestaurantMeal />
      </div>
      <LeftRestaurantContainer />
    </div>
  );
};
