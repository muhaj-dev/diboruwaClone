import React from 'react'
import { CustomBooking } from './components/customBooking/CustomBooking'
import { RestaurantMeal } from './components/restaurantMeals/RestaurantMeal'
import { AboutRestaurant } from './components/detailsRestaurant/AboutRestaurant'

export const RestaurantDetails = () => {
  return (
    <div>
      <AboutRestaurant />
      <CustomBooking/>
      <RestaurantMeal />
          </div>
  )
}
