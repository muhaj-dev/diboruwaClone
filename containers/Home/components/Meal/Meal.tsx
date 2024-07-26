import React from 'react'
import "./meal.css";
import Link from 'next/link';

const food = [
    {
      link: '/',
      img: '/images/food plate.png',
    },
    {
      link: '/',
      img: '/images/food plate.png'
    },
    {
      link: '/',
      img: '/images/food plate.png'
    },
    {
      link: '/',
      img: '/images/food plate.png'
    },
  ]
export default function Meal() {
  return (
    <div>
      <div className=" meal">
      <div className="hero_frame">
       <div className="duration">
        <p>Meals</p>
        <div className="tags-container">
              <div className="tag-text-active ">Food</div>
              <div className="tag-text">Courier</div>
              <div className="tag-text">Laundry</div>
              <div className="tag-text">Grooming</div>
            </div>
       </div>
        <div className="meal_card">
        {food.map((item, index) =>(
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
    </div>
  )
}
