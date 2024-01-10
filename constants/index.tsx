import { assets } from "@/public/assets";
import josh from "@/public/Joshua.jpeg";
import j from "@/public/Yakubu.jpg";

// Base URL
const baseURL: string = "https://diboruwa.com";

// Route configuration
export interface Route {
  name: string;
  path: string;
  icon?: string;
  subroutes?: {
    name: string;
    path: string;
    icon: string;
  }[];
}

export const routes: Route[] = [
  {
    name: "Services",
    path: "/services",
    icon: "🛠️",
    subroutes: [
      { name: "Laundry", path: "/laundry", icon: assets.soap },
      { name: "Cleaning", path: "cleaning", icon: assets.cleaningImg },
      { name: "Food", path: "/food", icon: assets.food },
    ],
  },

  {
    name: "Pricing",
    path: "/pricing",
  },
  {
    name: "About Us",
    path: "/aboutus",
  },
];

export const HWW = [
  {
    image: "h",
    title: "Hand-Picked Selection or Choose a plan",
    content:
      "Choose from a specially curated menu of delicious meals, sourced from the best local eateries, all in one place.",
    // content:
    //   "Choose a meal schedule that works for you; when you want it, how you want it. It takes less than 5 minutes.",
  },
  {
    image: "h",
    title: "Effortless Ordering",
    content:
      "Browse, select, and place your order in just a few clicks. A streamlined process designed for your convenience.",
    //  content:
    //   "We cook up your picks from our rich menu and deliver them to you on schedule. At no extra delivery costs.",
  },
  {
    image: "h",
    title: "Reliable & Prompt Delivery",
    // title: "You Heat and Eat",
    content:
      "Experience the joy of having your favorite meals delivered right to your door, fresh and on time.",
    // content:
    //   "With Just 5 Minutes of Heating, Your Meal Is Good to Go, or Refrigerate It for a Later Tasty Treat",
  },
];

export const services = [
  {
    title: "Food",
    category: "food",
    image: assets.food,
    color: "color3",
    bg: "color3-20",
    content:
      "Convenient, ready-to-eat meals delivered to your door. \nStress-free eating.",
    cta: {
      label: "Order Now",
      path: "/food",
    },
  },

  {
    title: "Laundry",
    category: "laundry",
    image: assets.soap,
    color: "color2",
    bg: "color2-20",
    content:
      "Let us do the laundry so you can reclaim your time.\n 24/7 laundry service for a stress-free life.",
    cta: {
      label: "Schedule Pickup",
      path: "/laundry",
    },
  },
  {
    title: "Home Cleaning",
    category: "cleaning",
    image: assets.broom,
    color: "primary",
    bg: "primary-20",
    content:
      "We make home cleaning easy. \n Book a cleaning session today and enjoy a spotless space. \n Scheduling is quick and hassle-free.",
    cta: {
      label: "Book Now",
      path: "/cleaning",
    },
  },

  // {
  //   title: "Training",
  //   category: "training",
  //   image: assets.chefHat,
  //   color: "color4",
  //   bg: "color4-20",
  //   content:
  //     "Fresh and on schedule Delight in chef-cooked meals delivered to your doorstep.",
  //   cta: {
  //     label: "Order Now",
  //     path: "/trainning",
  //   },
  // },
];

export const accordionData = [
  {
    id: 1,
    title: "How can I easily place an order?",
    content:
      "Placing an order is a breeze! Just navigate to the desired service on our website, select your preferences, and follow the simple checkout process. For regular users, our dashboard provides even quicker access to frequent orders.",
  },
  {
    id: 2,
    title: "Are there subscription plans available for regular services",
    content:
      "Yes, we offer subscription plans that provide additional benefits and savings for our regular customers.",
  },
  {
    id: 3,
    title: "How do you ensure the quality of food delivered?",
    content:
      "We partner with reputable restaurants and enforce strict quality checks to ensure your food is fresh, hygienic, and delicious.",
  },
  {
    id: 4,
    title:
      "What measures are taken to care for delicate garments during laundry?",
    content:
      "Our laundry professionals are trained in fabric care, ensuring that delicate garments are handled with utmost care and precision.",
  },
];

// Array of sublinks
export const sublinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/aboutus" },
      { name: "Pricing", path: "/pricing" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Food", path: "/food" },
      { name: "Laundry", path: "/laundry" },
      { name: "Cleaning", path: "/cleaning" },
    ],
  },
  {
    title: "Other",
    links: [
      // { name: "Blog", path: "/comingsoon" },
      // { name: "Contact Us", path: "/comingsoon" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms" },
    ],
  },
];

export const Wyg = [
  {
    icon: "/people.png",
    description: "highly experienced cleaning team",
  },
  {
    icon: "/Group.png",
    description: "All equipment and chemicals provided",
  },
  {
    icon: "/shield-tick.png",
    description: "Insured services against damage.",
  },
  {
    icon: "/message-notif.png",
    description: "Unlimited, responsive customer service",
  },
];

export const subscriptionPlans = [
  {
    title: "One-Off Cleaning Plan",
    content: "For regular upkeep and a consistently clean home.",
    features: [
      "1 Bedrooms",
      "1 Living Rooms/ Dining Areas",
      "Bathroom sanitization",
      "Kitchen cleanup",
      "Vacuuming and mopping",
      "Dusting of all surfaces",
    ],
    cta: {
      label: "Subscribe Now",
      path: "/subscribe/standard",
    },
  },
  // {
  //   image: "/path/to/deep-image.png",
  //   title: "Deep Cleaning",
  //   content: "A thorough clean for homes that need some extra attention.",
  //   features: [
  //     "Everything from Standard Cleaning... Plus",
  //     "2 Bedrooms",
  //     "1 Living Rooms/ Dining Areas",
  //     "2 toilet/bathrooms",
  //     "1 kitchen",
  //     "Deep floor scrubbing",
  //     "Window and sill cleaning",
  //   ],
  //   cta: {
  //     label: "Subscribe Now",
  //     path: "/subscribe/deep",
  //   },
  // },
];

export const DashboradServices = [
  {
    title: "Order Food",
    image: assets.food,
    url: "/food",
  },
  {
    title: "Schedule Cleaning",
    image: assets.broom,
    url: "/cleaning",
  },
  {
    title: "Laundry Pickup",
    image: assets.soap,
    url: "/laundry",
  },
  // {
  //   title: "Requests",
  //   image: assets.food,
  //   url: "/dashboard/requests",
  // },
];

export const AboutUsContent = {
  introduction: {
    heading: "",
    content: "",
  },
};

export const PrivacyContent = [
  {
    header: "Information We Collect",
    text: "",
    bulletList: [
      {
        header: "Personal Information",
        text: "When you access our website or use our services, we may collect personal information that you provide voluntarily. This information may include, but is not limited to, your name, email address, phone number, and residential address",
      },
      {
        header: "Usage Data",
        text: " We may also automatically collect certain information when you interact with our website, such as your IP address, device information, browser type, and pages visited. This data is collected using cookies and similar tracking technologies and helps us enhance your browsing experience and improve our services",
      },
    ],
  },
  {
    header: "How We Use Your Information",
    bulletList: [
      {
        header: "Service Provision",
        text: "We use your personal information to fulfill your service requests, process transactions, and provide you with the services you have requested from Dibo Ruwa. ",
      },
      {
        header: "Communication",
        text: "We may use your contact information to communicate with you regarding your service orders, updates, promotions, and other relevant information related to Dibo Ruwa.",
      },
      {
        header: "Improving Our Services",
        text: "Your usage data and feedback may be used to analyze and improve our website and services, ensuring a more user-friendly and efficient experience for you.",
      },
    ],
  },
  {
    header: "Disclosure of Your Information",
    text: "",
    bulletList: [
      {
        header: "Service Providers",
        text: "We may share your personal information with trusted third-party service providers who assist us in delivering our services. These service providers are required to keep your information confidential and are prohibited from using it for any other purposes. ",
      },
      {
        header: "Legal Compliance",
        text: "We may disclose your personal information when required by law, such as in response to a valid court order or government request.",
      },
    ],
  },
  {
    header: "Data Security",
    text: " We take appropriate measures to safeguard your personal information and protect it from unauthorized access, disclosure, alteration, or destruction. We use industry-standard security protocols and technologies to maintain the security of your data.",
  },
  {
    header: ". Your Choices and Rights",

    bulletList: [
      {
        header: "Access and Update",
        text: "You have the right to access, update, or correct your personal information stored with us. If you wish to do so, please contact us at info@diboruwa.com ",
      },
      {
        header: "Marketing Communication",
        text: "If you no longer wish to receive marketing communications from us, you can opt-out by following the unsubscribe instructions provided in our emails or by contacting us directly",
      },
    ],
  },
  {
    header: "Children's Privacy",
    text: "Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided personal information to us, please contact us, and we will take appropriate steps to remove the information from our records",
  },
  {
    header: "Changes to this Privacy Policy",
    text: "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Any changes will be effective immediately upon posting on this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.",
  },
  {
    header: "Contact Us",
    text: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at info@diboruwa.com.",
  },
];
export const TermsContent = [
  {
    header: "Use of the Website",

    bulletList: [
      {
        header: "License",
        text: "Dibo Ruwa grants you a limited, non-exclusive, non-transferable, and revocable license to access and use our website for personal and non-commercial purposes.",
      },
      {
        header: "Prohibited Conduct",
        text: " You agree not to use our website in a manner that violates any applicable laws, infringes on the rights of others, or interferes with the proper functioning of the website. Prohibited conduct includes but is not limited to unauthorized access, transmitting harmful code, and engaging in any activity that may disrupt or impede our services.",
      },
    ],
  },
  {
    header: "Intellectual Property",
    bulletList: [
      {
        header: "Ownership",
        text: "All content, trademarks, logos, and intellectual property displayed on our website are the sole property of Dibo Ruwa or its licensors and are protected by copyright and other intellectual property laws ",
      },
      {
        header: "Use of Content",
        text: "You may not copy, reproduce, modify, distribute, or otherwise use any content from our website without obtaining prior written consent from Dibo Ruwa",
      },
    ],
  },
  {
    header: "Service Orders and Payments    ",

    bulletList: [
      {
        header: "Service Providers",
        text: "By placing an order for our services, you agree to pay the specified fees for the selected services. All service orders are subject to availability and acceptance by Dibo Ruwa. ",
      },
      {
        header: "Payment",
        text: "You must provide accurate and complete payment information when placing service orders. Payment can be made through the accepted payment methods on our website.",
      },
    ],
  },
  {
    header: "Disclaimer of Warranties",

    bulletList: [
      {
        header: "",
        text: 'Our website and services are provided on an "as is" and "as available" basis. Dibo Ruwa makes no warranties or representations of any kind, whether express or implied, regarding the accuracy, reliability, or suitability of our website or services for your specific needs.',
      },
      {
        header: "",
        text: "Dibo Ruwa does not guarantee that our website will be error-free, uninterrupted, or free from harmful code. We disclaim any liability arising from any technical issues, errors, or interruptions in the functioning of our website.",
      },
    ],
  },
  {
    header: "Limitation of Liability",

    bulletList: [
      {
        header: "",
        text: ". In no event shall Dibo Ruwa, its officers, directors, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of our website or services. ",
      },
      {
        header: "",
        text: "Dibo Ruwa's total liability to you for any claims arising out of your use of our website or services shall not exceed the amount paid by you for the specific services in question. ",
      },
    ],
  },
  {
    header: "Indemnification",
    text: "You agree to indemnify and hold Dibo Ruwa and its affiliates, employees, and agents harmless from any claims, losses, damages, liabilities, and expenses, including legal fees, arising out of your use of our website or services or any violation of these Terms and Conditions",
  },
  {
    header: "Governing Law and Jurisdiction",
    text: "These Terms and Conditions shall be governed by and construed in accordance with the laws of Nigeria. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Nigeria",
  },
  {
    header: "Changes to Terms and Conditions",
    text: "Dibo Ruwa reserves the right to modify or update these Terms and Conditions at any time without prior notice. Any changes will be effective immediately upon posting on this page. We encourage you to review these terms periodically to stay informed about any updates.",
  },
  {
    header: "Contact Us",
    text: "If you have any questions or concerns about these Terms and Conditions or our website, please contact us at info@diboruwa.com.",
  },
];

export interface Plan {
  title: string;
  features: string[];
  total: string | number;
  planCode?: string;
}

export interface PlanDetails {
  [subscription: string]: Plan[];
}

export const planDetails: PlanDetails = {
  Food: [
    {
      title: "Starter",
      features: [
        "1 meal per week",
        "Weekly delivery",
        "Delivered once a week",
        "Standard plate",
        "Ideal for occasional treats",
      ],
      total: 4900,
      planCode: "PLN_atra96ny3ftwdpn",
    },
    {
      title: "Regular",
      features: [
        "2 meal per week",
        "Standard plate",
        "Weekly delivery",
        "Delivered once a week",
        "Ideal for weekend treats",
      ],
      total: 9600,
      planCode: "PLN_m04fkdsulh9m98p",
    },
    {
      title: "Enterprise",
      features: [
        "5 meal per week",
        "Standard plate + extra",
        "Weekdays Delivery",
        "Delivered 5 times a week",
        "Perfect for workweek meals",
      ],
      total: 23900,
      planCode: "PLN_xxcu87dxaxhmuii",
    },
    {
      title: "Gold",
      features: [
        "7 meal per week",
        "Standard plate + extra",
        "Daily Delivery",
        "Delivered 7 times a week",
        "Perfect for everyday meals",
        "A meal every day",
      ],
      total: 36400,
      planCode: "PLN_wgi2tzagnxmwdex",
    },
  ],
  Laundry: [
    {
      title: "Lite Laundry",
      features: [
        "Dibo Ruwa Laundry Bag",
        "30 clothing materials",
        "Gentle washing for delicate fabrics",
        "Stain treatment",
        "Picked up once a month",
        "Ideal for individual",
      ],
      total: 4990,
      planCode: "PLN_1tjtak4lpxerj9s",
    },
    {
      title: "Regular Laundry",
      features: [
        "Dibo Ruwa Laundry Bag",
        "50 clothing materials",
        "Gentle washing for delicate fabrics",
        "Stain treatment",
        "Quick-dry service",
        "Picked up twice a month",
        "Ideal for family of two",
      ],
      total: 9900,
      planCode: "PLN_jxsf2x0hib76n0h",
    },
    {
      title: "Family",
      features: [
        "Dibo Ruwa Laundry Bag",
        "120 clothing materials",
        "Gentle washing for delicate fabrics",
        "Stain treatment",
        "Quick-dry service",
        "Emergencies",
        "Picked up four times a month",
        "Ideal for family of four",
      ],
      total: 19400,
      planCode: "PLN_bs7pwn74ts3jyw7",
    },
  ],
  Cleaning: [
    {
      title: "Standard",
      features: [
        "1 Bedrooms",
        "1 Living Rooms/ Dining Areas",
        "Bathroom sanitization",
        "Kitchen cleanup",
        "Vacuuming and mopping",
        "Dusting of all surfaces",
        "Once a week",
      ],
      total: 8900,
      planCode: "PLN_qsaj4llu3hfx9g9",
    },
    {
      title: "Premium",
      features: [
        "2 Bedrooms",
        "1 Living Rooms/ Dining Areas",
        "2 Bathroom sanitization",
        "Kitchen cleanup",
        "Vacuuming and mopping",
        "Dusting of all surfaces",
        "Once a week",
      ],

      total: 16950,
      planCode: "PLN_ainph5gw4x9lbyg",
    },
    {
      title: "Deep",
      features: [
        "3 Bedrooms",
        "1 Living Rooms/ Dining Areas",
        "2 Bathroom sanitization",
        "2 Kitchen cleanup",
        "Vacuuming and mopping",
        "Dusting of all surfaces",
        "Once a week",
      ],

      total: 25900,
      planCode: "PLN_qww4p0570axlg3p",
    },
  ],
};

export const teamMembers = [
  // {
  //   name: "Ricketts Rowland",
  //   role: "Lead Developer",
  //   imageUrl: "/logo.png", // Provide the actual image URL
  // },
  {
    name: "Mustapha Idris",
    role: "Marketing & Customer Success",
    imageUrl:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1700948243/dbr11_i4inmr.png",
  },
  {
    name: "Ibrahim Saliman Zainab",
    role: "Engineering",
    imageUrl: "/isz.jpeg", // Provide the actual image URL
  },
  {
    name: "Agula Adams",
    role: "Marketing & Customer Success",
    imageUrl:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1700948256/dbr44_tbhzdn.png",
  },
  {
    name: "Hassan Abbas",
    role: "Branding & Marketing",
    imageUrl:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1700948251/dbr55_fdyoem.png",
  },
  {
    name: "Adeyemo Akinola Ayomide",
    role: "Engineering",
    imageUrl:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1700948250/dbr22_vpgpn8.png",
  },

  {
    name: "Yakubu Ibrahim Evuti",
    role: "Operations",
    imageUrl:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1700990270/dbr66_jjk3dx.png",
  },
  {
    name: "Okorie Joshua",
    role: "Operations",
    imageUrl:
      "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1700948246/dbr33_rbtgb5.png",
  },
  // Add more team members as needed
];

export interface Product {
  id: number | string;
  title: string;
  prep_time: string;
  opening_time: string;
  categories: string[];
  price: number;
  slug: string;
  imageURL: string;
  vendor: string;
  discount?: number;
  extras?: Extra[]; // Nested extras property within Product
}

export interface Extra {
  id: number | string;
  title: string;
  prep_time: string;
  opening_time: string;
  categories: string[];
  slug: string;
  price: number;
  imageURL: string;
  vendor: string;
  discount?: number;
}

export interface Restaurant {
  id: string;
  name: string;
  location: string;
  chef: string;
  openingTime: string;
  menu: Product[];
  bannerURL: string;
}

export const restaurants: Restaurant[] = [
  {
    id: "Res123",
    name: "Restaurant A",
    location: "City A",
    chef: "Chef A",
    openingTime: "09:00 AM",
    bannerURL: "/restaurant_a_banner.jpg",
    menu: [
      {
        id: 1,
        title: "Spaghetti Bolognese",
        prep_time: "30 minutes",
        opening_time: "10:00 AM",
        slug: "sp1",
        categories: ["Main Course"],
        price: 20,
        imageURL: "/spaghetti_bolognese.jpg",
        vendor: "Vendor A",
        discount: 0.1,
        extras: [
          {
            id: 1,
            title: "Garlic Bread",
            prep_time: "10 minutes",
            opening_time: "10:15 AM",
            slug: "sp11",
            categories: ["Addon"],
            price: 5,
            imageURL: "/garlic_bread.jpg",
            vendor: "Vendor A",
          },
          {
            id: 2,
            title: "Tiramisu",
            prep_time: "15 minutes",
            opening_time: "10:30 AM",
            slug: "sp12",
            categories: ["Dessert"],
            price: 8,
            imageURL: "/tiramisu.jpg",
            vendor: "Vendor A",
          },
        ],
      },
      {
        id: 2,
        title: "Margherita Pizza",
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp5",
        categories: ["Main Course"],
        price: 15,
        imageURL: "/margherita_pizza.jpg",
        vendor: "Vendor A",
      },
      {
        id: 3,
        title: "Caesar Salad",
        prep_time: "15 minutes",
        opening_time: "11:30 AM",
        categories: ["Appetizer", "Salad"],
        price: 12,
        slug: "sp6",
        imageURL: "/caesar_salad.jpg",
        vendor: "Vendor A",
      },
    ],
  },
  {
    id: "Res124",
    name: "Restaurant B",
    location: "City B",
    chef: "Chef B",
    openingTime: "10:00 AM",
    bannerURL: "/restaurant_b_banner.jpg",
    menu: [
      {
        id: 1,
        title: "Sushi Combo",
        prep_time: "40 minutes",
        opening_time: "11:00 AM",
        categories: ["Sushi"],
        slug: "sp8",
        price: 25,
        imageURL: "/sushi_combo.jpg",
        vendor: "Vendor B",
        discount: 0.15,
        extras: [
          {
            id: 1,
            title: "Miso Soup",
            prep_time: "10 minutes",
            opening_time: "11:15 AM",
            categories: ["Soup"],
            slug: "sp13",
            price: 4,
            imageURL: "/miso_soup.jpg",
            vendor: "Vendor B",
          },
          {
            id: 2,
            title: "Edamame",
            prep_time: "8 minutes",
            opening_time: "11:30 AM",
            categories: ["Appetizer"],
            slug: "sp24",
            price: 6,
            imageURL: "/edamame.jpg",
            vendor: "Vendor B",
          },
        ],
      },
      // Similar structure for two more products in Restaurant B
    ],
  },
  {
    id: "Res125",
    name: "Restaurant C",
    location: "City C",
    chef: "Chef C",
    openingTime: "11:30 AM",
    bannerURL: "/restaurant_c_banner.jpg",
    menu: [
      {
        id: 1,
        title: "Chicken Alfredo Pasta",
        prep_time: "35 minutes",
        opening_time: "12:00 PM",
        categories: ["Main Course", "Pasta"],
        price: 18,
        slug: "sp9",
        imageURL: "/chicken_alfredo_pasta.jpg",
        vendor: "Vendor C",
        discount: 0.2,
        extras: [
          {
            id: 1,
            title: "Caesar Salad",
            prep_time: "10 minutes",
            opening_time: "12:15 PM",
            slug: "sp15",
            categories: ["Salad"],
            price: 6,
            imageURL: "/caesar_salad.jpg",
            vendor: "Vendor C",
          },
          {
            id: 2,
            title: "Garlic Breadsticks",
            prep_time: "12 minutes",
            opening_time: "12:30 PM",
            categories: ["Addon"],
            slug: "sp10",
            price: 5,
            imageURL: "/garlic_breadsticks.jpg",
            vendor: "Vendor C",
          },
        ],
      },
      // Similar structure for two more products in Restaurant C
    ],
  },
];

export const products: Product[] = [
  {
    id: "1",
    title: "Plain rice with beef",
    price: 1050,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701672664/plain_rice_beef_ll54l8.jpg",
    prep_time: "30 minutes",
    opening_time: "10:00 AM",
    slug: "sp1",
    categories: ["Rice and Grains"],
    vendor: "Pecan City",
    discount: 0,
    extras: [
      {
        id: "2",
        title: "Plain rice with chicken",
        price: 1950,
        imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701672664/plain_rice_beef_ll54l8.jpg",
        categories: ["Rice and Grains"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp2",
        vendor: "Pecan City",
      },
      {
        id: "3",
        title: "Fried rice with chicken",
        price: 2050,
        imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642840/fried_rice_beef_vt3j0y.jpg",
        categories: ["Rice and Grains"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp3",
        vendor: "Pecan City",
      },
      {
        id: "4",
        title: "Fried rice with beef",
        price: 1150,
        imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642840/fried_rice_beef_vt3j0y.jpg",
        categories: ["Rice and Grains"],
        prep_time: "25 minutes",
        opening_time: "11:00 AM",
        slug: "sp4",
        vendor: "Pecan City",
      },
    ],
  },
  {
    id: "2",
    title: "Plain rice with chicken",
    price: 1950,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701672664/plain_rice_beef_ll54l8.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp2",
    vendor: "Pecan City",
  },
  {
    id: "3",
    title: "Fried rice with chicken",
    price: 2050,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642840/fried_rice_beef_vt3j0y.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp3",
    vendor: "Pecan City",
  },
  {
    id: "4",
    title: "Fried rice with beef",
    price: 1150,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642840/fried_rice_beef_vt3j0y.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp4",
    vendor: "Pecan City",
  },


  {
    id: "5",
    title: "Meat pie",
    price: 500,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938468/diboruwa/Screenshot_from_2023-08-13_15-52-34_fofcpm.png",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp5",
    vendor: "Pecan City",
  },
  {
    id: "6",
    title: "Custard and Akara",
    price: 460,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691931043/diboruwa/Screenshot_from_2023-07-23_12-51-05_kt11tb.png",
    categories: ["Breakfast"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp6",
    vendor: "Home madePecan City",
  },
  {
    id: "7",
    title: "Pap and Beans Cake (Kunu and Kose)",
    price: 360,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691931001/diboruwa/Screenshot_from_2023-07-23_12-48-37_aeja1o.png",
    categories: ["Breakfast"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp7",
    vendor: "Home made",
  },
  {
    id: "8",
    title: "Tuwo and Egusi",
    price: 1100,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691936446/diboruwa/Screenshot_from_2023-07-23_12-24-59_w5xtrh.png",
    categories: ["Swallow"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp8",
    vendor: "Home made",
  },
  {
    id: "9",
    title: "Tuwo da Miya",
    price: 800,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691936460/diboruwa/Screenshot_from_2023-07-23_12-11-27_bvdnwl.png",
    categories: ["Swallow"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp9",
    vendor: "Home made",
  },
  {
    id: "10",
    title: "Efo riro",
    price: 1300,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938479/diboruwa/Screenshot_from_2023-08-13_15-53-36_juo2h5.png",
    categories: ["Soup"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp10",
    vendor: "EatWithEesha",
  },
  {
    id: "11",
    title: "Efo riro 1L",
    price: 7000,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938474/diboruwa/Screenshot_from_2023-08-13_15-51-40_qaokht.png",
    categories: ["Soup"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp11",
    vendor: "EatWithEesha",
    // discount: 50,
  },
  {
    id: "12",
    title: "Efo riro",
    price: 1300,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938465/diboruwa/Screenshot_from_2023-08-13_15-51-57_crohno.png",
    categories: ["Soup"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp12",
    vendor: "EatWithEesha",
  },
  {
    id: "13",
    title: "Dan wake",
    price: 500,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691936473/diboruwa/Screenshot_from_2023-07-23_12-10-00_vb6bd5.png",
    categories: ["Swallow"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp13",
    vendor: "Home made",
  },
  {
    id: "14",
    title: "Ekuru and pepper stew with pommo",
    price: 1200,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1698612208/Ekuru_plus_Fish_we3fqs.jpg",
    categories: ["Beans"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp14",
    vendor: "Home made - Adejoke",
    
  },
  {
    id: "15",
    title: "Vegetable Soup with Amala",
    price: 1300,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701210418/-5967755370602545238_121_ruwgxn.jpg",
    categories: ["Swallow"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp15",
    vendor: "EatWithEesha",
  },
  {
    id: "16",
    title: "White rice with vegetable soup and plantain",
    price: 1500,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701210490/White%20rice%20with%20vegetable%20soup%20and%20plantain%201500.jpg",
    categories: ["Rice and Grains"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp16",
    vendor: "EatWithEesha",
    discount: 0.5,
  },
  {
    id: "17",
    title: "Ewa agoyin (beans) with ponmo, plantain and bread",
    price: 1600,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701211063/photo_5967755370602545226_y_gxixvt.jpg",
    categories: ["Beans"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp17",
    vendor: "EatWithEesha",
  },
  {
    id: "18",
    title: "Goat pepper soup",
    price: 990,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701211347/Screenshot_from_2023-11-28_23-40-21_iixjzs.png",
    categories: ["Soup"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp18",
    vendor: "EatWithEesha",
    discount: 0.5,
  },
  {
    id: "19",
    title: "1 liter of stew with fish, Ponmo, and boiled egg",
    price: 8990,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701211999/Screenshot_from_2023-11-28_23-47-35_luktkz.png",
    categories: ["Soup"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp19",
    vendor: "EatWithEesha",
  },
  {
    id: "20",
    title: "Jolof spaghetti with chicken and plantain",
    price: 1690,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701212285/photo_5967755370602545228_y_rnxkis.jpg",
    categories: ["Rice and Grains"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp20",
    vendor: "EatWithEesha",
    discount: 0.5,
  },
  {
    id: "21",
    title: "Pounded yam with egusi soup and goat meat",
    price: 1680,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701212668/photo_5967755370602545231_y_ard2qd.jpg",
    categories: ["Swallow"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp21",
    vendor: "EatWithEesha",
    discount: 0.5,
  },
  {
    id: "22",
    title: "Pecan rice with beaf",
    price: 1250,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642839/pecan_rice_cj3hmz.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp22",
    vendor: "Pecan City",
  },
  {
    id: "23",
    title: "Meat pie",
    price: 500,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Meatpie_kkswmo.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp23",
    vendor: "Pecan City",
  },
  {
    id: "24",
    title: "Burger beef or chicken",
    price: 2500,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Burger_beef_or_chicken_t99bj5.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp24",
    vendor: "Pecan City",
  },
  {
    id: "25",
    title: "Sandwich",
    price: 1000,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642850/sandwich_nhnrkn.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp25",
    vendor: "Pecan City",
  },
  {
    id: "26",
    title: "Doughnut",
    price: 500,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642846/Doughnut_vmnkac.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp26",
    vendor: "Pecan City",
  },
  {
    id: "27",
    title: "Shawarma",
    price: 1480,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Shawarma_large_q50eqv.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp27",
    vendor: "Pecan City",
  },
  {
    id: "28",
    title: "Shawarma medium",
    price: 1690,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Shawarma_large_q50eqv.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp28",
    vendor: "Pecan City",
  },
  {
    id: "29",
    title: "Shawarma large",
    price: 1980,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Shawarma_large_q50eqv.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp29",
    vendor: "Pecan City",
  },
{
    id: "30",
    title: "Jollof rice and chicken",
    price: 2050,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691930939/diboruwa/Screenshot_from_2023-07-23_12-41-36_gqry1k.png",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp30",
    vendor: "Pecan City",
  },
 {
    id: "31",
    title: "Jollof rice and chicken with coslow",
    price: 2250,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1700398660/jollof_rice_and_chicken_with_coslow_wb3hdb.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp31",
    vendor: "Home made",
  },
  {
    id: "32",
    title: "Ofada rice",
    price: 1200,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691931036/diboruwa/Screenshot_from_2023-07-23_12-43-31_fachft.png",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp32",
    vendor: "Pecan City",
  },
  {
    id: "33",
    title: "Masa",
    price: 700,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691930984/diboruwa/Screenshot_from_2023-07-23_12-25-21_hc8kbh.png",
    categories: ["Swallow"],
    prep_time: "24 hours",
    opening_time: "11:00 AM",
    slug: "sp33",
    vendor: "Home made",
  },
  {
    id: "34",
    title: "Beans, Bread and Plantain",
    price: 1100,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938465/diboruwa/Screenshot_from_2023-08-13_15-51-22_vzskcj.png",
    categories: ["Reans"],
    prep_time: "30 minutes",
    opening_time: "11:00 AM",
    slug: "sp34",
    vendor: "EatWithEesha",
    discount: 0.5,
  },
  {
    id: "35",
    title: "Chicken and chips",
    price: 1850,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Chicken_and_chips_nk9cia.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp35",
    vendor: "Pecan City",
  },
  {
    id: "36",
    title: "Yamarita",
    price: 300,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Yamarita_evhgh6.jpg",
    categories: ["Snacks"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp36",
    vendor: "Pecan City",
  },
  {
    id: "37",
    title: "Porridge Beans",
    price: 750,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642843/Porridge_Beans_kd8z2i.jpg",
    categories: ["Beans"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp37",
    vendor: "Pecan City",
  },
  {
    id: "38",
    title: "Pecan pasta with beef",
    price: 1050,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Pecan_Pasta_with_chicken_en5zn2.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp38",
    vendor: "Pecan City",
  },
  {
    id: "39",
    title: "Pecan pasta with chicken",
    price: 1950,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642847/Pecan_Pasta_with_chicken_en5zn2.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp39",
    vendor: "Pecan City",
  },
  {
    id: "40",
    title: "Noodles",
    price: 1650,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642840/noodleEgg_u8hxg6.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp40",
    vendor: "Pecan City",
  },
  {
    id: "41",
    title: "Pecan rice with chicken",
    price: 2150,
    imageURL: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1701642839/pecan_rice_cj3hmz.jpg",
    categories: ["Rice and Grains"],
    prep_time: "25 minutes",
    opening_time: "11:00 AM",
    slug: "sp41",
    vendor: "Pecan City",
  },

  // previous 
  // {
  //   id: "pro15",
  //   title: "Chicken Alfredo Pasta",
  //   prep_time: "35 minutes",
  //   opening_time: "12:00 PM",
  //   categories: ["Main Course", "Pasta"],
  //   price: 18,
  //   slug: "sp9",
  //   imageURL: "/chicken_alfredo_pasta.jpg",
  //   vendor: "Vendor C",
  //   discount: 0.2,
  //   extras: [
  //     {
  //       id: "pro16",
  //       title: "Caesar Salad",
  //       prep_time: "10 minutes",
  //       opening_time: "12:15 PM",
  //       slug: "sp15",
  //       categories: ["Salad"],
  //       price: 6,
  //       imageURL: "/caesar_salad.jpg",
  //       vendor: "Vendor C",
  //     },
  //     {
  //       id: "pro17",
  //       title: "Garlic Breadsticks",
  //       prep_time: "12 minutes",
  //       opening_time: "12:30 PM",
  //       categories: ["Addon"],
  //       slug: "sp10",
  //       price: 5,
  //       imageURL: "/garlic_breadsticks.jpg",
  //       vendor: "Vendor C",
  //     },
  //   ],
  // },
];
