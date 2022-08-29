import express from "express";
const router = express.Router();
import { getCartDataController, postCartDataController, updateCartDataController, deleteCartDataController } from "../controller/cartController.js"

router.get("/cartdata", getCartDataController);
router.post("/cartdata", postCartDataController);
router.put("/cartdata", updateCartDataController);
router.delete("/cartdata", deleteCartDataController);

export { router as cartRouter };