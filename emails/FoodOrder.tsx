import React from "react";
import { EmailTemplate } from ".";

const colors = {
  lightBlue: "#00afdb",
  darkBlue: "#00a6cf",
};

interface OrderConfirmationProps {
  customerName: string;
  orderItem: {
    orderItems: {
      title: string;
      quantity: number;
      total: number;
    }[];
    total: number;
    estimatedDeliveryTime: string;
  };
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  customerName,
  orderItem: { orderItems, total, estimatedDeliveryTime },
}) => {
  const containerStyle: React.CSSProperties = {
    lineHeight: "2",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "24px",
    marginBottom: "15px",
  };

  const tableStyle: React.CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "10px",
  };

  const tableCellStyle: React.CSSProperties = {
    border: `1px solid ${colors.darkBlue}`,
    padding: "8px",
  };

  return (
    <EmailTemplate subject="Your Order is Confirmed!">
      <div style={containerStyle}>
        <p>
          Hello{" "}
          <strong style={{ textTransform: "capitalize" }}>
            {customerName}
          </strong>
          ,{" "}
        </p>
        <p>
          Thank you for your order! We&#39;ve received your payment and your
          items are now being prepared.
        </p>
        <div>
          {orderItems.map((item, index) => (
            <li key={index}>
              {item.title} - {item.quantity} - {item.total}
            </li>
          ))}
        </div>
        <p>
          {" "}
          <strong>Total Amount:</strong> {total}
        </p>
        <p>
          {" "}
          <strong>Estimated Delivery Time:</strong> {estimatedDeliveryTime}
        </p>
        <p>Sit back and relax, your items are on their way!</p>
        <p>
          Cheers,
          <br />
          The Dibo Ruwa Team
        </p>
      </div>
    </EmailTemplate>
  );
};

export default OrderConfirmation;
