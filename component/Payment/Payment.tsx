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
import { FC } from "react";
interface Props {
  modal: (
    errorType: "success" | "error" | "info",
    errorMessage: string
  ) => void;
}

const Payment: FC<Props> = ({ modal }) => {
  const { data: session } = useSession();

  const { cartItems, subscriptions } = useCartStore();
  const { totalPrice } = useCart();
  const { isSubmitting, isError, isSuccess, handleCartOrderSubmit } =
    useOrder();

  const referenceId = nanoid(8);

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

  // const deliveryFee = getDeliveryFee(session.user.lga);
  // const totalPriceWithDelivery = totalPrice + deliveryFee;

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
        <strong>Items</strong> <span>{totalQuantities}</span>
      </Column>
      <Column>
        <strong>Total</strong> <span>₦{totalPrice.toFixed(2)}</span>
      </Column>
      <PaymentButton
        totalPrice={totalPrice}
        openModal={modal}
        buttonText="Pay Now"
        color="primary"
        onSuccess={onSuccess}
        onClose={onClose}
        referenceId={referenceId}
      />
    </Container>
  );
};

export default Payment;
