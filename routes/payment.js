const express = require("express");
const {
  sendStripeKey,
  sendRazorpayKey,
  captureStipePayment,
  captureRazorpayPayment,
} = require("../controllers/paymentcontroller");
const router = express.Router();
const { isLoggedIn, customRole } = require("../middlewares/user");

router.route("/stripekey").get(isLoggedIn, sendStripeKey);
router.route("/razorpaykey").get(isLoggedIn, sendRazorpayKey);

router.route("/capturestripe").post(isLoggedIn, captureStipePayment);
router.route("/capturerazorpay").post(isLoggedIn, captureRazorpayPayment);

module.exports = router;
