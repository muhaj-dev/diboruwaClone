import React from "react";
import styles from "./similar-meal.module.css";
import "../../../food/component/mostsold/mostsold.css";
import Link from "next/link";
import { SecondSimilarMealData } from "@/constants/index";

interface SecondSimilarMealProps {
  id: string;
}

export const SecondSimilarMeal: React.FC<SecondSimilarMealProps> = ({ id }) => {
  return (
    <section className={styles.mostsold_container}>
      <div className={styles.mostsold_frame}>
        <div className={styles.mostsold_cards}>
          {SecondSimilarMealData[0].items.map((item) => {
            // Destructure the Icon components from the item
            const FavoriteIcon = item.favoriteIcon;
            const StarIcon = item.starIcon;
            const TimeIcon = item.timeIcon;
            const PrizeIcon = item.prizeIcon;
            return (
              <div key={item.id} className={styles.mostsold_card}>
                <div className={styles.mostsold_card_food_img}>
                  <Link
                    href={`/food/${item.id}`}
                    key={item.id}
                    className={styles.mostsold_card_link_div}
                  >
                    <img
                      src={item.img}
                      alt={item.smallTitle}
                      className={styles.mostsold_card_img}
                    />
                  </Link>
                  <div className={styles.mostsold_card_img_iconcontainer}>
                    <FavoriteIcon className={styles.mostsold_card_img_icon} />
                  </div>
                </div>
                <div className={styles.mostsold_card_content}>
                  <div className={styles.mostsold_card_context}>
                    <div className={styles.mostsold_card_context_top}>
                      <small className={styles.mostsold_card_title}>
                        {item.smallTitle}
                      </small>
                      <span className={styles.mostsold_card_dot}></span>
                      <StarIcon className={styles.mostsold_card_star} />
                      <small className={styles.mostsold_card_rating}>
                        {item.rating}
                      </small>
                    </div>
                    <div className={styles.mostsold_card_timer}>
                      <TimeIcon className={styles.mostsold_card_timer_icon} />
                      <span className={styles.mostsold_card_timer_text}>
                        {item.timeText}
                      </span>
                    </div>
                  </div>
                  <div className={styles.mostsold_card_prize}>
                    <p className={styles.mostsol_card_prize_text}>
                      {item.prizeText}
                    </p>
                    <small className={styles.mostsold_card_remender}>
                      {item.remenderText}
                    </small>
                    <a
                      href={item.prizeLink}
                      className={styles.mostsold_card_prize_link}
                    >
                      <PrizeIcon className={styles.mostsold_card_prize_icon} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
