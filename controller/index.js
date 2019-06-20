const User =require("../service/user")
const svgCaptcha=require("svg-captcha")
exports.showIndex = async (req, res, next) => {
  res.render('index.html')
}
exports.login = async (req, res, next) => {
  res.render('signin.html')
}
exports.signup = async (req, res, next) => {
  const { userName, password, nickName, verifyCode } = req.body

  console.log(verifyCode, req.session)
  if (verifyCode.toLowerCase()!=req.session.captcha.toLowerCase()){

        return res.status(200).json({
            code:1,
            message:"验证码错误"
        })
  }
    if (await User.findUserNameResult(userName)) {
      //验证用户名是否存在

      return res.status(200).json({
        code: 1,
        message: '用户名已存在'
      })
    }
  //验证用户名是否存在
 
  if (await User.findNickNameResult(nickName)) {
    return res.status(200).json({
      code: 1,
      message: '昵称已存在'
    })
  }
  //创建用户
 
 const creatUser = await User.creat({
     userName,
     nickName,
     password
 })
 
  if(creatUser.data._id){
      console.log(1111);
      
      return res.status(200).json({
          code:0,
          message:"创建用户成功"
      })
  }
}

//验证验证码
exports.captcha=async (req,res,next)=>{

     var captcha = svgCaptcha.create()
     res.type("svg")
     req.session.captcha=captcha.text
    //  console.log(req)
     res.status(200).send(captcha.data)
}
