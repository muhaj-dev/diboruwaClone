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
import useForm from "@/hooks/useForm.hooks";
import { profileValidations } from "@/utils/validations";
import Loader from "@/component/Loader";

// Define types for State and Region
type Location = {
  name: string;
  fee: number;
};

type Region = {
  locations: Location[];
};

type StatesAndRegions = {
  [key: string]: Region;
};

const statesAndRegions: StatesAndRegions = {
  Kano: {
    locations: [
      { name: "Danbare", fee: 300 },
      { name: "Rimin gata", fee: 300 },
      { name: "Rijia zaki", fee: 400 },
      { name: "Jambulo", fee: 500 },
      { name: "Buk old site", fee: 500 },
      { name: "Buk new site", fee: 300 },
      { name: "Kabuga", fee: 500 },
      { name: "Sabon Gari", fee: 1300 },
      { name: "Hotoro", fee: 1500 },
      { name: "Naibawa", fee: 1200 },
      { name: "Gwale", fee: 1200 },
      { name: "Tarauni", fee: 1500 },
      { name: "Kano Municipal", fee: 1200 },
      { name: "Dala", fee: 800 },
      { name: "Zoo Road", fee: 1000 },
    ],
  },
  Ilorin: {
    locations: [
      { name: "Taiwo road", fee: 500 },
      { name: "Tanke", fee: 400 },
      { name: "Oja oba", fee: 600 },
      { name: "Challenge", fee: 500 },
      { name: "Sawmill", fee: 450 },
      { name: "Unilorin", fee: 300 },
      { name: "Kwarapoly", fee: 300 },
      { name: "Unity road", fee: 500 },
      { name: "Post office", fee: 400 },
      { name: "Adeta", fee: 500 },
      { name: "Agbooba", fee: 450 },
      { name: "Adewole", fee: 500 },
      { name: "Gaa-Akanbi", fee: 550 },
      { name: "Fate", fee: 600 },
      { name: "Basin", fee: 500 },
      { name: "Kulende", fee: 450 },
      { name: "Pakata", fee: 400 },
      { name: "Oloje", fee: 500 },
      { name: "Oko olowo", fee: 550 },
    ],
  },
  // Additional states can be added here similarly
};

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
    state: session ? session.user?.state : "",
  };

  const onSubmit = async (values: any) => {
    setLoading(true);
    try {
      const response = await updateProfile(session?.user._id as string, values);
      if (response.success) {
        userUpdate(values);
        setIsEditable(false);
        setLoading(false);
      } else {
        toast.error("Failed to update profile: ");
      }
    } catch (error) {
      toast.error("An error occurred while updating the profile");
    }
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    () => {
      onSubmit(values);
    },
    profileValidations
  );

  // Helper function to get the list of states
  const getStates = (): string[] => Object.keys(statesAndRegions);

  // Helper function to get the list of LGAs for a specific state
  const getLgas = (state: string): string[] => {
    if (statesAndRegions[state]) {
      return statesAndRegions[state].locations.map((location) => location.name);
    }
    return [];
  };

  return (
    <Container>
      <BackBtn>
        <BackButton />
      </BackBtn>

      <Form onSubmit={handleSubmit}>
        <Editcont>
          <h2>Edit Profile</h2>
          <EditBtn2
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsEditable((prev) => !prev);
            }}
          >
            <Pencil1Icon />
          </EditBtn2>
        </Editcont>
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
        </FormControl>
        <FormControl>
          <CustomSelect
            label="State"
            disabled={!isEditable}
            options={getStates()}
            value={values.state}
            name="state"
            onChange={(e) => handleChange("state", e.target.value)}
            error={errors.state}
          />
          <CustomSelect
            label="Region"
            disabled={!isEditable}
            options={getLgas(values.state)}
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
