export interface DataItem {
  _id?: number;
  tag?: string;
  link?: string;
  image?: string;
  bigImg?: string;
  foodText?: string;
  map?: string;
  foodImg?: string;
  bike?: string;
  title?: string;
}

export interface Category {
  [key: string]: DataItem[];
}
const Data = [
  {
    _id: 1,
    tag: "Food",
    bigImg: "/images/food.png",
    bike: "/images/Frame 2610175.png",
    foodImg: "/images/Frame 2610173 (1).png",
    foodText:
      " Order from your favorite restaurant and get your meal delivered in minutes.",
    map: "/images/map.png",
  },
  {
    _id: 2,
    tag: "Moving",
    bigImg: "/images/Subtract.png",
    bike: "/images/Frame 2610192.png",
    foodImg: "/images/Frame 2610173.png",
    foodText:
      "Moving to a new building? No worries, courier is here to help you convey your properties.",
    map: "/images/map.png",
  },
  {
    _id: 3,
    tag: "Laundry",
    bigImg: "/images/Subtract (2).png",
    bike: "/images/Frame 2610175.png",
    foodImg: "/images/Frame 2610173 (1).png",
    foodText:
      " Get your clothes washed and delivered to your door step within an hour.",
    map: "/images/Frame 2610169.png",
  },
  {
    _id: 4,
    tag: "Cleaning",
    bigImg: "/images/food.png",
    bike: "/images/Frame 2610175.png",
    foodImg: "/images/Frame 2610173 (1).png",
    foodText:
      " Order from your favorite restaurant and get your meal delivered in minutes.",
    map: "/images/map.png",
  },
  {
    _id: 5,
    tag: "Groceries",
    bigImg: "/images/Subtract (1).png",
    bike: "/images/Frame 2610175.png",
    foodImg: "/images/Frame 2610173 (1).png",
    foodText:
      "Book a barber for home service to get a nice haircut at your own pace.",
    map: "/images/Frame 2610169 (1).png",
  },
];
export default Data;

export const TopResturant: Category[] = [
  {
    TopResturantNearYou: [
      {
        title: "Top Resturant Near you",
      },
      {
        tag: "Food",
        link: "/",
        image: "/images/resturant.png",
        _id: 2,
      },
      {
        tag: "Food",
        link: "/",
        image: "/images/Rectangle 248 (4).png",
        _id: 3,
      },
      {
        tag: "Food",
        link: "/",
        image: "/images/Rectangle 248 (2).png",
        _id: 4,
      },
      {
        tag: "Food",
        link: "/",
        image: "/images/Rectangle 248 (3).png",
        _id: 5,
      },
    ],
  },
  {
    TopMovingNearYou: [
      {
        title: "Moving Near You",
      },
      {
        tag: "Moving",
        link: "/",
        image: "/images/Rectangle 248 (8).png",
        _id: 7,
      },
      {
        tag: "Moving",
        link: "/",
        image: "/images/Rectangle 248 (7).png",
        _id: 8,
      },
      {
        tag: "Moving",
        link: "/",
        image: "/images/Rectangle 248 (6).png",
        _id: 9,
      },
      {
        tag: "Moving",
        link: "/",
        image: "/images/Rectangle 248 (5).png",
        _id: 10,
      },
    ],
  },
  {
    TopLaundryNearYou: [
      {
        title: "Laundry Near You",
      },
      {
        tag: "Laundry",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 12,
      },
      {
        tag: "Laundry",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 13,
      },
      {
        tag: "Laundry",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 14,
      },
      {
        tag: "Laundry",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 15,
      },
    ],
  },
  {
    TopCleaningNearYou: [
      {
        title: "Cleaning Near You",
      },
      {
        tag: "Cleaning",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 17,
      },
      {
        tag: "Cleaning",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 18,
      },
      {
        tag: "Cleaning",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 19,
      },
      {
        tag: "Cleaning",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 20,
      },
    ],
  },
  {
    TopGroceriesNearYou: [
      {
        title: "Groceries Near You",
      },
      {
        tag: "Groceries",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 22,
      },
      {
        tag: "Groceries",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 23,
      },
      {
        tag: "Groceries",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 24,
      },
      {
        tag: "Groceries",
        link: "/",
        image: "/images/Rectangle 248 (9).png",
        _id: 25,
      },
    ],
  },
];

import { IoMdStopwatch } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";

export const FoodVendor = [
  {
    title: "Most Sold",
    items: [
      {
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
    ],
  },
];
export const MinsMealsData = [
  {
    title: "30 minutes meal",
    items: [
      {
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
    ],
  },
];
export const FreeDeliveryData = [
  {
    title: "Free Delivery",
    items: [
      {
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
      {
        img: "/images/Rectangle 248 (10).png",
        prizeLink: "/cart",
        favoriteIcon: MdFavoriteBorder,
        smallTitle: "Fried Rice",
        starIcon: FaStar,
        rating: "4.5",
        timeIcon: IoMdStopwatch,
        timeText: "30mins",
        remenderText: "10 liters remaining",
        prizeText: "$40",
        prizeIcon: FaBagShopping,
      },
    ],
  },
];

export const DiscountSale = [
  {
    img: "/images/component 113 (2).png",
    alt: "hot jollof Rice",
  },
  {
    img: "/images/component 113 (2).png",
    alt: "hot jollof Rice",
  },
  {
    img: "/images/component 113 (2).png",
    alt: "hot jollof Rice",
  },
];
