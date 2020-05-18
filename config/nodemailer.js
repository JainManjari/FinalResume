const nodemailer=require('nodemailer');
const ejs=require('ejs');
const path=require('path');
//const env=require('./environment')

let transporter=nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:'manjarijain1998@gmail.com',
        pass:'padfoot2216#'
    }
});

let renderTemplate=(data,relativePath)=>{
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,template)
        {
            if(err)
            {
                console.log("error in rendering mail template ",err);
                return;
            }
            mailHTML=template;
        }
    )

    return mailHTML;
}

module.exports={
    transporter:transporter,
    renderTemplate:renderTemplate
}