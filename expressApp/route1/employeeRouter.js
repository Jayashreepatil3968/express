const express=require("express")
const employeeController=require("../Controller1/employeeController")
const route=express.Router()

route.get("/",employeeController.getEmployees)
route.get("/:empId",employeeController.getEmployee)

route.post("/",employeeController.createEmployee)

module.exports=route