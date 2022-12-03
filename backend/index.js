require("dotenv").config();
const express = require("express");  // import express from "express";
const cookieParser = require("cookie-parser");  // import cookieParser from "cookieParser";
const cors = require("cors");

const app = express();

const conn = require("./db");
const authRoutes = require("./routes/authRoutes");
const privateRoutes = require("./routes/privateRoutes");
const orders = require("./routes/orders");
const checkAuth = require("./middlewares/checkAuth");

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
//app.use(logger()); 
    //Router de rutas protegidas

    //Router de rutas de autenticacion
app.use("/auth", authRoutes);
app.use("/private", checkAuth, privateRoutes);
app.use("/api/orders", orders);


app.listen(3001, () => {
    console.log("API REST STARTED ...");
    conn();
});