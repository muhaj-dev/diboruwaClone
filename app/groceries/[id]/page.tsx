import GroceriesDetail from "@/containers/groceriesDetails/GroceriesDetail";
import React from "react";

export type IpageProps = {
  params: {
    id: string;
  };
};

const page: React.FC<IpageProps> = ({ params: { id } }) => {
  return (
    <div>
      <GroceriesDetail id={id} />
    </div>
  );
};

export default page;
