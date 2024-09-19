'use client'
import React, { useState } from "react";
import "./custom-booking.css";

export const CustomBooking: React.FC  = () => {
    const [activeButton, setActiveButton] = useState<string>("All");

    const handleButtonClick = (label: string) => {
      setActiveButton(label);
    };

    return (
      <div className="mobile_custombooking_container">
        <div className="mobile_custombooking_frame">
          <div className="mobile_custombooking_search-min">
            <div className="mobile_min-buttons">
              {["All", "30 Mins", "45 Mins", "1 Hr"].map((label) => (
                <button
                  key={label}
                  className={`mobile_min-button ${activeButton === label ? "mobile_active" : ""}`}
                  onClick={() => handleButtonClick(label)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <button type="submit" className="mobile_custombooking-btn">
            Custom Booking
          </button>
        </div>
      </div>
    );
  };
