import React from "react";
import "./minsmeal.css";
import { DiscountSale, MinsMealsData } from "@/containers/Home/components/Data";

const MinsMeals: React.FC = () => {
  return (
    <section className="minsmeal_container">
      <div className="minsmeal-frame">
        <p className="minsmeal_title">{MinsMealsData[0].title}</p>
        <div className="minsmeal-cards">
          {MinsMealsData[0].items.map((item, index) => {
            // Destructure the Icon components from the item
            const FavoriteIcon = item.favoriteIcon;
            const StarIcon = item.starIcon;
            const TimeIcon = item.timeIcon;
            const PrizeIcon = item.prizeIcon;
            return (
              <div key={index} className="minsmeal-card">
                <div className="minsmeal-card_food-img">
                  <img
                    src={item.img}
                    alt={item.smallTitle}
                    className="minsmeal-card_img"
                  />
                  <div className="minsmeal-card_img-iconcontainer">
                    <FavoriteIcon className="minsmeal-card_img-icon" />
                  </div>
                </div>
                <div className="minsmeal-card_content">
                  <div className="minsmeal-card_context">
                    <div className="minsmeal-card_context-top">
                      <small className="minsmeal-card_title">
                        {item.smallTitle}
                      </small>
                      <span className="minsmeal-card_dot"></span>
                      <StarIcon className="minsmeal-card_star" />
                      <small className="minsmeal-card_rating">
                        {item.rating}
                      </small>
                    </div>
                    <div className="minsmeal-card_timer">
                      <TimeIcon className="minsmeal-card_timer-icon" />
                      <span className="minsmeal-card_timer-text">
                        {item.timeText}
                      </span>
                    </div>
                  </div>
                  <small className="minsmeal-card_remender">
                    {item.remenderText}
                  </small>
                  <div className="minsmeal-card_prize">
                    <p className="minsmeal-card_prize-text">{item.prizeText}</p>
                    <a
                      href={item.prizeLink}
                      className="minsmeal-card_prize-link"
                    >
                      <PrizeIcon className="minsmeal-card_prize-icon" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="sale-imgs-container">
          {DiscountSale.map((item, index) => (
            <div className="sale-imgs" key={index}>
              <img
                src={item.img}
                alt={item.alt}
                className="mostsold-sale_img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinsMeals;
