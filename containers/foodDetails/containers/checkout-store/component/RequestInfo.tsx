import React from "react";
import styles from "../checkout-store.module.css";

export const RequestInfo = () => {
  return (
    <div className={styles.request_container}>
      <div className={styles.store_owner_box}>
        <p className={styles.store_owner_name}>Carolina Stores</p>
        <p className={styles.request_check}>Please confirm your Request</p>
      </div>
      <div className={styles.request_box}>
        <hr className={styles.request_line} />
        <div className={styles.requested_food}>
          <p className={styles.requested_food_name}>Fried Rice</p>
          <p className={styles.requested_food_quantity}>2Plates</p>
        </div>
        <hr className={styles.request_line} />
        <div className={styles.requested_food}>
          <p className={styles.requested_food_name}>Protein</p>
          <p className={styles.requested_food_quantity}>4</p>
        </div>
        <hr className={styles.request_line} />
        <div className={styles.requested_food}>
          <p className={styles.requested_food_name}>Drink</p>
          <p className={styles.requested_food_quantity}>5</p>
        </div>
        <hr className={styles.request_line} />
        <div className={styles.requested_food}>
          <p className={styles.requested_food_name}>Extras</p>
          <p className={styles.requested_food_quantity}>4</p>
        </div>
        <hr className={styles.request_line} />
      </div>
      <div className={styles.account_box}>
        <div className={styles.account_content}>
          <p className={styles.account_sub_total_text}>Sub Total</p>
          <p className={styles.account_sub_total_amount}>$10,000</p>
        </div>
        <div className={styles.account_content}>
          <p className={styles.account_sub_total_text}>Delivery</p>
          <p className={styles.account_sub_total_amount}>$10,000</p>
        </div>
        <div className={styles.account_content}>
          <p className={styles.account_sub_total_text}>Total</p>
          <p className={styles.account_total_amount}>$100,000</p>
        </div>
      </div>
    </div>
  );
};
