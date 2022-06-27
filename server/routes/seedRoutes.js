import express from "express";
import Products from "../models/Products.js";
import Users from "../models/Users.js"
import data from "../data.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Products.deleteMany({});
  const createdProducts = await Products.insertMany(data.products);
  
  await Users.deleteMany({});
  const createdUsers = await Users.insertMany(data.users);
  
  res.send({ createdUsers, createdProducts });
});

export default seedRouter;