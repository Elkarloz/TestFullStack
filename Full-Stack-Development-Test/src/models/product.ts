import mongoose, { Schema, model } from "mongoose";

export interface IProduct extends mongoose.Document {
  productName: string;
  productPrice: number;
  productImage: string;
  productCategory: string;
}

const ProductShema = new Schema({
  productName: String,
  productPrice: Number,
  productImage: String,
  productCategory: String,
});

export default model<IProduct>("Product", ProductShema);
