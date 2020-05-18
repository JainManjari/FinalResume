const queue=require('../config/kue');
const messageWorker=require('../worker/new_message_worker');

module.exports.home= async function(req,res)
{
    try{
        return res.render("home");
    }
    catch(err)
    {
        console.log("Error in loading home page ",err);
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
        console.log("Error in loading calculator page ",err);
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
        console.log("Error in loading music page ",err);
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
        console.log("Error in loading music 2 page ",err);
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
        console.log("Error in loading counter page ",err);
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
        console.log("Error in loading pingpong page ",err);
        return;
    }
}

module.exports.newMessage=async function(req,res)
{
    try{
        console.log(req.body);
        let job=queue.create("messages",req.body).save(function(err)
        {
                if(err)
                {
                    console.log("error in creating a queue ",err);
                    return;
                }
                console.log("job enqueued " ,job.id);

        });
        return res.redirect("back");
    }
    catch(err)
    {
        console.log("Error in sending message ",err);
        return;
    }
}