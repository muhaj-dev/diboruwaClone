"use client";
import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Dropdown from "./ui/Dropdown";
import { FaMapMarkerAlt } from 'react-icons/fa';

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

  .small{
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
  const [companyName, setCompanyName] = useState<string>("diboruwa");

  const statesAndRegions: StateAndRegions = useMemo(() => {
    return {
      Kano: {
        locations: [
          "Danbare",
          "Rimin gata",
          "Rijia zaki",
          "Jambulo",
          "Buk old site",
          "Buk new site",
          "Kabuga",
          "Sabon Gari",
          "Hotoro",
          "Naibawa",
          "Gwale",
          "Tarauni",
          "Kano Municipal",
          "Dala",
          "Zoo Road",
        ],
      },
      Ilorin: {
        locations: [
          "Taiwo road",
          "Tanke",
          "Oja oba",
          "Challenge",
          "Sawmill",
          "Unilorin",
          "Kwarapoly",
          "Unity road",
          "Post office",
          "Adeta",
          "Agbooba",
          "Adewole",
          "Gaa-Akanbi",
          "Fate",
          "Basin",
          "Sawmill",
          "Kulende",
          "Pakata",
          "Oloje",
          "Oko olowo",
        ],
      },
    };
  }, []);

  const handleStateSelect = (selectedOption: string | null) => {
    console.log(`Selected state: ${selectedOption}`);
    setSelectedState(selectedOption);
    if (selectedState && selectedOption !== null) {
      setAvailableRegions(statesAndRegions[selectedOption]?.locations);
    }

    setSelectedRegion("");
  };

  const handleRegionSelect = (selectedOption: string) => {
    console.log(`Selected option: ${selectedOption}`);
    setSelectedRegion(selectedOption.toLowerCase());
  };

  const handleModalClose = async () => {
    if (selectedState && selectedRegion) {
      try {
        // Send selected state and region to backend API
        const response = await fetch("/api/locations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            state: selectedState,
            region: selectedRegion,
            companyName,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to save location data");
        }

        console.log("Location data saved successfully");

        // Optionally, save to localStorage if you still need to
        localStorage.setItem(`${companyName}_hasVisited`, "true");
        localStorage.setItem(`${companyName}_selectedState`, selectedState);
        localStorage.setItem(`${companyName}_selectedRegion`, selectedRegion);
      } catch (error) {
        console.error("Error saving location data:", error);
      }
    }
    setShowModal(false);
  };

  useEffect(() => {
    const hasVisited = localStorage.getItem(`${companyName}_hasVisited`);

    if (selectedState) {
      setAvailableRegions(statesAndRegions[selectedState]?.locations);
    }
    if (!hasVisited) {
      setShowModal(true);
    }

    const resetLocalStorage = () => {
      console.log('Resetting local storage');
      localStorage.removeItem(`${companyName}_hasVisited`);
      localStorage.removeItem(`${companyName}_selectedState`);
      localStorage.removeItem(`${companyName}_selectedRegion`);
    };

    const currentTime = new Date();
    const resetTime = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate() + 1,
      0, 0, 0,
    );
    const msUntilReset = resetTime.getTime() - currentTime.getTime();

    const timeoutId = setTimeout(resetLocalStorage, msUntilReset);

    const intervalId = setInterval(resetLocalStorage, 24 * 60 * 60 * 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [companyName, selectedState, statesAndRegions]);

  return (
    <>
      {showModal && (
        <ModalWrapper>
          <ModalContent>
            <Header>
              <FaMapMarkerAlt size={70} style={{ marginBottom: '20px' }} color="green" />
              {" "}
              <h2>Set your Delivery location</h2>
              <p>
                Hello! DiboRuwa currently provides services in key cities
                across Nigeria
              </p>
              <small className="small">
                Delivery options and fees may vary based on your location
              </small>
            </Header>

            <FormControl>
              <Dropdown
                placeholder="select city"
                options={Object.keys(statesAndRegions)}
                onSelect={handleStateSelect}
              />
              <Dropdown
                placeholder="select region"
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
