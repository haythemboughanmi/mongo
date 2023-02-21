const user = require("../models/user")
exports.getusers=async(req,res)=>{
    try {
        const getuser=await user.find()
        res.status(200).send({msg:"done",getuser})
    } catch (error) {
        res.status(500).send(error) 
    }
}
exports.adduser=async(req,res)=>{
    try {
        const newuser=new user(req.body)
        await newuser.save()
        res.status(200).send({msg:"done",newuser})
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.deleteusers=async(req,res)=>{
    
    try {
        await user.findByIdAndDelete(req.params.id)
        res.status(200).send("ok")
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.updateusers=async(req,res)=>{
    
    try {
        const newusers=await user.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).send({msg:"updateuser",newusers})

    } catch (error) {       
         res.status(500).send(error)

        
    }
}