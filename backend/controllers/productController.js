const productModel=require("../models/product")

const addProduct=async(req,res)=>{
    const {title,price,description}=req.body
    const newProduct=new productModel({
        title:title,
        price:price,
        description:description,
    })

    try {
       await newProduct.save()
       res.status(201).json(newProduct)
    } catch (error) {
       res.status(500).json({message:"something went wrong"})
        
    }
}
const updateProduct=async(req,res)=>{
    const id =req.params.id
    const {title,price,description}=req.body
    const newProduct={
        title:title,
        price:price,
        description:description,
    }

    try {
       await productModel.findByIdAndUpdate(id,newProduct,{new:true})
       res.status(201).json(newProduct)
    } catch (error) {
       res.status(500).json({message:"something went wrong"})
        
    }
}

const getProduct=async(req,res)=>{

    try {
        const note=await productModel.find()
       res.status(201).json(note)
    } catch (error) {
       res.status(500).json({message:"something went wrong"})
        
    }
}


module.exports={
    addProduct,
updateProduct,
getProduct
}