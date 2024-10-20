'use client'
import React, { useState } from 'react'
import styles from "./subscriptionRequest.module.css"
import { ScheduleMeetingDate } from './components/ScheduleMeetingDate';
import { PickADay } from './components/PickADay';
import { DeliveryType } from './components/DeliveryType';
import { SelectedDays } from './components/SelectedDays';
export const SubscriptionRequest = () => {

    
    return (
      <div className={styles.SubscriptionRequestContainer}>
        <div className={styles.SubscriptionRequestContent}>
                <ScheduleMeetingDate />
                <PickADay />
                <DeliveryType />
                <SelectedDays />
        </div>
      </div>
    );
}
