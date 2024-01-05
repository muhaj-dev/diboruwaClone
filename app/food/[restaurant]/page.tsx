import  FoodDetail  from "@/containers/foodDetails/FoodDetail";
import  FoodList  from "@/containers/foodList/FoodList";
import React from "react";

export type IpageProps = {
  params: { restaurant: string };
};

const page: React.FC<IpageProps> = ({ params: { restaurant } }) => {
  return (
    <div>
      <FoodList id={restaurant} />
    </div>
  );
};

export default page;
