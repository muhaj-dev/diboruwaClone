"use client";
import BackButton from "@/component/ui/BackButton/BackButton";
import {
  BackBtn,
  Container,
  EditBtn,
  Editcont,
  EditBtn2,
  Form,
  FormControl,
  SaveButton,
} from "./profile.styles";
import Input from "@/component/ui/input/Input";

import Button from "@/component/ui/button/Button";
import { FormEvent, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Pencil1Icon } from "@radix-ui/react-icons";
import useAuth from "@/hooks/useAuth";
import { updateProfile } from "@/utils/helpers/updateUser";
import { toast } from "react-hot-toast";
import NotificationModal from "@/component/NotificationModal";
import CustomSelect from "@/component/customSelect";
import * as Nglca from "nigerian-states-and-lgas";
import useForm from "@/hooks/useForm.hooks";
import { profileValidations } from "@/utils/validations";
import Loader from "@/component/Loader";

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    session,
    status,
    userUpdate,
    showModal,
    modalMessage,
    modalErrorType,
    closeModal,
  } = useAuth();
  let initialValues = {
    firstName: session ? session?.user.firstName : "",
    lastName: session ? session?.user.lastName : "",
    email: session ? session?.user.email : "",
    phone: session ? session?.user.phone : "",
    address: session ? session?.user.address : "",
    lga: session ? session?.user.lga : "",
    // city: session ? session?.user?.city : "",
    state: session ? session.user?.state : "",
  };

  const onSubmit = async (values: any) => {
    setLoading(true);
    try {
      // Call the updateProfile function from the service to update the profile
      const response = await updateProfile(session?.user._id as string, values);

      if (response.success) {
        // Show success toast message
        userUpdate(values);
        // toast.success("Profile updated successfully!");
        setIsEditable(false);
        setLoading(false);
        // Redirect to a success page or do something else after successful update
      } else {
        // Show error toast message
        toast.error("Failed to update profile: ");
        // Handle the error or display an error message
      }
    } catch (error) {
      toast.error("An error occurred while updating the profile");
      // Handle the error or display an error message
    }
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    () => {
      console.log("submit");
      onSubmit(values);
    },
    profileValidations
  );

  // const { formData, handleChange, handleSubmit, resetForm, errors, isValid } = useForm(
  //   {
  //     firstName: session ? session?.user.firstName : "",
  //     lastName: session ? session?.user.lastName : "",
  //     email: session ? session?.user.email : "",
  //     phone: session ? session?.user.phone : "",
  //     address: session ? session?.user.address : "",
  //     lga: session ? session?.user.lga : "",
  //     city: session ? session?.user?.city : "",
  //     state: session ? session.user?.state : "",
  //   },
  //   onSubmit
  // );

  // if (status === "loading") return <Loader />;

  return (
    <Container>
      <BackBtn>
        <BackButton />
      </BackBtn>

      <Form onSubmit={handleSubmit}>
        <Editcont>
          <h2>Edit Profile</h2>
         
           
          <EditBtn2 type="button" onClick={() => setIsEditable((prev) => !prev)}>
            <Pencil1Icon />
          </EditBtn2>
        </Editcont>
        {/* <EditBtn type="button" onClick={() => setIsEditable((prev) => !prev)}>
          <Pencil1Icon />
        </EditBtn> */}
        <FormControl>
          <Input
            label="First Name"
            name="firstName"
            type="text"
            id="id"
            readOnly={!isEditable}
            value={values.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            error={errors.firstName}
          />
          <Input
            label="Last Name"
            name="lastName"
            type="text"
            id="id"
            readOnly={!isEditable}
            value={values.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            error={errors.lastName}
          />
        </FormControl>
        <FormControl>
          <Input
            label="Email"
            name="email"
            type="email"
            id="id"
            readOnly={!isEditable}
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            error={errors.email}
          />
          <Input
            label="Phone"
            name="phone"
            type="text"
            id="id"
            readOnly={!isEditable}
            value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            error={errors.phone}
          />
        </FormControl>
        <FormControl>
          <Input
            label="Address"
            name="address"
            type="text"
            readOnly={!isEditable}
            id="id"
            value={values.address}
            onChange={(e) => handleChange("address", e.target.value)}
            error={errors.address}
          />
          {/* <Input
            label="Local Gov Area"
            name="lga"
            type="text"
            readOnly={!isEditable}
            id="id"
            value={values.lga}
            onChange={(e) => handleChange("lga", e.target.value)}
            error={errors.lga}
          /> */}
        </FormControl>
        <FormControl>
          <CustomSelect
            label="State"
            disabled={!isEditable}
            options={Nglca.states()}
            value={values.state}
            name="state"
            onChange={(e) => handleChange("state", e.target.value)}
            error={errors.state}
          />
          <CustomSelect
            label="Lga"
            disabled={!isEditable}
            options={Nglca.lgas(values.state)}
            value={values.lga}
            name="lga"
            onChange={(e) => handleChange("lga", e.target.value)}
            error={errors.lga}
          />
        </FormControl>

        {isEditable && (
          <SaveButton type="submit" disabled={loading}>
            {loading ? <Loader /> : "Save"}
          </SaveButton>
        )}
      </Form>

      {showModal && (
        <NotificationModal
          message={modalMessage}
          errorType={modalErrorType}
          onClose={closeModal}
        />
      )}
    </Container>
  );
};

export default Profile;
