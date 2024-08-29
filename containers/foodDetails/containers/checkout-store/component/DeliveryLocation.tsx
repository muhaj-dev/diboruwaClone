import React from "react";

import styles from "../checkout-store.module.css";
import { CiEdit } from "react-icons/ci";
export const DeliveryLocation = () => {
  return (
    <div className={styles.location_container}>
      <div className={styles.location_dle}>
        <p className={styles.location_dle_text}>Delivery location</p>
        <div className={styles.location_ie_icon}>
          <CiEdit className={styles.location_edit_icon} />
          <span className={styles.location_edit_icon_text}>Edit</span>
        </div>
      </div>
      <p className={styles.location_dle_text_address}>Address</p>
      <textarea
        className={styles.location_dle_address_textarea}
        name="message"
        rows={4}
        cols={20}
        placeholder="No 24 Eberechi street, umuahia, Eberechi street, 
umuahia,Abia state."
      ></textarea>
    </div>
  );
};
