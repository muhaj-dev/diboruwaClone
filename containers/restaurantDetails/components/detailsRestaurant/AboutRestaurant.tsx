import React from 'react'
import styles from './about-restaurant.module.css'
import { FaStar } from 'react-icons/fa';
import { LiaAngleRightSolid } from 'react-icons/lia';
import { SlLocationPin } from "react-icons/sl";
export const AboutRestaurant = () => {
  return (
    <div className={styles.MobilerestaurantContainer}>
      <div className={styles.MobileCPImage}>
        <div className={styles.MobilecoverImage}>
          <img
            src="/images/Frame 2611041.png"
            alt=""
            className={styles.MobilecoverImg}
          />
        </div>
        <div className={styles.MobilerestProfileImage}>
          <img
            src="/images/Ellipse 86.png"
            alt=""
            className={styles.MobilerestProfileImg}
          />
        </div>
      </div>
      <div className={styles.MobileaboutRestaurantContainer}>
        <div className={styles.MobileNRSContent}>
          <div className={styles.MobileNRRestaurant}>
            <p className={styles.MobilerestaurantProfileName}>
              Flora Restaurant
            </p>
            <div className={styles.MobilerestaurantRating}>
              <FaStar className={styles.MobilerestaurantRatingIcon} />
              <p className={styles.MobilerestaurantRatingNum}>4.5</p>
            </div>
          </div>
          <button className={styles.MobilerestaurantSubNav}>
            <p className={styles.MobilerestaurantSubText}>Subscription</p>
            <LiaAngleRightSolid className={styles.MobilerestaurantSubIcon} />
          </button>
        </div>
        <div className={styles.MobilerestaurantOpeningTimePhoneNum}>
          <p className={styles.MobilerestaurantOpeningDay}>Mon - Friday</p>
          <div className={styles.MobilerestaurantDot}></div>
          <p className={styles.MobilerestaurantOpeningTime}>8am - 5pm</p>
          <div className={styles.MobilerestaurantDot}></div>
          <p className={styles.MobilerestaurantPhoneNum}>0903 414 5971</p>
        </div>
        <div className={styles.MobilerestaurantLocation}>
          <SlLocationPin className={styles.MobilerestaurantLocationIcon} />
          <p className={styles.MobilerestaurantLocationText}>Ikeja, Lagos</p>
        </div>
        <button className={styles.MobilerestaurantReview}>Reviews</button>
      </div>
    </div>
  );
}
