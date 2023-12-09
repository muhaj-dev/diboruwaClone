"use client";
import { useCallback, useState } from "react";
import CategorySlide from "../CategorySlide/CategorySlides";
import { Container, ProductListing, Title } from "./productList.styles";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../ui/button/Button";
import { Product } from "@/utils/types/types";
import PecanRice from "../../public/pecan/pecan_rice.jpg"
import { assets } from "@/public/assets";

const products: Product[] = [
  {
    id: "1",
    title: "Jollof rice and chicken",
    price: 2050,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691930939/diboruwa/Screenshot_from_2023-07-23_12-41-36_gqry1k.png",
    category: "Rice and Grains",
  },
  {
    id: "2",
    title: "Jollof rice and chicken with coslow",
    price: 2250,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1700398660/jollof_rice_and_chicken_with_coslow_wb3hdb.jpg",
    category: "Rice and Grains",
  },
  {
    id: "3",
    title: "Ofada rice",
    price: 1200,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691931036/diboruwa/Screenshot_from_2023-07-23_12-43-31_fachft.png",
    category: "Rice and Grains",
  },
  {
    id: "4",
    title: "Masa",
    price: 700,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691930984/diboruwa/Screenshot_from_2023-07-23_12-25-21_hc8kbh.png",
    category: "Swallow",
  },
  {
    id: "4",
    title: "Beans, Bread and Plantain",
    price: 1100,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938465/diboruwa/Screenshot_from_2023-08-13_15-51-22_vzskcj.png",
    category: "Beans",
  },
  // {
  //   id: "5",
  //   title: "Banana",
  //   price: 700,
  //   imgUrl: "https://example.com/banana.jpg",
  //   category: "Fruits",
  // },
  {
    id: "6",
    title: "Meat pie",
    price: 500,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938468/diboruwa/Screenshot_from_2023-08-13_15-52-34_fofcpm.png",
    category: "Snacks",
  },
  {
    id: "7",
    title: "Custard and Akara",
    price: 460,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691931043/diboruwa/Screenshot_from_2023-07-23_12-51-05_kt11tb.png",
    category: "Breakfast",
  },
  // {
  //   id: "8",
  //   title: "Yogurt",
  //   price: 1.25,
  //   imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691930939/diboruwa/Screenshot_from_2023-07-23_12-41-36_gqry1k.png",
  //   category: "Dairy",
  // },
  // {
  //   id: "9",
  //   title: "Rice and Seafood",
  //   price: 1300,
  //   imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691931367/diboruwa/thai-food-shrimp-squid-fried-cooked-with-long-beans-rice_acmjpp.jpg",
  //   category: "Rice and Grains",
  // },
  // {
  //   id: "10",
  //   title: "Toaster",
  //   price: 600,
  //   imgUrl: "https://example.com/toaster.jpg",
  //   category: "Rice and Grains",
  // },
  // {
  //   id: "11",
  //   title: "Apple",
  //   price: 500,
  //   imgUrl: "https://example.com/apple.jpg",
  //   category: "Fruits",
  // },
  {
    id: "12",
    title: "Pap and Beans Cake (Kunu and Kose)",
    price: 360,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691931001/diboruwa/Screenshot_from_2023-07-23_12-48-37_aeja1o.png",
    category: "Breakfast",
  },
  // {
  //   id: "13",
  //   title: "Milk",
  //   price: 480,
  //   imgUrl: "https://example.com/milk.jpg",
  //   category: "Rice and Grains",
  // },
  {
    id: "14",
    title: "Tuwo and Egusi",
    price: 1100,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691936446/diboruwa/Screenshot_from_2023-07-23_12-24-59_w5xtrh.png",
    category: "Swallow",
  },
  {
    id: "15",
    title: "Tuwo da Miya",
    price: 800,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691936460/diboruwa/Screenshot_from_2023-07-23_12-11-27_bvdnwl.png",
    category: "Swallow",
  },
  {
    id: "16",
    title: "1300",
    price: 49.99,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691936467/diboruwa/Screenshot_from_2023-07-23_12-07-34_f2ue5j.png",
    category: "Soup",
  },
  {
    id: "17",
    title: "Efo riro",
    price: 1300,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938479/diboruwa/Screenshot_from_2023-08-13_15-53-36_juo2h5.png",
    category: "Soup",
  },
  {
    id: "18",
    title: "Efo riro",
    price: 1300,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938474/diboruwa/Screenshot_from_2023-08-13_15-51-40_qaokht.png",
    category: "Soup",
  },
  {
    id: "19",
    title: "Efo riro",
    price: 1300,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938465/diboruwa/Screenshot_from_2023-08-13_15-51-57_crohno.png",
    category: "Soup",
  },
  {
    id: "20",
    title: "Dan wake",
    price: 500,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691936473/diboruwa/Screenshot_from_2023-07-23_12-10-00_vb6bd5.png",
    category: "Swallow",
  },
  // {
  //   id: "21",
  //   title: "Beans and Bread (Ewa agonyi)",
  //   price: 700,
  //   imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938465/diboruwa/Screenshot_from_2023-08-13_15-51-22_vzskcj.png",
  //   category: "Beans",
  // },
  {
    id: "21",
    title: "Ekuru and pepper stew with pommo",
    price: 1200,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698612208/Ekuru_plus_Fish_we3fqs.jpg",
    category: "Beans",
  },
  {
    id: "22",
    title: "Vegetable Soup with Amala",
    price: 1300,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701210418/-5967755370602545238_121_ruwgxn.jpg",
    category: "Swallow",
  },
  {
    id: "23",
    title: "White rice with vegetable soup and plantain",
    price: 1500,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701210490/White%20rice%20with%20vegetable%20soup%20and%20plantain%201500.jpg",
    category: "Rice and Grains",
  },
  {
    id: "24",
    title: "Ewa agoyin (beans) with ponmo, plantain and bread",
    price: 1600,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701211063/photo_5967755370602545226_y_gxixvt.jpg",
    category: "Beans",
  },
  {
    id: "25",
    title: "Goat pepper soup",
    price: 990,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701211347/Screenshot_from_2023-11-28_23-40-21_iixjzs.png",
    category: "Soup",
  },
  {
    id: "26",
    title: "1 liter of stew with fish, Ponmo, and boiled egg",
    price: 8990,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701211999/Screenshot_from_2023-11-28_23-47-35_luktkz.png",
    category: "Soup",
  },
  {
    id: "27",
    title: "Jolof spaghetti with chicken and plantain",
    price: 1690,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701212285/photo_5967755370602545228_y_rnxkis.jpg",
    category: "Rice and Grains",
  },
  {
    id: "27",
    title: "Jolof spaghetti with chicken and plantain",
    price: 1690,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701212285/photo_5967755370602545228_y_rnxkis.jpg",
    category: "Rice and Grains",
  },
  {
    id: "28",
    title: "Pounded yam with egusi soup and goat meat",
    price: 1680,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701212668/photo_5967755370602545231_y_ard2qd.jpg",
    category: "Swallow",
  },
  {
    id: "29",
    title: "Pecan rice with beaf",
    price: 1250,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642839/pecan_rice_cj3hmz.jpg",
    category: "Rice and Grains",
  },
  {
    id: "30",
    title: "Meat pie",
    price: 500,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Meatpie_kkswmo.jpg",
    category: "Snacks",
  },
  {
    id: "31",
    title: "Burger beef or chicken",
    price: 2500,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Burger_beef_or_chicken_t99bj5.jpg",
    category: "Snacks",
  },
  {
    id: "32",
    title: "Sandwich",
    price: 1000,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642850/sandwich_nhnrkn.jpg",
    category: "Snacks",
  },
  {
    id: "33",
    title: "Doughnut",
    price: 500,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642846/Doughnut_vmnkac.jpg",
    category: "Snacks",
  },
  {
    id: "33",
    title: "Shawarma",
    price: 1480,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Shawarma_large_q50eqv.jpg",
    category: "Snacks",
  },
  {
    id: "33",
    title: "Shawarma medium",
    price: 1690,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Shawarma_large_q50eqv.jpg",
    category: "Snacks",
  },
  {
    id: "33",
    title: "Shawarma large",
    price: 1980,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Shawarma_large_q50eqv.jpg",
    category: "Snacks",
  },
  {
    id: "34",
    title: "Plain rice with beef",
    price: 1050,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701672664/plain_rice_beef_ll54l8.jpg",
    category: "Rice and Grains",
  },
  {
    id: "35",
    title: "Plain rice with chicken",
    price: 1950,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701672664/plain_rice_beef_ll54l8.jpg",
    category: "Rice and Grains",
  },
  {
    id: "36",
    title: "Fried rice with chicken",
    price: 2050,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642840/fried_rice_beef_vt3j0y.jpg",
    category: "Rice and Grains",
  },
  {
    id: "37",
    title: "Fried rice with beef",
    price: 1150,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642840/fried_rice_beef_vt3j0y.jpg",
    category: "Rice and Grains",
  },
  {
    id: "38",
    title: "Chicken and chips",
    price: 1850,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Chicken_and_chips_nk9cia.jpg",
    category: "Snacks",
  },
  {
    id: "39",
    title: "Yamarita",
    price: 300,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Yamarita_evhgh6.jpg",
    category: "Snacks",
  },
  {
    id: "40",
    title: "Porridge Beans",
    price: 750,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Porridge_Beans_kd8z2i.jpg",
    category: "Beans",
  },
  {
    id: "41",
    title: "Pecan pasta with beef",
    price: 1050,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Pecan_Pasta_with_chicken_en5zn2.jpg",
    category: "Rice and Grains",
  },
  {
    id: "42",
    title: "Pecan pasta with chicken",
    price: 1950,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Pecan_Pasta_with_chicken_en5zn2.jpg",
    category: "Rice and Grains",
  },
  {
    id: "43",
    title: "Noodles",
    price: 1650,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642840/noodleEgg_u8hxg6.jpg",
    category: "Rice and Grains",
  },
  {
    id: "44",
    title: "Pecan rice with chicken",
    price: 2150,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642839/pecan_rice_cj3hmz.jpg",
    category: "Rice and Grains",
  },
];


const categories: string[] = Array.from(
  new Set(products.map((product) => product.category))
);

const isBetween10amAnd6pm = () => {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 10 && hours < 18;
};

const ProductList = () => {
  const initialProductsToShow = 4; // Adjust the initial number of products to display
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]
  );
  const [productsToShow, setProductsToShow] = useState<number>(
    initialProductsToShow
  );
  const isTimeActive = isBetween10amAnd6pm();


  const handleCategorySelection = useCallback(
    (category: string) => {
      setSelectedCategory(category);
      setProductsToShow(initialProductsToShow);
    },
    [initialProductsToShow]
  );

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const handleViewMore = () => {
    setProductsToShow(
      (prevProductsToShow) => prevProductsToShow + initialProductsToShow
    );
  };
  return (
    <Container>
      <Title>Current Menu</Title>
      <CategorySlide
        categories={categories}
        onCategorySelect={handleCategorySelection}
      />
       {!isTimeActive && (
          <div className="tag">
            <span className="dot"></span>sorry we are closed at the moment
          </div>
        )}
      <ProductListing>
        {filteredProducts.slice(0, productsToShow).map((product) => (
          <div key={product.id}>
            {" "}
            <ProductCard product={product} active={isTimeActive} />
          </div>
        ))}
      </ProductListing>

      <div className="buttonContainer">
         {productsToShow < filteredProducts.length && (
        <Button size="large" color="primary" onClick={handleViewMore} >
          More
        </Button>
      )}
      </div>
     
    </Container>
  );
};

export default ProductList;
