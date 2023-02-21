const mongoose=require("mongoose")

const connectdb=async()=>{
    try {
        mongoose.set('strictQuery', false)
      await mongoose.connect("mongodb://127.0.0.1:27017/test1")
      console.log("db is connected")  
    } catch (error) {
        console.log("db is not connected")
    }
}
module.exports=connectdb
