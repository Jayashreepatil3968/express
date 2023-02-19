const friends=require("../model/friends")

function getFriends(req,res)
{
    res.status(200).json(friends)
}

function getFriend(req,res)
{
    let friendId=req.params.friendId
    let friend=friends[friendId]

    if(friend){
        res.status(200).json(friend)
    }
    else{
        res.status(404).json({
            error:"friend does not exist"
        })
    }
}

function createFriend(req,res)
{
    if(!req.body.name)
    {
        return res.status(404).json({
            error:"missing friend name"
        })
    }
    let newFriend={
        name:req.body.name,
        id:friends.length
    }
    friends.push(newFriend)
    res.json(newFriend)
}

module.exports={
    getFriends,
    getFriend,
    createFriend
}