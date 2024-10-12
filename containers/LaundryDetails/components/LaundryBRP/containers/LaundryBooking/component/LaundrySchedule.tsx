import React from 'react'
import styles from "../LaundryBooking.module.css";
import { ScheduleTime } from './ScheduleTime';
import { ScheduleDate } from './ScheduleDate';

export const LaundrySchedule = () => {
  return (
    <div className={styles.LaundryScheduleContainer}>
      <div className={styles.LaundryScheduleWrapper}> 
      <p className={styles.LaundryScheduleText}>Pick up Day</p>
      <div className={styles.LaundryScheduleCards}>
        <ScheduleDate />
        <ScheduleTime />
      </div>
        </div>
      <div className={styles.LaundryScheduleWrapper}> 
      <p className={styles.LaundryScheduleText}>Return day</p>
      <div className={styles.LaundryScheduleCards}>
        <ScheduleDate />
        <ScheduleTime />
      </div>
        </div>
    </div>
  );
};
