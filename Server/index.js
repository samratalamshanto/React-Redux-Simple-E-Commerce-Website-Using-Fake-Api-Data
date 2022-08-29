import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { cartRouter } from "./server_side_component/router/cartRouter.js"

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
    origin: "http://localhost:3000",//`https://samrat-alam.herokuapp.com:${port}`,
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(
        "Connected"
    );
}).catch((err) => console.log(err));




app.use("/", cartRouter);

app.get("/", (req, res) => { res.send("holaasdfasdf") });

app.listen(PORT, () => console.log(`@http://localhost:${PORT}`));