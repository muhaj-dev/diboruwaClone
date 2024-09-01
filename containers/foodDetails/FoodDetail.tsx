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
import styles from "./food-details.module.css";
import { DisplayFood } from "./containers/detailed-food-container/display-food/DisplayFood";
import { CheckoutStore } from "./containers/checkout-store/CheckoutStore";
import { SimilarMeal } from "./containers/similar-meal/SimilarMeal";

export type IFoodDetailProps = {
  id: string;
};

const FoodDetail: React.FC<IFoodDetailProps> = ({ id }) => {
  return (
    <section className={styles.food_details_container}>
      <div className={styles.food_details_frame}>
        <div className="btn">
          <BackButton />
        </div>
        <div className={styles.df_cs}>
          <DisplayFood />
          <CheckoutStore />
        </div>
        <SimilarMeal id={id} />
      </div>
    </section>
  );
};

export default FoodDetail;

// const calculateDiscountedPrice = (price: any, discount: any) => {
//   return price - price * discount;
// };

// const [product, setProduct] = useState<Product | null | undefined>(null);

// const { modal, closeModal, addToCart } = useCartStore();

// const { data: session } = useSession();
// const router = useRouter();

// const putToCart = () => {
//   if (session) {
//     if (product) {
//       const discountedPrice =
//         product && product.discount
//           ? calculateDiscountedPrice(product.price, product.discount)
//           : product && product.price;

//       const productWithDiscountedPrice: Product = {
//         ...product,
//         price: discountedPrice,
//         id,
//       };
//       addToCart(productWithDiscountedPrice);
//     }
//   } else {
//     router.push("/signin");
//     toast("Please sign in to add item to cart");
//   }
// };
// console.log(product);

// // Find the product based on the provided id
// useEffect(() => {
//   const selectedProduct = products.find((p) => p.slug === id);
//   setProduct(selectedProduct);
// }, [id]);

// // If the product is not found, display an error message
// if (!product) {
//   return <div>Product not found</div>;
// }

// <Container>

//   <Banner>
//     {/* {product?.imageURL && ( */}
//     <Image
//       src={product?.imageURL}
//       alt={`product ${product?.title}`}
//       fill={true}
//     />

//     <PrimaryTimeSlot>{product?.prep_time}</PrimaryTimeSlot>
//   </Banner>

//   <Details>
//     <Title>{product?.title}</Title>
//     <Cartegories>
//       {product?.categories.map((cat, index) => (
//         <Cartegory key={index}>{cat}</Cartegory>
//       ))}
//     </Cartegories>
//     <Divider />
//     <SecondaryTimeSlot>
//       <div className="opening_time">
//         <div className="title">Opening time</div>
//         <div className="time">{product?.opening_time}</div>
//       </div>

//       {/* <div className="min_order">Min Order: ₦2000.00</div> */}

//       <button className="add" onClick={putToCart}>
//         add to cart
//       </button>
//     </SecondaryTimeSlot>

//     {product?.extras && (
//       <>
//         {" "}
//         <h4>Extras and Drinks</h4>
//         <Divider />
//         <Extras>
//           {product?.extras?.map((prod, index) => (
//             <div key={index}>
//               <ProductCard
//                 product={prod}
//                 active={true}
//                 // restaurant={restaurant.id}
//               />
//               {/* <h3>{menuItem.title}</h3>
//       <p>Price: ${menuItem.price}</p>
//       Render other details as needed */}
//             </div>
//           ))}
//         </Extras>
//       </>
//     )}
//   </Details>
//   <Modal
//     isOpen={modal.isOpen}
//     type={modal.type}
//     message={modal.message}
//     onClose={closeModal}
//   />
// </Container>
