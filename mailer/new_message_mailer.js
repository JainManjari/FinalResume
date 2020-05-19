const nodemailer=require('../config/nodemailer');

exports.newMessage=(user)=>{
    let htmlString=nodemailer.renderTemplate({user:user},"/new_message.ejs")

    nodemailer.transporter.sendMail({
        from:"thehindflora@gmail.com",
        to:"manjarijain98@gmail.com",
        subject:"New Message from TheHindFlora!",
        html:htmlString
    }, (err,info)=>{
        if(err)
        {
            return;
        }
        return;
    });
}

exports.newReply=(user)=>{
    let htmlString=nodemailer.renderTemplate({user:user},"/reply_message.ejs")

    nodemailer.transporter.sendMail({
        from:"thehindflora@gmail.com",
        to:user.email,
        subject:"Hi from TheHindFlora!",
        html:htmlString
    }, (err,info)=>{
        if(err)
        {
            return;
        }
        return;
    });
}