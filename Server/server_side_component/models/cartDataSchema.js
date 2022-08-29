import mongoose from "mongoose";
const cartDataSchema = mongoose.Schema(
    {
        productId: {
            type: Number,
            unique: true,

        },
        qty: {
            type: Number,
            default: 1,
        }

    },
    {
        timestamps: true,

    }
);

const CartDataModel = mongoose.model("CartData", cartDataSchema);
export default CartDataModel;