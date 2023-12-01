const express =require('express')
const { addStarredUser,getStarredUser} = require('../controllers/starredController')

const starredRoute =express.Router()
starredRoute.get("/",getStarredUser)
starredRoute.post("/",addStarredUser)




 module.exports=starredRoute 