'use client'
import React, { useState } from 'react'
import styles from "../subscriptionRequest.module.css";
import { EditName } from './EditName';
import { Checkbox } from '@/component/Checkbox/Checkbox';
import Counter from '@/component/counter/Counter';
import { PropertyCounter } from '@/component/CustomCounter/PropertyCounter';
import { CustomAddMore } from '@/component/CustomAddMore/CustomAddMore';

export const SelectedDays = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handlePickUpChange = () => {
    setSelectedOption(selectedOption === "pickup" ? null : "pickup");
  };

  const handleDeliveryChange = () => {
    setSelectedOption(selectedOption === "delivery" ? null : "delivery");
  };
  return (
    <div className={styles.SelectedDays_Cards}>
      <div className={styles.SelectedDays_Card}>
        <p className={styles.SelectedDays_CardTitle}>Monday</p>
        <EditName />
        <div className={styles.DeliveryType}>
          <div className={styles.DeliveryType_ChooseType}>
            <Checkbox
              label="Pick Up"
              checked={selectedOption === "pickup"}
              onChange={handlePickUpChange}
              labelClassName="CheckBox_Label"
            />
            <Checkbox
              label="Delivery"
              checked={selectedOption === "delivery"}
              onChange={handleDeliveryChange}
              labelClassName="CheckBox_Label"
            />
          </div>
          <PropertyCounter className={styles.DeliveryType_Counter} />
              </div>
              
              <CustomAddMore
              label='Add Protein'
              />
              <CustomAddMore
              label='Add Drink'
              />
              <CustomAddMore
              label='Extra'
              />
      </div>
    </div>
  );
}
