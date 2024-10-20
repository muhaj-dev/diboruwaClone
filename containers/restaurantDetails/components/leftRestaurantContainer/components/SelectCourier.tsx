import React from "react";
import "../LeftRestaurantContainer.css";

export const SelectCourier: React.FC = () => {
  return (
    <div className="selectCourierModal">
      <h2>Select a Courier</h2>
      <div className="courierCards">
        <div className="courierCard">
          <p>Courier 1</p>
          <p>Fast delivery</p>
        </div>
        <div className="courierCard">
          <p>Courier 2</p>
          <p>Affordable rates</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};
