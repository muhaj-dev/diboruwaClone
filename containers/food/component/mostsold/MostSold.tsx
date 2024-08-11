import React from "react";
import "./mostsold.css";
import Link from "next/link";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";

const food = [
  {
    link: "/",
    img: "/images/dish.png",
  },
  {
    link: "/",
    img: "/images/dish.png",
  },
  {
    link: "/",
    img: "/images/dish.png",
  },
  {
    link: "/",
    img: "/images/dish.png",
  },
  {
    link: "/",
    img: "/images/dish.png",
  },
];
const MostSold = () => {
  return (
      <section className="mostsold_container">
          <div className="mostsold-frame">
              <p>Most Sold</p>
          </div>
    </section>
  );
};

export default MostSold;
