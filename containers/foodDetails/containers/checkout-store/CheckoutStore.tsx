import React from 'react'
import styles from "./checkout-store.module.css"
import { RequestInfo } from './component/RequestInfo'
import { InfoPass } from './component/InfoPass'
import { DeliveryLocation } from './component/DeliveryLocation'
import { SchDeliveryOpl } from './component/SchDeliveryOpl'
import { CheckoutBtn } from './component/CheckoutBtn'
export const CheckoutStore = () => {
  return (
    <div className={ styles.stores_container}>
      <RequestInfo />
      <InfoPass />
      <DeliveryLocation />
      <SchDeliveryOpl />
      <CheckoutBtn />
    </div>
  )
}
