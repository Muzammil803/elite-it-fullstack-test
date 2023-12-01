const mongoose=require("mongoose")
const productSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    price:{
        type:String,
    },
    description:{
        type:String,
    },
});
const StarredSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   
    star:{
        type:Number,
        required:true
    },
   
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true,
    },
    productData:{
        type:productSchema
    }
},{timestamps:true})

module.exports=mongoose.model("Starred",StarredSchema)