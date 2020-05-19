const nodemailer=require('../config/nodemailer');

// this is another way of exporting method

exports.newMessage=(user)=>{
    console.log("inside new message ",user);
    let htmlString=nodemailer.renderTemplate({user:user},"/new_message.ejs")

    nodemailer.transporter.sendMail({
        from:"manjarijain1998@gmail.com",
        to:"manjarijain98@gmail.com",
        subject:"New Message from TheHindFlora!",
        html:htmlString
    }, (err,info)=>{
        if(err)
        {
            console.log("Error in sending mail ",err);
            return;
        }
        return;
    });
}

exports.newReply=(user)=>{
    console.log("inside new reply ",user);
    let htmlString=nodemailer.renderTemplate({user:user},"/reply_message.ejs")

    nodemailer.transporter.sendMail({
        from:"thehindflora@gmail.com",
        to:user.email,
        subject:"Hi from TheHindFlora!",
        html:htmlString
    }, (err,info)=>{
        if(err)
        {
            console.log("Error in sending mail ",err);
            return;
        }
        return;
    });
}