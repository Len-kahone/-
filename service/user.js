const request=require("../utils/request")


exports.findUserNameResult=async function(userName){
//验证用户名是否存在
  const {data} = await request.get(
    `/users?username=${userName}`
  )
console.log(data[0])
  return data[0]
}
exports.findNickNameResult=async function(nickName){
//验证昵称是否存在
  const {data} = await request.get(
    `/users?nickname=${nickName}`
  )
    console.log(data[0])
  return data[0]
}
exports.creat=async function(userData){
//验证用户名是否存在
  const data = await request.post(`/users`, {
    username: userData.userName,
    nickname: userData.nickName,
    password: userData.password
  })
    console.log(data)
  return data
}


 