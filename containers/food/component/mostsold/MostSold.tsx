import React from "react";
import "./mostsold.css";
import { DiscountSale, FoodVendor } from "@/containers/Home/components/Data";
import Link from "next/link";


interface MostSoldProps {
  id: string;
}

const MostSold: React.FC<MostSoldProps> = ({ id }) => {
  return (
    <section className="mostsold_container">
      <div className="mostsold-frame">
        <p className="mostsold_title">{FoodVendor[0].title}</p>
        <div className="mostsold-cards">
          {FoodVendor[0].items.map((item) => {
            // Destructure the Icon components from the item
            const FavoriteIcon = item.favoriteIcon;
            const StarIcon = item.starIcon;
            const TimeIcon = item.timeIcon;
            const PrizeIcon = item.prizeIcon;
            return (
              <Link  href={`./food/${item.id}`} key={item.id} className="mostsold-card">
                <div className="mostsold-card_food-img">
                  <img
                    src={item.img}
                    alt={item.smallTitle}
                    className="mostsold-card_img"
                  />
                  <div className="mostsold-card_img-iconcontainer">
                    <FavoriteIcon className="mostsold-card_img-icon" />
                  </div>
                </div>
                <div className="mostsold-card_content">
                  <div className="mostsold-card_context">
                    <div className="mostsold-card_context-top">
                      <small className="mostsold-card_title">
                        {item.smallTitle}
                      </small>
                      <span className="mostsold-card_dot"></span>
                      <StarIcon className="mostsold-card_star" />
                      <small className="mostsold-card_rating">
                        {item.rating}
                      </small>
                    </div>
                    <div className="mostsold-card_timer">
                      <TimeIcon className="mostsold-card_timer-icon" />
                      <span className="mostsold-card_timer-text">
                        {item.timeText}
                      </span>
                    </div>
                  </div>
                  <small className="mostsold-card_remender">
                    {item.remenderText}
                  </small>
                  <div className="mostsold-card_prize">
                    <p className="mostsold-card_prize-text">{item.prizeText}</p>
                    <a
                      href={item.prizeLink}
                      className="mostsold-card_prize-link"
                    >
                      <PrizeIcon className="mostsold-card_prize-icon" />
                    </a>
                  </div>
                </div>
              </Link>
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

export default MostSold;
