"use client";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  .ctaBtn {
    width: 200px;

    @media screen and (max-width: 768px) {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
`;

export const HeroList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
`;
export const HeroListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 18px;

  .dot {
    width: 20px;
    min-width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--primary);
  }

  .text {
    display: grid;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    align-items: baseline;
  }
`;

// export const HeroListItem = styled.div`
//   display: flex;
//   align-items: flex-start;
//   gap: 10px;
//   font-size: 18px;
//   .dot {
//     width: 20px;
//     min-width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     background: var(--primary);
//   }
// `;
export const HeroImageContainer = styled.div`
  width: 500px;
  height: 600px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  /* .image {
    width: 100%;
  } */
`;
export const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
  margin: auto;
  object-fit: contain;
`;

export const HWWSecetion = styled.div`
  padding: 5% 8%;

  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .save_time{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
  }
`;
export const HWWList = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 30px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;
export const HWWCard = styled.div`
  width: 100%;
  /* max-width: 370px; */
  height: 100%;
  padding: 15px;
  border-radius: 10px;
  background: var(--primary-20);

  .image {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background: var(--primary-20);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  p {
    font-size: 18px;
    line-height: 130%;
    color: #333;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    .image {
      width: 80px;
      height: 80px;
    }

    .title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 12px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const MenuSection = styled.section`
  /* padding: 5% 8%; */
  height: auto;

  .tag {
    .dot {
      width: 6px;
      height: 6px;
      border-radius: 10px;
      background: var(--primary);
    }

    width: max-content;
    display: flex;
    gap: 5px;
    margin: 20px auto;
    font-size: 16px;
    align-items: center;
    padding: 7px 12px;
    background: var(--primary-20);
    border: 1px solid var(--primary);
    border-radius: 20px;
  }
`;

export const MenuTitle = styled.h3`
  text-align: center;
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 10vh;
`;
export const MenuContainer = styled.div``;

const CTAIcon = styled(RiArrowRightSLine)`
  margin-left: 0.5rem;
  font-size: 15px;
  display: none;
  transition: display 0.3s;
`;

export const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  background-color: var(--primary-20);
  color: #fff;
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    /* background-color: #2563eb; */

    ${CTAIcon} {
      display: block;
    }
  }
`;