const express=require("express")


const employeeRouter=require("../route1/employeeRouter")

let app=express()

app.use(express.json())
app.use('/Employees',employeeRouter)

app.listen(5000,(err)=>
{
    if (err) throw err
    console.log("server is running on port 5000");
})