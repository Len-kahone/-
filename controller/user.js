const User=require("../service/user")
exports.check=async (req,res,next)=>{

  const {userName,nickName}=req.query
  let user
  if(userName){
    user =await User.findUserNameResult(userName)
  }
  if (nickName) {
       user =await User.findNickNameResult(nickName)
  }
  
  
  res.status(200).send(user?false:true)

}