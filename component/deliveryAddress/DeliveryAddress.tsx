import React, { useState } from "react";
import styles from "./DeliveryAddress.module.css";
import { CiEdit } from "react-icons/ci";

interface DeliveryAddressProps {
  address: string;
  onAddressChange: (newAddress: string) => void;
  label?: string;
}

export const DeliveryAddress: React.FC<DeliveryAddressProps> = ({
  address,
  onAddressChange,
  label = "Delivery Location",
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleAddressChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    onAddressChange(event.target.value);
  };

  const toggleEdit = (): void => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className={styles.RequestConfirmation_DeliveryAddressContainer}>
      <div className={styles.RequestConfirmation_DeliveryAddressTxTEdit}>
        <p className={styles.RequestConfirmation_DeliveryAddressTxT}>{label}</p>
        <div
          className={styles.RequestConfirmation_DeliveryAddressEdit}
          onClick={toggleEdit}
        >
          <CiEdit
            className={styles.RequestConfirmation_DeliveryAddressEditIcon}
          />
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
  );
};
