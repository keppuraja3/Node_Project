const express = require("express")
const router = express.Router();


const IdentifierCustomerController = require("../Controllers/IdentifierCustomerController")

router.post("/customer/add", IdentifierCustomerController.createCustomer)
router.post("/identifier/add", IdentifierCustomerController.createIdentifierWithCustomer)

router.get("/identifier/view",IdentifierCustomerController.showAllIdentifiers)

module.exports = router