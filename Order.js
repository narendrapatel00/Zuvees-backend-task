
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  productDetails: String,
  size: String,
  color: String,
  status: { type: String, default: "Pending" }, // Default status
});

module.exports = mongoose.model("Order", orderSchema);