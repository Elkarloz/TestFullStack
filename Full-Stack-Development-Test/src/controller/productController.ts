import { Request, Response } from "express";
import Product, { IProduct } from "../models/product";

export const Create = async (req: Request, res: Response) => {
  const { productName, productPrice, productImage, productCategory } = req.body;
  console.log(req.body);
  if (!productName || !productPrice || !productImage || !productCategory) {
    res.status(400).json("Missing parameters");
  } else {
    const product: IProduct = new Product({
      productName,
      productPrice,
      productImage,
      productCategory,
    });
    await product.save();
    res.json(product);
  }
};

export const Update = async (req: Request, res: Response) => {
  const { productName, productPrice, productImage, productCategory } = req.body;
  const prod = await Product.findById(req.params.id);

  if (!productName || !productPrice || !productImage || !productCategory) {
    res.status(400).json("Missing parameters");
  } else if (!prod) {
    res.status(404).json("Product not found");
  } else {
    prod.productName = productName;
    prod.productPrice = productPrice;
    prod.productImage = productImage;
    prod.productCategory = productCategory;
    await prod.save();
    res.json(prod);
  }
};

export const Delete = async (req: Request, res: Response) => {
  const prod = await Product.findById(req.params.id);
  if (!prod) {
    res.status(404).json("Product not found");
  } else {
    await prod.remove();
    res.json("Product deleted");
  }
};

export const Read = async (req: Request, res: Response) => {
  const prod = await Product.find();

  if (!prod) {
    res.status(404).json("Product not found");
  } else {
    res.json(prod);
  }
};

export const ReadId = async (req: Request, res: Response) => {
  const prod = await Product.findById(req.params.id);

  if (!prod) {
    res.status(404).json("Product not found");
  } else {
    res.json(prod);
  }
};
