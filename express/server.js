let express=require("express")

let app=express()

app.use("/messages",(req,res,next)=>
{
    // console.log(Date.now());
    console.log("this is first middleware");
    next()
},(req,res,next)=>
{
    console.log("this is second middleware");
    
})
app.get("/",(req,res)=>
{
    res.send("Hello World")
})

app.get("/messages",(req,res)=>
{
    res.send("<ul><li>Hello albert einstien</li></ul>")
})

app.get("/json",(req,res)=>
{
    res.send({
        "name":"sir Issac Newton"
    })
})

app.listen(5000,(err)=>
{
    if (err) throw err
    console.log("server is running on port 5000");
})