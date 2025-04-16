const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Create a new order
router.post("/", async (req, res) => {
  const { productDetails, size, color, status } = req.body;
  const newOrder = new Order({ productDetails, size, color, status });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json({ message: "Order created", order: savedOrder });
  } catch (error) {
    res.status(500).json({ error: "Failed to create order" });
  }
});

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

module.exports = router;