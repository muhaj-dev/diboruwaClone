"use client";

import useQuote from "@/hooks/useQuote";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import NotificationModal from "../NotificationModal";
import { BsPlus } from "react-icons/bs";

// Define the LaundryItem interface
interface LaundryItem {
  id: number;
  name: string;
  amount: number;
}

const Container = styled.div`
  background: var(--primary-20);
  padding: 30px;
  border-radius: 20px;
  height: 45vh;

  display: flex;
  flex-direction: column;
`;
const MultiSelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;
  border-radius: 8px;
  width: 100%;
  /* height: 100%; */
`;

const MultiSelectDropdown = styled.div`
  position: absolute;
  border: 1px solid #ccc;
  max-height: 150px;
  overflow-y: auto;
  background-color: #fff;
  z-index: 1;
  font-size: 18px;
  width: 100%;
  border-radius: 12px;
  top: 105%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    width: 5px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: var(
      --primary-20
    ); /* Track color (the background behind the scrollbar) */
  }

  &::-webkit-scrollbar-thumb {
    background: var(
      --primary-20
    ); /* Thumb color (the draggable part of the scrollbar) */
    border-radius: 20px; /* Rounded corners on the thumb */
  }
`;
const MultiSelectOption = styled.div`
  padding: 10px 20px;
  font-size: 18px;
  background-color: var(--primary-20);
`;
const SelectedOptions = styled.div`
  display: grid;
  gap: 10px;
  margin: 20px;
  max-height: 150px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 2px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: var(
      --primary-20
    ); /* Track color (the background behind the scrollbar) */
  }

  &::-webkit-scrollbar-thumb {
    background: var(
      --primary-20
    ); /* Thumb color (the draggable part of the scrollbar) */
    border-radius: 20px; /* Rounded corners on the thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* Thumb color on hover */
  }
`;

const MultiSelectButton = styled.button`
  display: flex;
  align-items: center;

  padding: 2px  5px;
  font-size: 18px;
  background-color: var(--primary-20);
  width: 100%;
  color: #000000;
  border: none;
  cursor: pointer;
  text-align: left;
  border-radius: 8px;
  transition: all 0.5s ease;
 

  button {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background: #fff;
    border-radius: 8px;
    outline: none;
    border: none;
    transition: all 0.5s ease;
    color: var(--primary);

    &:hover {
    background-color: var(--primary-20);
    color: #fff;
  }
  }
`;

const CustomInput = styled.input`
  height: 100%;
  width: 100%;
  background: transparent;
  padding: 15px 20px;
  outline: none;
  border: none;
 
`;
const Counter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  gap: 8px;
`;

const CounterButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: var(--primary);
  border-radius: 5px;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px 20px;
  font-size: 18px;
  background-color: var(--primary-20);
`;

const ItemName = styled.span`
  flex-grow: 1;
  padding: 0 8px;
`;

const Notification = styled.div`
  color: #ff0000;
  margin-top: 10px;
`;
const QuoteButton = styled.button`
  background: var(--primary);
  padding: 10px 20px;
  border-radius: 8px;
  color: #fff;
  margin-top: auto;
  margin-left: auto;
  outline: none;
  border: none;

  &:disabled {
    background: var(--primary-20);
  }
`;

const LaundryCounter: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [customItem, setCustomItem] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<LaundryItem[]>([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [quote, setQuote] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const { handleQuote, showModal, modalErrorType, modalMessage, closeModal } =
    useQuote();

  const dropdownRef = useRef<HTMLDivElement | null>(null); 
  const laundryItems: LaundryItem[] = [
    { id: 1, name: "T-Shirt", amount: 0 },
    { id: 2, name: "Jeans", amount: 0 },
    { id: 3, name: "duve", amount: 0 },
    { id: 4, name: "curtains", amount: 0 },
    { id: 5, name: "others", amount: 0 },
    // Add more laundry items as needed
  ];

  const handleItemClick = (item: LaundryItem) => {
    if (selectedItems.some((i) => i.id === item.id)) {
      // If the item is already in the selectedItems array, update its amount
      const updatedItems = selectedItems.map((i) =>
        i.id === item.id ? { ...i, amount: i.amount + 1 } : i
      );
      setSelectedItems(updatedItems);
    } else {
      // If the item is not in the selectedItems array, add it with amount 1
      setSelectedItems([...selectedItems, { ...item, amount: 1 }]);
    }
  };

  const handleDecrease = (item: LaundryItem) => {
    const updatedItems = selectedItems.map((i) => {
      if (i.id === item.id && i.amount > 0) {
        return { ...i, amount: i.amount - 1 };
      }
      return i;
    });
    setSelectedItems(updatedItems);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to add a custom item to the selected items
  const handleAddCustomItem = () => {
    if (customItem.trim() !== "") {
      setSelectedItems((prevSelectedItems) => [
        ...prevSelectedItems,
        { id: Date.now(), name: customItem, amount: 1 }, // Assign a unique id
      ]);
      setCustomItem(""); // Clear the input field after adding the item
    }
  };

  const handleGetQuote = async () => {
    if (selectedItems.some((item) => item.amount <= 0)) {
      setNotification("Please add item amounts before getting a quote.");
    } else {
      const quoteText = selectedItems
        .filter((item) => item.amount > 0)
        .map((item) => `${item.name} -- ${item.amount}`)
        .join(", ");

      setQuote(`Quote: ${quoteText}`);
      setNotification(null);

      console.log(quoteText);

      try {
        const data = { type: "laundry", quote: selectedItems };
        handleQuote(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container>
     
      <MultiSelectWrapper ref={dropdownRef}>
        {/* Add an input field for custom items */}
        <MultiSelectButton onClick={() => setDropdownOpen(!isDropdownOpen)}>
          <CustomInput
            type="text"
            placeholder="Type a custom item..."
            value={customItem}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCustomItem(e.target.value)
            }
          />
          <button onClick={handleAddCustomItem}>
            <BsPlus />
          </button>
        </MultiSelectButton>
        {isDropdownOpen && (
          <MultiSelectDropdown>
            {laundryItems.map((item) => (
              <MultiSelectOption
                key={item.id}
                onClick={() => {
                  handleItemClick(item);
                  setDropdownOpen(false);
                }}
              >
                {item.name}
              </MultiSelectOption>
            ))}
          </MultiSelectDropdown>
        )}
      </MultiSelectWrapper>

      <SelectedOptions>
        {selectedItems.map((item) => (
          <ItemInfo key={item.id}>
            <ItemName>{item.name}</ItemName>
            <Counter>
              <CounterButton onClick={() => handleDecrease(item)}>
                -
              </CounterButton>
              <span>{item.amount}</span>
              <CounterButton onClick={() => handleItemClick(item)}>
                +
              </CounterButton>
            </Counter>
          </ItemInfo>
        ))}
      </SelectedOptions>
      {notification && <Notification>{notification}</Notification>}
      <QuoteButton
        onClick={() => {
          if (session) {
            handleGetQuote();
          } else {
            router.push("signin");
            toast("please sign in");
          }
        }}
       
      >
        Get a Quote
      </QuoteButton>
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

export default LaundryCounter;
