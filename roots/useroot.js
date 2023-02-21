const express = require("express")
const { model } = require("mongoose")
const { adduser, getusers, deleteusers, updateusers } = require("../conntrol/usercontril")
const userroot=express.Router()
userroot.post("/add",adduser)
userroot.get("/get",getusers)
userroot.delete("/:id",deleteusers)
userroot.put("/up/:id",updateusers)
module.exports=userroot
