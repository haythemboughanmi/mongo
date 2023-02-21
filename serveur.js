const express=require("express")
const connectdb = require("./config/connectdb")
const userroot = require("./roots/useroot")
const app=express()
const port=4556
app.use(express.json())
connectdb()
app.listen(port,console.log(`app is runing on port ${port}`))

app.use("/api/user",userroot)