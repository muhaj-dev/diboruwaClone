"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BackBtn } from "../profile/profile.styles";
import { Product, products, restaurants } from "@/constants";
import Image from "next/image";
import ProductCard from "@/component/ProductCard/ProductCard";
import useCartStore from "@/store/useCart.store";
import Modal from "@/component/modals/Modal";
import BackButton from "@/component/ui/BackButton/BackButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export type IFoodDetailProps = {
  id: string | number;
};

export const Container = styled.div`
  display: grid;
  gap: 20px;
  padding: 10%;
`;
export const Banner = styled.div`
  width: 500px;
  max-height: 500px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const PrimaryTimeSlot = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 5px 7px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--primary);
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

  .add {
    padding: 8px 15px;
    background: var(--primary);
    color: #fff;
    outline: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  .min_order {
    font-size: 15px;
    color: var(--primary-2);
  }
`;

const calculateDiscountedPrice = (price: any, discount: any) => {
  return price - price * discount;
};

const FoodDetail: React.FC<IFoodDetailProps> = ({ id }) => {
  const [product, setProduct] = useState<Product | null | undefined>(null);

  const { modal, closeModal, addToCart } = useCartStore();

  const { data: session } = useSession();
  const router = useRouter();

  const putToCart = () => {
    if (session) {
      if (product) {
        const discountedPrice =
          product && product.discount
            ? calculateDiscountedPrice(product.price, product.discount)
            : product && product.price;

        const productWithDiscountedPrice: Product = {
          ...product,
          price: discountedPrice,
          id,
        };
        addToCart(productWithDiscountedPrice);
      }
    } else {
      router.push("/signin");
      toast("Please sign in to add item to cart");
    }
  };
  console.log(product);

  // Find the product based on the provided id
  useEffect(() => {
    const selectedProduct = products.find((p) => p.slug === id);
    setProduct(selectedProduct);
  }, [id]);

  // If the product is not found, display an error message
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <Container>
      <div className="btn">
        <BackButton />
      </div>

      <Banner>
        {/* {product?.imageURL && ( */}
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

          {/* <div className="min_order">Min Order: ₦2000.00</div> */}

          <button className="add" onClick={putToCart}>
            add to cart
          </button>
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
