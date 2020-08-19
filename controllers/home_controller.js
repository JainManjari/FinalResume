const queue=require('../config/kue');
const messageWorker=require('../worker/new_message_worker');
//console.log("controller")
module.exports.home= async function(req,res)
{
    try{
        console.log("home")
        return res.render("home");
    }
    catch(err)
    {
        console.log("error in home ",err)
        return;
    }
}

module.exports.calculator=async function(req,res)
{
    try{
        return res.render("cal");
    }
    catch(err)
    {
        return;
    }
}

module.exports.music=async function(req,res)
{
    try{
        return res.render("music");
    }
    catch(err)
    {
        return;
    }
}

module.exports.music2=async function(req,res)
{
    try{
        return res.render("music2");
    }
    catch(err)
    {
        return;
    }
}

module.exports.counter=async function(req,res)
{
    try{
        return res.render("counter");
    }
    catch(err)
    {
        return;
    }
}


module.exports.pingpong=async function(req,res)
{
    try{
        return res.render("pingpong");
    }
    catch(err)
    {
        return;
    }
}


module.exports.blog1=async function(req,res)
{
    try{
        return res.render("blog-struggle");
    }
    catch(err)
    {
        return;
    }
}


module.exports.newMessage=async function(req,res)
{
    try{
        console.log("message",req.body);
        let job=queue.create("messages",req.body).save(function(err)
        {
                if(err)
                {
                    console.log("error in getting job done",err)
                    return;
                }
                console.log("job message enqued ",job.id)
        });
        let job2=queue.create("replies",req.body).save(function(err)
        {
                if(err)
                {
                    console.log("error in getting job done",err)
                    return;
                }
                console.log("job reply enqued ",job.id)
        });
        
        return res.json({
            data:{
                user:req.body
            },
            message:"Message Sent Successfully!"
        })

    }
    catch(err)
    {
        return;
    }
}