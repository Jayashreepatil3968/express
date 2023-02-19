// const express=require("express")

// let app=express()
// let friends=[
//     {
//         "id":1,
//         "name":"Issac Newton"
//      },
//      {
//         "id":2,
//         "name":"Albert Eistein"
//      }
// ]
// app.get("/friends",(req,res)=>
// {
//     res.status(200).json(friends)
// })
// app.get("/friends/:friendId",(req,res)=>
// {
//     let friendId=req.params.friendId
//     let friend=friends[friendId]

//     if(friend){
//         res.status(200).json(friend)
//     }
//     else{
//         res.status(404).json({
//             error:"friend does not exist"
//         })
//     }
// })

// app.post("/friends",(req,res)=>
// {
//     if(!req.body.name)
//     {
//         return res.status(404).json({
//             error:"missing friend name"
//         })
//     }
//     let newFriend={
//         name:req.body.name,
//         id:friends.length
//     }
//     friends.push(newFriend)
//     res.json(newFriend)
// })

// app.listen(5000,(err)=>
// {
//     if (err) throw err
//     console.log("server is running on port 5000");
// })



//



// for routes
// for controller
// const express=require("express")


// const friendRouter=require("../routes/friendRouter")

// let app=express()

// app.use(express.json())
// app.use('/friends',friendRouter)

// app.listen(5000,(err)=>
// {
//     if (err) throw err
//     console.log("server is running on port 5000");
// })




// static files

const express=require("express")
const path=require("path")


// const friendRouter=require("../routes/friendRouter")
const messageRouter=require("../routes/messageRouter")
let app=express()

app.use(express.json())
app.use(express.static(path.join(__dirname,"..","public")))

app.use('/messages',messageRouter)

app.get("/",(req,res)=>{
    res.sendFile("index.html")
})

// app.use('/friends',friendRouter)

app.listen(5000,(err)=>
{
    if (err) throw err
    console.log("server is running on port 5000");
})