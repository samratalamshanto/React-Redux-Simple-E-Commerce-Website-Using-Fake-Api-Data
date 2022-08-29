import { json } from "express";
import CartDataSchema from "../models/cartDataSchema.js";

export async function getCartDataController(req, res) {
    await CartDataSchema.find().sort("-updatedAt").then((result) => {
        res.status(200);
        res.json({ result });
    });

}



export async function postCartDataController(req, res) {
    const { productId, qty } = req.body;

    const cartData = new CartDataSchema({
        productId,
        qty,
    })
    console.log(cartData);
    try {
        if (cartData) {
            cartData.save().then(() => {
                console.log("saved data");
                res.status(201);
                res.send(JSON.stringify(cartData));
            });

        }
    } catch (error) {
        console.log(error);

    }


}
export async function updateCartDataController(req, res) { }
export async function deleteCartDataController(req, res) { }

// export default { getCartDataController, postCartDataController, updateCartDataController, deleteCartDataController };