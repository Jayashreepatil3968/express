const Employees=require("../model1/employeeJson")

function getEmployees(req,res)
{
    res.status(200).json(Employees)
}

function getEmployee(req,res)
{
    let empId=req.params.empId
    let Employee=Employees[empId]

    if(Employee){
        res.status(200).json(Employee)
    }
    else{
        res.status(404).json({
            error:"Employee does not exist"
        })
    }
}
function createEmployee(req,res)
{
    if(!req.body.empName)
    {
        return res.status(404).json({
            error:"missing employee name"
        })
    }
    let newEmployee={
        empName:req.body.empName,
        empId:Employees.length,
        empSal:req.body.empSal,
        role:req.body.role,
        skills:req.body.skills
    }
    Employees.push(newEmployee)
    res.json(newEmployee)
}

module.exports={
    getEmployees,
    getEmployee,
    createEmployee
}