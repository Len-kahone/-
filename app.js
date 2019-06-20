const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
const path = require('path')
const session = require('express-session')
const router = require('./router')

//配置session
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
   
  })
)
/* 开放public */
app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/', express.static(path.join(__dirname)))
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.use(router)

nunjucks.configure(path.join(__dirname, '/view/'), {
  autoescape: true,
  express: app,
  watch: true //禁用缓存
})

app.listen(3000, () => {
  console.log('启动成功')
})

// const obj={name:111,age:222}

// const {name ,age}=obj




