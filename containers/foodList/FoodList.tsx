"use client";

import ProductCard from "@/component/ProductCard/ProductCard";
import Modal from "@/component/modals/Modal";
import BackButton from "@/component/ui/BackButton/BackButton";
import { Restaurant, restaurants } from "@/constants";
import useCartStore from "@/store/useCart.store";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export type IFoodListProps = {
  id: string | number;
};

export const Container = styled.div`
  padding: 10%;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductListing = styled.div`
  margin-top: 30px;
  /* width: inherit; */

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FoodList: React.FC<IFoodListProps> = ({ id }) => {
  const [restaurant, setRestaurant] = useState<Restaurant | null | undefined>(null);

   const { modal, closeModal } = useCartStore();

  const getRestaurantById = (id: number | string): Restaurant | undefined => {
    return restaurants.find((restaurant) => restaurant.id === id);
  };

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const restaurantData = await getRestaurantById(id);
        setRestaurant(restaurantData);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchRestaurantData();
  }, [id]);

  if (!restaurant) {
    // You can add a loading state or handle not found scenario here
    return <div>Loading...</div>;
  }

  const renderMenuItems = () => {
    if (restaurant) {
      return restaurant.menu.map((menuItem) => (
        <div key={menuItem.id}>
          <ProductCard product={menuItem} active={true} restaurant={restaurant.id} />
          {/* <h3>{menuItem.title}</h3>
                <p>Price: ${menuItem.price}</p>
                Render other details as needed */}
        </div>
      ));
    } else {
      return <p>No restaurant selected</p>;
    }
  };
  return (
    <Container>
      <Header>
        <BackButton />
      </Header>
      <h2>Restaurant Menu</h2>

      <ProductListing>{renderMenuItems()}</ProductListing>

      <Modal
        isOpen={modal.isOpen}
        type={modal.type}
        message={modal.message}
        onClose={closeModal}
      />
    </Container>
  );
};

export default FoodList;
