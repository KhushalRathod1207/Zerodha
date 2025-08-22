require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");



const HoldingsModel = require("./models/HoldingsModel");
const OrdersModel = require("./models/OrdersModel");
const PositionsModel = require("./models/PositionsModel");

const app = express();

app.use(cors())
app.use(bodyParser.json());

const PORT = process.env.PORT || 1207;
const MONGO_URL = process.env.MONGO_URL;

// ✅ Connect to MongoDB once
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("✅ Connected to MongoDB");
    })
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
    });
// ✅ Route: Add Holdings
// app.get("/addHoldings", async (req, res) => {
//     try {
//         const tempData = [
//             { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
//             { name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%", isLoss: true },
//             { name: "SGBMAY29", qty: 2, avg: 4727.0, price: 4719.0, net: "-0.17%", day: "+0.15%" },
//             { name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: true },
//             { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: true },
//             { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" },
//         ];

//         await HoldingsModel.insertMany(tempData);
//         res.send("✅ Holdings added successfully!");
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("❌ Error adding holdings");
//     }
// });


// app.get("/addOrders", async (req, res) => {
//     let tempOrders = [
//         { name: "INFY", qty: 10, type: "BUY", price: 1500, status: "OPEN" },
//         { name: "RELIANCE", qty: 5, type: "SELL", price: 2400, status: "CLOSED" },
//         { name: "TATASTEEL", qty: 15, type: "BUY", price: 120, status: "OPEN" },
//     ];

//     await OrdersModel.insertMany(tempOrders);
//     res.send("Orders Added ✅");
// })


// app.get("/addPositions", async (req, res) => {
//     let tempPositions = [
//         { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
//         { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },

//     ];

//     await PositionsModel.insertMany(tempPositions);
//     res.send("Positions Added ✅");
// });

// ✅ Get All Holdings
app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

// ✅ Get All Orders
app.get("/allOrders", async (req, res) => {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
});

// ✅ Get All Positions
app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mod: req.body.mod
    });

    await newOrder.save();
    res.json({ success: true, message: "Buy order placed", order: newOrder });
});


// Sell Order API
app.post("/sellOrder", async (req, res) => {
    try {
        const sellOrder = new OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mod: "SELL",
        });

        await sellOrder.save();

        res.json({
            success: true,
            message: "Sell order placed successfully",
            order: sellOrder,
        });
    } catch (error) {
        console.error("Error placing sell order:", error);
        res.status(500).json({ success: false, message: "Error placing sell order" });
    }
});





// ✅ Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port: ${PORT}`);
});
