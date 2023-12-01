const productModel=require("../models/product")
const starred = require("../models/starred")

const addStarredUser=async(req,res)=>{
    const {name,email,productId,star}=req.body
    const productData = await productModel.findOne({ _id: productId });
console.log(productData)
    const newstarred=new starred({
        name:name,
        email:email,
        star:star,
        productId:productId,
        productData:productData
    })

    try {
       await newstarred.save()
       res.status(201).json(newstarred)
    } catch (error) {
       res.status(500).json({message:"something went wrong"})
        console.log(error)
    }
}


const getStarredUser=async(req,res)=>{

    try {
        const note=await starred.find()
       res.status(201).json(note)
    } catch (error) {
       res.status(500).json({message:"something went wrong"})
        
    }
}


module.exports={
    addStarredUser,
getStarredUser
}