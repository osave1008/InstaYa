const express = require("express");
const router = express.Router();
const { Order, validator } = require("../models/orders");
const validate = require("../middleware/validate");
const isValidObjectId = require("../middleware/isValidObjectId");
const asyncHandler = require("../middleware/asyncHandler");

// Crear una orden
router.post(
  "/",
  validate(validator),
  asyncHandler(async (req, res) => {
    await Order(req.body).save();
    res.status(200).send("Orden creada");
  })
);

// Obtener todas las ordenes
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const orders = await Customer.find();
    res.send(orders);
  })
);

//Obtener orden por id
router.get(
  "/:id",
  isValidObjectId,
  asyncHandler(async (req, res) => {
    const order = await Customer.findById(req.params.id);
    res.json(order);
  })
);

// Update
router.put(
  "/:id",
  isValidObjectId,
  asyncHandler(async (req, res) => {
    await Order.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).send("actualizacion exitosa");
  })
);

// Delete
router.delete(
  "/:id",
  isValidObjectId,
  asyncHandler(async (req, res) => {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).send("borrado exitoso");
  })
);

module.exports = router;
