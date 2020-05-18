const express=require('express');
const port=8000;
const env=require('./config/environment');
const path=require('path');
const app=express();
require('./config/view-helpers')(app);
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,env.asset_path)));

app.set("view engine","ejs");
app.set("views","./views");

app.use("/",require("./routes"));

app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in connecting with the server ",err);
        return;
    }
    console.log("Server is working fine on port",port);
})