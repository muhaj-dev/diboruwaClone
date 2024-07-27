import React from "react";
import "./restAdvert.css";
import Link from "next/link";


const rest = [
  {
    link: '/',
    img: '/images/resturant.png'
  },
  {
    link: '/',
    img: '/images/resturant.png'
  },
  {
    link: '/',
    img: '/images/resturant.png'
  },
  {
    link: '/',
    img: '/images/resturant.png'
  },
]

export default function RestAdvert() {
  return (
    <div className=" rest">
      <div className="hero_frame">
        <p className="title">Top Restaurants Near You</p>
        <div className="rest_card">
        {rest.map((item, index) =>(
          <div key={index} className="card">
            <img
              className=""
              // width={300}
              // height={100}
              src={item.img}
              alt="Chef preparing food"
            />
            <Link href={item.link}>
              <p>visit</p>
              <p>visit</p>
            </Link>
          </div>

        ))}

        </div>
      </div>
    </div>
  );
}
