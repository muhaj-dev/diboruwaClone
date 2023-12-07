"use client";
import { useCart } from "@/hooks/useCart";
import { Column, Container, PayButton } from "./payment.styles";
import useOrder from "@/hooks/useOrder";
import useCartStore from "@/store/useCart.store";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";
import { usePaystackPayment } from "react-paystack";
import { nanoid } from "nanoid";
import useAuth from "@/hooks/useAuth";

import PaymentButton from "../paymentButton/PayButton";
import { FC, useState } from "react";
import CustomSelect from "../customSelect";
interface Props {
  modal: (
    errorType: "success" | "error" | "info",
    errorMessage: string
  ) => void;
}

const Payment: FC<Props> = ({ modal }) => {
  const { data: session } = useSession();
  const [location, setLocation] = useState("")

  const { cartItems, subscriptions } = useCartStore();
  const { totalPrice } = useCart();
  const { isSubmitting, isError, isSuccess, handleCartOrderSubmit } =
    useOrder();

  const referenceId = nanoid(8);

  const locations =["Danbare", "Rimin gata", "Rijiazaki", "Jambulo", "Buk old site"]

  const getDeliveryFee = (address: string | undefined) => {
    switch (address) {
      case "Danbare":
        return 300;
      case "Rimin gata":
        return 300;
      case "Rijiazaki":
        return 400;
      case "Jambulo":
        return 500;
      case "Buk old site":
        return 500;
      default:
        // Default delivery fee if the address doesn't match any known locations
        return 0;
    }
  };

  const deliveryFee = getDeliveryFee(location);
  const totalPriceWithDelivery = totalPrice + deliveryFee;

  const onSuccess = () => {
    handleCartOrderSubmit(referenceId, totalPrice);
  };

  const onClose = () => {
    console.log("closed");
  };

  const { totalQuantities } = useCart();
  return (
    <Container>
      <Column>
        <strong>Location:</strong>{" "}
        <CustomSelect
          // label="State"
          
          options={locations}
          value={location}
          name="location"
          onChange={(e) => setLocation(e.target.value)}
          
        />
      </Column>
      <Column>
        <strong>Items</strong> <span>{totalQuantities}</span>
      </Column>
      <Column>
        <strong>Delivery fee</strong> <span>{deliveryFee}</span>
      </Column>
      <Column>
        <strong>Total</strong> <span>₦{totalPriceWithDelivery.toFixed(2)}</span>
      </Column>
     {location && <PaymentButton
        totalPrice={totalPrice}
        openModal={modal}
        buttonText="Pay Now"
        color="primary"
        onSuccess={onSuccess}
        onClose={onClose}
        referenceId={referenceId}
      />}
    </Container>
  );
};

export default Payment;
