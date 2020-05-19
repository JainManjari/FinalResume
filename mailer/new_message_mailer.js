const nodemailer=require('../config/nodemailer');
const env=require('../config/environment')
exports.newMessage=(user)=>{
    let htmlString=nodemailer.renderTemplate({user:user},"/new_message.ejs")
    console.log(env.email)
    nodemailer.transporter.sendMail({
        from:env.email,
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
    console.log(env.email)
    nodemailer.transporter.sendMail({
        from:env.email,
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