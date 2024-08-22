"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dropdown from "./ui/Dropdown";
import { FaMapMarkerAlt } from "react-icons/fa";
import Cookies from "js-cookie";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid var(--primary);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;

  h2 {
    font-size: 30px;
    margin-bottom: 30px;
  }

  p {
    font-size: 18px;
    margin-bottom: 5px;
  }

  .small {
    font-size: 14px;
    margin-bottom: 30px;
  }
`;

const FormControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SubmitButton = styled.div`
  width: max-content;
  padding: 10px 14px;
  border-radius: 8px;
  outline: none;
  border: none;
  margin-top: 20px;
  margin-left: auto;
  background: var(--primary);
  color: #fff;
  cursor: pointer;
`;

interface StateAndRegions {
  [key: string]: {
    locations: string[];
  };
}

const LocationModal: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [availableRegions, setAvailableRegions] = useState<string[]>([]);
  const [statesAndRegions, setStatesAndRegions] = useState<StateAndRegions>({});
  const [companyName] = useState<string>("diboruwa");

  useEffect(() => {
    const fetchStatesAndRegions = async () => {
      console.log('response')
      try {
        const response = await fetch(`${process.env.ADMIN_URL}/api/locations`);
        if (!response.ok) {
          throw new Error("Failed to fetch state and region data");
        }
        console.log(response)
        const data: StateAndRegions = await response.json();
        setStatesAndRegions(data);
      } catch (error) {
        console.error("Error fetching state and region data:", error);
      }
    };

    fetchStatesAndRegions();
  }, []);

  const handleStateSelect = (selectedOption: string | null) => {
    setSelectedState(selectedOption);
    if (selectedOption !== null) {
      setAvailableRegions(statesAndRegions[selectedOption]?.locations || []);
    }
    setSelectedRegion("");
  };

  const handleRegionSelect = (selectedOption: string) => {
    setSelectedRegion(selectedOption.toLowerCase());
  };

  const handleModalClose = () => {
    if (selectedState && selectedRegion) {
      // Save to cookies
      Cookies.set(`${companyName}_hasVisited`, "true", { expires: 1 });
      Cookies.set(`${companyName}_selectedState`, selectedState, { expires: 1 });
      Cookies.set(`${companyName}_selectedRegion`, selectedRegion, { expires: 1 });
    }
    setShowModal(false);
  };

  useEffect(() => {
    const hasVisited = Cookies.get(`${companyName}_hasVisited`);

    if (!hasVisited) {
      setShowModal(true);
    }
  }, [companyName]);

  return (
    <>
      {showModal && (
        <ModalWrapper>
          <ModalContent>
            <Header>
              <FaMapMarkerAlt size={70} style={{ marginBottom: "20px" }} color="green" />
              <h2>Set your Delivery location</h2>
              <p>
                Hello! DiboRuwa currently provides services in key cities across Nigeria.
              </p>
              <small className="small">
                Delivery options and fees may vary based on your location.
              </small>
            </Header>

            <FormControl>
              <Dropdown
                placeholder="Select city"
                options={Object.keys(statesAndRegions)}
                onSelect={handleStateSelect}
              />
              <Dropdown
                placeholder="Select region"
                options={availableRegions}
                onSelect={handleRegionSelect}
              />
            </FormControl>

            <SubmitButton onClick={handleModalClose}>Submit</SubmitButton>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default LocationModal;
