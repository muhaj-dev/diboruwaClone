"use client";
import React, { useState } from "react";
import styles from "./RequestConfirmation.module.css";
import Checkbox from "@/component/Checkbox/Checkbox";
import { CiEdit } from "react-icons/ci";
export const RequestConfirmation = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("123 Main St, City, Country");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

 const handleAddressChange = (
   event: React.ChangeEvent<HTMLTextAreaElement>
 ): void => {
   setAddress(event.target.value);
 };

 const toggleEdit = (): void => {
   setIsEditing((prev) => !prev);
 };
  return (
    <div className={styles.RequestConfirmationContainer}>
      <div className={styles.RequestConfirmationContainerText}>
        <p className={styles.RequestConfirmationTextGreen}>
          Subscription Request confirmation
        </p>
        <p className={styles.RequestConfirmationTextBlack}>
          Please confirm your Request
        </p>
      </div>
      <div className={styles.RequestConfirmationPickedDaysAndItems}>
        <Checkbox
          label="Weekly"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <hr />
        <div className={styles.RequestConfirmationPickedDays}>
          <p className={styles.RequestConfirmationPickedDaysText}>Days</p>
          <p className={styles.RequestConfirmationDaysPicked}>Mon, Tue, Wed</p>
        </div>
        <hr />
        <div className={styles.RequestConfirmationPickedItems}>
          <div className={styles.RequestConfirmationPickedDays}>
            <p className={styles.RequestConfirmationPickedDaysText}>Trousers</p>
            <p className={styles.RequestConfirmationDaysPicked}>4</p>
          </div>

          <div className={styles.RequestConfirmationPickedDays}>
            <p className={styles.RequestConfirmationPickedDaysText}>Trousers</p>
            <p className={styles.RequestConfirmationDaysPicked}>4</p>
          </div>
        </div>
        <hr />
      </div>
<div className={styles.RequestConfirmation_DeliveryAddressContainer}>
      <div className={styles.RequestConfirmation_DeliveryAddressTxTEdit}>
        <p className={styles.RequestConfirmation_DeliveryAddressTxT}>
          Delivery Location
        </p>
        <div className={styles.RequestConfirmation_DeliveryAddressEdit} onClick={toggleEdit}>
          <CiEdit className={styles.RequestConfirmation_DeliveryAddressEditIcon} />
          <p className={styles.RequestConfirmation_DeliveryAddressEditText}>
            {isEditing ? "Save" : "Edit"}
          </p>
        </div>
      </div>
      <div className={styles.RequestConfirmation_DeliveryAddress}>
        <label htmlFor="address">Address</label>
        {isEditing ? (
          <textarea
            id="address"
            name="Address"
            className={styles.RequestConfirmation_DeliveryAddressTxTArea}
            value={address}
            onChange={handleAddressChange}
            cols={30}
            rows={6}
          ></textarea>
        ) : (
          <p className={styles.RequestConfirmation_DeliveryAddressTxTDisplay}>
            {address}
          </p>
        )}
      </div>
    </div>
    </div>
  );
};
