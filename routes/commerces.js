const express = require("express");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/commerces");
const { validatorGetItem, validatorCreateItem, validatorDeleteItem } = require("../validators/commerces");

const router = express.Router();

router.get("/", getItems); 
router.get("/:cif", validatorGetItem, getItem); 

router.delete("/:cif", validatorGetItem, deleteItem);

router.put("/:cif", validatorGetItem, validatorCreateItem, updateItem);

router.post("/", validatorCreateItem, createItem);

module.exports = router;
