import { RestaurantDetails } from '@/containers/restaurantDetails/RestaurantDetails'
import React from 'react'

export const metadata = {
  title: "Restaurant",
};

const page = () => {
  return (
    <>
    <RestaurantDetails />
      </>
  )
}

export default page