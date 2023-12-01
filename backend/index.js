const express =require('express')
const productRoute = require('./routes/productRoute')
const app =express()
const mongoose=require('mongoose')
const cors = require('cors');
const starredRoute = require('./routes/starredRoute');
const product = require('./models/product');
const cron = require('node-cron');
app.use(cors());

app.use(express.json())
app.use("/star",starredRoute)
app.use("/",productRoute)


mongoose.connect("mongodb+srv://syedmuzammil691:YHiRUvv9tEtftzCi@cluster0.prtfidr.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected 8080")
    app.listen(8080)

})
.catch((err)=>{
    console.log("error",err)
});

// <===========  Update price after every 24 hour    ==========================>

cron.schedule('0 0 * * *', async () => {
    try {
      await product.updateMany({}, { $set: { price: (Math.random() * 100).toFixed(0) } });
      console.log('Prices updated every 24 hour for testing');
    } catch (error) {
      console.error('Error updating prices:', error);
    }
  });

