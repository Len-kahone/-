const express=require("express")
const router=express.Router()
const indexCtrl = require('../controller/index')

router.get("/",indexCtrl.showIndex)
      .get("/login",indexCtrl.login)

module.exports=router