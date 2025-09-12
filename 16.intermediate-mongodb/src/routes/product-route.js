const exporess = require("express");
const { addProducts, getProductStats } = require("../controllers/product-controller");

const router = exporess.Router();

router.post("/add-products",addProducts)
router.get("/agretae-products", getProductStats);

module.exports = router;
