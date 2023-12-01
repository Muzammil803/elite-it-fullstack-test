const express =require('express')
const { getProduct, addProduct, updateProduct } = require('../controllers/productController')
const productRoute =express.Router()

productRoute.get("/",getProduct)

productRoute.post("/",addProduct)
productRoute.put("/:id",updateProduct)



 module.exports=productRoute 