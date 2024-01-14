"use client";

import ProductCard from "@/component/ProductCard/ProductCard";
import Modal from "@/component/modals/Modal";
import BackButton from "@/component/ui/BackButton/BackButton";
import Dropdown from "@/component/ui/Dropdown";
import { Restaurant, products, restaurants } from "@/constants";
import useCartStore from "@/store/useCart.store";
import React, { ChangeEvent, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";

export type IFoodListProps = {};

export const Container = styled.div`
  padding: 10%;

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

    @media screen  and (max-width: 768px) {
    flex-direction: column; 
    gap: 20px;
  }
`;

const SearchContainer = styled.div`
  width: 50%;
  /* margin: auto; */
 
  position: relative;

  @media screen and (max-width: 768px) {
  width: 100%;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 1px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary);
  color: #fff;
  transition: all 0.3s ease-in-out;
`;

const SearchInput = styled.input`
  outline: none;
  border: 1px solid var(--primary-20);
  padding: 10px 15px;
  border-radius: 40px;
  width: 100%;
  height: 40px;

  transition: all 0.5s ease-in-out;

  &:focus {
    border: 1px solid var(--primary);
  }
`;

export const ProductListing = styled.div`
  margin-top: 30px;
  /* width: inherit; */
  display: flex;
  /* grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); */
  /* grid-template-columns: repeat(4, 1fr); */
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  /* .card {
    width: max-content;
  } */

  /* @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  } */
`;

const FoodList: React.FC<IFoodListProps> = ({}) => {
  const { modal, closeModal } = useCartStore();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<string>("vendor"); 
  const options = ['Name', 'Vendor', 'Category'];

  const handleSelect = (selectedOption: string) => {
    console.log(`Selected option: ${selectedOption}`);
    setFilter(selectedOption.toLowerCase())
  };

  const filteredProducts = products.filter((product) => {
    if (filter === "name") {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filter === "vendor") {
      return product.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (filter === "category") {
      return product.categories.some((category: string) =>
        category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return true; // Return true if no filter matches
  });



  const renderMenuItems = () => {
    return filteredProducts.map((menuItem) => (
      <div key={menuItem.id} className="card">
        <ProductCard product={menuItem} active={true} />
      </div>
    ));
  };
  return (
    <Container>
      <h2>Food Menu</h2>
      <Header>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder={`Search by ${filter}`}
            value={searchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />
          <SearchButton>
            <CiSearch />
          </SearchButton>
        </SearchContainer>

        <Dropdown options={options} onSelect={handleSelect} />
      </Header>
     

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
