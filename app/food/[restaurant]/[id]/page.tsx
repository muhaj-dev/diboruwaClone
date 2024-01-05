import FoodDetail from "@/containers/foodDetails/FoodDetail";
import React from "react";

export type IpageProps = {
  params: {
    id: string;
    restaurant: string;
  };
};

const page: React.FC<IpageProps> = ({ params: { id, restaurant } }) => {
  return (
    <div>
      <FoodDetail id={id} restaurant={restaurant} />
    </div>
  );
};

export default page;
