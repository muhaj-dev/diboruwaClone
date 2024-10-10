import React from "react";

import styles from "../MovingBooking.module.css";
import { CheckboxGroup } from "./CheckboxGroup";
import { AddProperty } from "./AddProperty";
import { MovingBookingAddress } from "./MovingBookingAddress";
import { ItemsDescription } from "./ItemsDescription";
export const MovingItem = () => {
  return (
    <div className={styles.MovingBookingContainer}>
      <div className={styles.MovingItemContainer}>
        <p className={styles.MovingItemTextQuest}>What do you want to move?</p>

        <div className={styles.MovingItemChoices}>
          <CheckboxGroup />
        </div>
        <div className={styles.MovingPropertyContainer}>
          <AddProperty />
        </div>
        <div className={styles.Moving_AddressContainer}>
          <MovingBookingAddress />
        </div>
        <div className={styles.Moving_ItemsDescription}>
          <ItemsDescription />
        </div>
      </div>
    </div>
  );
};
