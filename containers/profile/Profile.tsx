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
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Pencil1Icon } from "@radix-ui/react-icons";
import useAuth from "@/hooks/useAuth";
import { updateProfile } from "@/utils/helpers/updateUser";
import { toast } from "react-hot-toast";
import NotificationModal from "@/component/NotificationModal";
import useForm from "@/hooks/useForm.hooks";
import { profileValidations } from "@/utils/validations";
import Loader from "@/component/Loader";
import styled from "styled-components";
import Dropdown from "@/component/ui/Dropdown";

const SubmitButton = styled.div`
  width: max-content;
  padding: 10px 14px;
  border-radius: 8px;
  background: var(--primary);
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
  margin-left: auto;
`;

interface StateAndRegions {
  [key: string]: {
    locations: { name: string; fee: number }[];
  };
}

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [availableRegions, setAvailableRegions] = useState<
    { name: string; fee: number }[]
  >([]);

  const statesAndRegions: StateAndRegions = {
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

  useEffect(() => {
    const hasVisited = Cookies.get("hasVisited");
    const savedState = Cookies.get("selectedState");
    const savedRegion = Cookies.get("selectedRegion");

    if (savedState) {
      setSelectedState(savedState);
      const regions = statesAndRegions[savedState]?.locations || [];
      setAvailableRegions(regions);
    }

    if (savedRegion) {
      setSelectedRegion(savedRegion);
    }

    if (!hasVisited) {
      // setShowModal(true);
    }
  }, []);

  const handleStateSelect = (selectedOption: string | null) => {
    setSelectedState(selectedOption);
    const regions = selectedOption
      ? statesAndRegions[selectedOption]?.locations || []
      : [];
    setAvailableRegions(regions);
    setSelectedRegion(""); // Reset region selection on state change

    if (selectedOption) {
      Cookies.set("selectedState", selectedOption, { expires: 1 }); // Save the selected state in cookies
    }
  };

  const handleRegionSelect = (selectedOption: string) => {
    setSelectedRegion(selectedOption);
    if (selectedState) {
      const selectedFee =
        statesAndRegions[selectedState]?.locations.find(
          (loc) => loc.name === selectedOption
        )?.fee || 0;
      Cookies.set("selectedRegion", selectedOption, { expires: 1 }); // Save the selected region in cookies
      Cookies.set("selectedFee", String(selectedFee), { expires: 1 }); // Save the delivery fee
    }
  };

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
    lga: session ? session?.user.lga : selectedRegion || "",
    state: session ? session.user?.state : selectedState || "",
  };
  
  const onSubmit = async (values: any) => {
    setLoading(true);
    try {
      const profileData = {
        ...values,
        lga: selectedRegion,
        state: selectedState,
      };

      // Call the updateProfile function from the service to update the profile
      const response = await updateProfile(session?.user._id as string, profileData);

      if (response.success) {
        // Show success toast message
        userUpdate(profileData);
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
      // Ensure state and lga are included in the form values before submitting
      if (!selectedState) {
        errors.state = "State is required";
      }
      if (!selectedRegion) {
        errors.lga = "LGA is required";
      }
      if (selectedState && selectedRegion) {
        onSubmit({ ...values, state: selectedState, lga: selectedRegion });
      }
    },
    profileValidations
  );

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
            onClick={() => setIsEditable((prev) => !prev)}
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
          <Dropdown
            placeholder={selectedState || "Select state"}
            options={Object.keys(statesAndRegions)}
            onSelect={handleStateSelect}
          />
          <Dropdown
            placeholder={selectedRegion || "Select region"}
            options={availableRegions.map((region) => region.name)}
            onSelect={handleRegionSelect}
          />
          <p>{errors.state || errors.lga}</p>
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
