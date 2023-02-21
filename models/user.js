const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({
    name:String,
    age:{
        type:Number,required:true
    },
    lastname:{
        type:String,unique:false
    }
    
})
module.exports=mongoose.model("user",userSchema)


