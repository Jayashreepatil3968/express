const path=require("path")

function getMessages(req,res)
{
    // res.send("<h1>hello friends</h1>")
    res.sendFile(path.join(__dirname,"..","public","images","virat.jpg"))

}

module.exports={getMessages}