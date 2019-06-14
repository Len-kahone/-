const express=require("express")
const nunjucks=require('nunjucks')

const app=express()
const path=require('path')
const router=require("./router")
/* 开放public */
app.use("/public",express.static(path.join(__dirname,"/public")))
app.use(router)

nunjucks.configure(path.join(__dirname,"/view/"), {
  autoescape: true,
  express: app,
  watch:true //禁用缓存
  
})



app.listen(3000,()=>{

    console.log("启动成功");
})