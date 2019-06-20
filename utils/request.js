const config=require("../config/config.default")
const axios=require("axios")

const instance = axios.create({
  baseURL: config.baseUrl, // api的base_url
 
})
module.exports=instance