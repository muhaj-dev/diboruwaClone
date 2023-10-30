import mongoose, { Document, Model, Schema, model, models } from "mongoose";



const cartSchema = new Schema(
  {
    cartItems: [
      {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        imgUrl: { type: String, required: true },
        category: { type: String, required: true },
        quantity: { type: Number, required: true },
        total: { type: Number, required: true },
      },
    ],
    total: { type: Number, default: 0 },
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Cart = models.Cart || model("Cart", cartSchema);
