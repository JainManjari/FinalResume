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
        console.log("Error in loading calculator page ",err);
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
        console.log("Error in loading calculator page ",err);
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
        console.log("Error in loading calculator page ",err);
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
        console.log("Error in loading calculator page ",err);
        return;
    }
}