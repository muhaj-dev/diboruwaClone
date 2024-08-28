import React from "react";
import { AboutFood } from "../about-food/AboutFood";
import { CTADelivery } from "../cta-delivery/CTADelivery";
import styles from "./display-food.module.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export const DisplayFood = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.display_img}>
          <img
            src="/images/Frame 2610163.png"
            alt="on display"
            className={styles.ondisplay_img}
          />
        </div>
        <div className={styles.scroll_imgs}>
          <div className={styles.selected_img}>
            <FaAngleLeft className={styles.prev_btn}/>
            <img
              src="/images/151e2d46640e246f42f769231cc76bab.png"
              alt="on selected"
              className={styles.onselected_img}
            />
            <img
              src="/images/d8cc774cbb454c39b0c0a291406db198.png"
              alt="on selected"
              className={styles.onselected_img}
            />
            <img
              src="/images/d8cc774cbb454c39b0c0a291406db198.png"
              alt="on selected"
              className={styles.onselected_img}
            />
            <img
              src="/images/d8cc774cbb454c39b0c0a291406db198.png"
              alt="on selected"
              className={styles.onselected_img}
            />
            <img
              src="/images/7440670515731ae400623ae77f2ecbd7.png"
              alt="on selected"
              className={styles.onselected_img}
            />
            <FaAngleRight className={styles.prev_btn}/>
          </div>
        </div>
        <AboutFood />
        <CTADelivery />
      </section>
    </>
  );
};
