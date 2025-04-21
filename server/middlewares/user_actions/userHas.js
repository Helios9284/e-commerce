const Cart = require("../../models/Cart");
const Review = require("../../models/Review");
const Order = require("../../models/Order");
const Whislist = require("../../models/WishList");

module.exports = async (product, user, type) => {
  let hasOnCart = null;
  let hasBought = null;
  let hasOnWishlist = null;
  let hasReviewed = null;
  if (user) {
    if (type !== "carts") {
      hasOnCart = await Cart.findOne({
        user: user._id,
        product: product._id,
        isDeleted: null,
      });
      if (!hasOnCart) hasOnCart = false;
    }

    if (type !== "wishlists") {

      hasOnWishlist = await Whislist.findOne({
        user: user._id,
        product: product._id,
        isDeleted: null,
      });
      if (!hasOnWishlist) hasOnWishlist = false;
    }

    if (type === "product") {

      hasBought = await Order.findOne({
        user: user,
        $or: [
          { "status.currentStatus": "complete" },
          {
            "status.currentStatus": "tobereturned",
            "status.currentStatus": "return",
          },
        ],
      });
      hasBought ? (hasBought = true) : (hasBought = false);

      hasReviewed = await Review.findOne({
        user: user,
        product: product._id,
      }).select("comment star user");
      if (!hasReviewed) hasReviewed = false;
    }
  }

  return { hasBought, hasOnCart, hasOnWishlist, hasReviewed };
};
