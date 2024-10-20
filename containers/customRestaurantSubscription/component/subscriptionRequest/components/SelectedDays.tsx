'use client'
import React, { ChangeEvent, useState } from 'react'
import styles from "../subscriptionRequest.module.css";
import { CiEdit } from 'react-icons/ci';
import { EditName } from './EditName';

export const SelectedDays = () => {

  return (
    <div className={styles.SelectedDays_Cards}>
      <div className={styles.SelectedDays_Card}>
        <p className={styles.SelectedDays_CardTitle}>Monday</p>
    <EditName />
      </div>
    </div>
  );
}
