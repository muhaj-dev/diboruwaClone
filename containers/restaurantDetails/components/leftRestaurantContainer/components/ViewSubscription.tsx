"use client";
import React, { useState } from "react";

import "../LeftRestaurantContainer.css";
import { BackButton2 } from "@/component/ui/BackButton/BackButton";
import Link from "next/link";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Checkbox } from "@/component/Checkbox/Checkbox";
import { DaysPicked } from "./DaysPicked";
import { DeliveryAddress } from "@/component/deliveryAddress/DeliveryAddress";
import { CustomDescription } from "@/component/CustomDescription/CustomDescription";
import { Button } from "@/component/shared/Button";
import { BsExclamationCircle } from "react-icons/bs";
interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  subscriptionData: {
    subType: string;
    subAmount: string;
    subItem: { subItemText: string }[];
    subFeeText: string;
  } | null;
}

export const ViewSubscription: React.FC<SubscriptionModalProps> = ({
  isOpen,
  onClose,
  subscriptionData,
}) => {
  const [isLitersChecked, setIsLitersChecked] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  if (!isOpen || !subscriptionData) {
    return null; // Don't render the modal if it's closed or no data is passed
  }

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <div className="modal_BCS2">
          <BackButton2 />
          <Link href="#" className="modal_customSub_link">
            <p className="customSub_linkText">Custom subscription</p>
            <LiaAngleRightSolid className="customSub_linkIcon" />
          </Link>
        </div>

        <div className="customSub_DaysPickedAndTotalAMT">
          <Checkbox
            label="1 Week"
            checked={isLitersChecked}
            onChange={setIsLitersChecked}
            labelClassName="CheckBox_Label"
          />
          <p className="customSub_TotalAMT">$40,000</p>
        </div>

        <div className="customSub_PickedDaysAndDL">
          <div className="customSub_PickedDaysCards">
            <DaysPicked />
          </div>
          <div className="customSub_DL">
            <DeliveryAddress
              address="123 Main St, Springfield"
              onAddressChange={(newAddress) => console.log(newAddress)}
              label="Delivery Location"
              editButtonText="Change"
              saveButtonText="Update"
              customIcon={<LiaAngleRightSolid />}
              className="CustomSub_DeliveryLocationContainer"
              // editButtonClassName=""
              // textAreaClassName=""
              displayTextClassName="Display_Address"
            />
            <CustomDescription
              label="Want to pass an info?"
              placeholder="Write..."
              value={description}
              onChange={(newDescription) => setDescription(newDescription)} // Change handler
              // containerClassName=""
              // labelClassName=""
              textareaClassName="ViewModal_Textarea"
            />
            <Button
              text="Continue"
              onClick={onClose}
              className="RestaurantDoneButton"
            />

            <div className="ViewModalSub_Weaning">
              <BsExclamationCircle className="ViewModalSub_WeaningIcon" />
              <p className="ViewModalSub_WeaningText">
                Please note that the service will begin at the start of the week
                once your request is approved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
