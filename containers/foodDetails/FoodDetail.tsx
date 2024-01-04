"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BackBtn } from "../profile/profile.styles";
import { Product, restaurants } from "@/constants";
import Image from "next/image";
import ProductCard from "@/component/ProductCard/ProductCard";
import useCartStore from "@/store/useCart.store";
import Modal from "@/component/modals/Modal";

export type IFoodDetailProps = {
  id: string | number;
  restaurant: string;
};

export const Container = styled.div`
  display: grid;
  gap: 20px;
  padding: 10%;
`;
export const Banner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 22px;
  position: relative;
`;
export const PrimaryTimeSlot = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;
export const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
`;
export const Details = styled.div`
  display: grid;
  gap: 10px;
`;
export const Cartegories = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const Cartegory = styled.div`
  font-size: 18px;
  color: var(--primary);
`;
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #d6d6d6;
  margin-bottom: 20px;
`;
export const Extras = styled.div`
  margin-top: 30px;
  /* width: inherit; */

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const SecondaryTimeSlot = styled.div`
  display: flex;
  justify-content: space-between;

  .opening_time {
    .title {
      font-size: 15px;
      margin-bottom: 8px;
    }

    .time {
      color: rgba(182, 181, 181, 0.7);
    }
  }

  .min_order {
    font-size: 15px;
    color: var(--primary-2);
  }
`;

const FoodDetail: React.FC<IFoodDetailProps> = ({ id, restaurant }) => {
  const [product, setProduct] = useState<Product | null | undefined>(null);

  const { modal, closeModal } = useCartStore();

  useEffect(() => {
    const fetchRestaurantData = () => {
      console.log(
        "Fetching restaurant data for ID:",
        id,
        "Restaurant:",
        restaurant
      );

      const restaurantData = restaurants.find((res) => res.id === restaurant);

      if (restaurantData) {
        console.log(restaurantData.menu);
        const foodItem = restaurantData.menu.find((item) => item.slug === id);

        console.log(foodItem);

        if (foodItem) {
          console.log("Found food item:", foodItem);
          setProduct(foodItem);
        } else {
          console.error("Food item not found for ID:", id);
        }
      } else {
        console.error("Restaurant not found for ID:", restaurant);
      }
    };

    fetchRestaurantData();
  }, [id, restaurant]);

  console.log("Final product:", product);

  console.log(product);
  return (
    <Container>
      <BackBtn />
      <Banner>
        <Image
          src={product?.imageURL}
          alt={`product ${product?.title}`}
          fill={true}
        />
        <PrimaryTimeSlot>{product?.prep_time}</PrimaryTimeSlot>
      </Banner>

      <Details>
        <Title>{product?.title}</Title>
        <Cartegories>
          {product?.categories.map((cat, index) => (
            <Cartegory key={index}>{cat}</Cartegory>
          ))}
        </Cartegories>
        <Divider />
        <SecondaryTimeSlot>
          <div className="opening_time">
            <div className="title">Opening time</div>
            <div className="time">{product?.opening_time}</div>
          </div>

          <div className="min_order">Min Order: ₦2000.00</div>
        </SecondaryTimeSlot>

        {product?.extras && (
          <>
            {" "}
            <h4>Extras</h4>
            <Divider />
            <Extras>
              {product?.extras?.map((prod, index) => (
                <div key={index}>
                  <ProductCard
                    product={prod}
                    active={true}
                    // restaurant={restaurant.id}
                  />
                  {/* <h3>{menuItem.title}</h3>
          <p>Price: ${menuItem.price}</p>
          Render other details as needed */}
                </div>
              ))}
            </Extras>
          </>
        )}
      </Details>
      <Modal
        isOpen={modal.isOpen}
        type={modal.type}
        message={modal.message}
        onClose={closeModal}
      />
    </Container>
  );
};

export default FoodDetail;
