const router = require("express").Router();
const ensureAuthenticated = require("../Middlewares/Auth");

router.get("/", ensureAuthenticated, (req, res) => {
  console.log("---- User Detaile ----", req.user)
  res.status(200).json([
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 200,
    },
  ]);
});

module.exports = router;
