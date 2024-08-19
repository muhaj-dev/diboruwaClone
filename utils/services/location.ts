import axios from "axios";
import { CartItem,  } from "../types/types";
import { v4 as uuidv4 } from "uuid";
import { Product } from "@/constants";



const BASE_URL = `/api/locations`; // Replace with your backend API base URL


// Get a cart item
export function getLocationAPI() {
  return axios.get(`${BASE_URL}`);
}
// Add a cart item
export function  addLocationAPI(product: Product) {
  console.log(product);
  const newItem = {
    ...product,
    quantity: 1,
    total: product.price,
  };
  return axios.post(`${BASE_URL}`, newItem);
}

// // Remove a cart item
// export function removeCartItemAPI(id: string) {
//   return axios.delete(`${BASE_URL}/${id}`);
// }
// // Clear cart
// export function clearCartAPI() {
//   return axios.delete(`${BASE_URL}`);
// }

// // Update item quantity
// export function updateItemQuantityAPI(id: string, action: string) {
//   return axios.put(`${BASE_URL}/${id}`, { action });
// }
// 