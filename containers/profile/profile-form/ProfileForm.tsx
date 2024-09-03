"use client";
import { BackButton2 } from "@/component/ui/BackButton/BackButton";
import { BiEditAlt } from "react-icons/bi";
import styled from "styled-components";

// Styled Components
const ProfileSettingContainer = styled.div`
  width: 68%;
  height: 100%;
  padding: 2rem;
  padding-bottom: 3.6rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
`;

const ProfileSettingTitle = styled.h3`
  color: var(--Black-100, #2a2a2a);
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const ProfileSettingsBox = styled.div`
  display: flex;
  width: 100%;
  padding: 6px 7px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  border-radius: 4px;
  background: var(--primary-color-1-white-40, #f9f9f9);
`;

const ProfileSettingsBoxTitle = styled.p`
  display: flex;
  padding: 0.5rem 3rem;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: var(--Soft-black, #565656);
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background: #fff;
  }
`;

const BackButtonWrapper = styled.div`
  margin-top: 1rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 4rem 0;
  border-radius: 4px;
  border: 0.5px solid rgba(118, 117, 117, 0.21);
  background: var(--white, #fefefe);
`;

const FormFirstInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 1rem;
`;

const FormName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const FormLabel = styled.label`
  color: var(--Soft-black, #565656);
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

const FormNameIcon = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const FormNameInput = styled.input`
  width: 14rem;
  height: 2.5rem;
  padding-left: 0.7rem;
  border: none;
  background: #f6f6f6;

  &::placeholder {
    color: var(--Soft-black, #565656);
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
`;

const FormTextareaBox = styled.div`
  width: 59%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const FormTextareaLabel = styled.label`
  color: var(--Soft-black, #565656);
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

const FormTextareaArea = styled.textarea`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background: rgba(246, 246, 246, 0.66);
  resize: none;

  &::placeholder {
    color: var(--Soft-black, #565656);
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
`;

const FormSubmit = styled.button`
  width: 59%;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: none;
  background: rgba(118, 117, 117, 0.22);
  color: #fcfcfc;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

export const ProfileForm = () => {
  return (
    <ProfileSettingContainer>
      <ProfileSettingTitle>Profile Settings</ProfileSettingTitle>
      <ProfileSettingsBox>
        <ProfileSettingsBoxTitle>Basic Information</ProfileSettingsBoxTitle>
        <ProfileSettingsBoxTitle>Security Setting</ProfileSettingsBoxTitle>
        <ProfileSettingsBoxTitle>Delivery Set-up</ProfileSettingsBoxTitle>
      </ProfileSettingsBox>

      <BackButtonWrapper>
        <BackButton2 />
      </BackButtonWrapper>

      <FormContainer>
        <FormFirstInput>
          <FormName>
            <FormLabel htmlFor="fullname">Name</FormLabel>
            <FormNameIcon>
              <FormNameInput
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Kelvin Chikezie"
              />
              <BiEditAlt className="form_name_input_icon" />
            </FormNameIcon>
          </FormName>

          <FormName>
            <FormLabel htmlFor="mobile">Mobile</FormLabel>
            <FormNameIcon>
              <FormNameInput
                type="text"
                name="mobile"
                id="mobile"
                placeholder="09034145971"
              />
              <BiEditAlt className="form_name_input_icon" />
            </FormNameIcon>
          </FormName>
        </FormFirstInput>

        <FormFirstInput>
          <FormName>
            <FormLabel htmlFor="state">State</FormLabel>
            <FormNameInput as="input" list="states" id="state" name="state" />
            <datalist id="states">
              <option value="Ilorin" />
              <option value="Kano" />
            </datalist>
          </FormName>

          <FormName>
            <FormLabel htmlFor="city">City</FormLabel>
            <FormNameInput as="input" list="cities" id="city" name="city" />
            <datalist id="cities">
              <option value="Ilorin" />
              <option value="Offa" />
              <option value="Omu-Aran" />
              <option value="Kano" />
              <option value="Wudil" />
              <option value="Gaya" />
            </datalist>
          </FormName>
        </FormFirstInput>

        <FormTextareaBox>
          <FormTextareaLabel htmlFor="address">Address</FormTextareaLabel>
          <FormTextareaArea
            id="address"
            name="address"
            rows={4}
            cols={40}
            placeholder="24 Louk Street off 120 tonimas"
          />
        </FormTextareaBox>

        <FormSubmit type="submit">Save</FormSubmit>
      </FormContainer>
    </ProfileSettingContainer>
  );
};
