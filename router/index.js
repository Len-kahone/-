const express=require("express")
const router=express.Router()
const indexCtrl = require('../controller/index')
const userCtrl = require('../controller/user')

router
  .get('/', indexCtrl.showIndex)
  .get('/login', indexCtrl.login)
  .post('/signup', indexCtrl.signup)
  .get('/captcha', indexCtrl.captcha)
  .get('/user/check', userCtrl.check)

module.exports=router