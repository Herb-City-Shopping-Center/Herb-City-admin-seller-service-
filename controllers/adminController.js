const asyncHandler = require("express-async-handler");
const Shop = require("../models/shopModal");
const { green } = require("colors");

const getAllShops = asyncHandler(async (req, res) => {
  const orders = await Shop.find();

  if (orders) {
    console.log("Shop fetched!!!".green.bold);
    //send data to frontend in json format
    res.send(orders);
  } else {
    console.log("Failed fetch Shop !!!".red.bold);
    //send error message to frontend
    res.status(400).json({
      error: "Failed to fetch shop !!!",
    });
    throw new error("Failed to fetch shop !!!");
  }
});

// const confirmOrder = asyncHandler(async (req, res) => {
//   const { id } = req.body;

//   const order = await Order.findByIdAndUpdate(id, {
//     orderStatus: "Confirmed",
//   });

//   if (order) {
//     console.log("Order Confirmed!!!".green.bold);
//     //send data to frontend in json format
//     res.send(order);
//   } else {
//     console.log("Failed to confirm order !!!".red.bold);
//     //send error message to frontend
//     res.status(400).json({
//       error: "Failed to confirm order !!!",
//     });
//     throw new error("Failed to confirm order !!!");
//   }
// });

module.exports = {
  getAllShops,
};
