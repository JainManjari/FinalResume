const production={
    name:"production",
    asset_path:process.env.HINDFLORA_ASSET_PATH,
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:process.env.HINDFLORA_GMAIL_USERNAME,
            pass:process.env.HINDFLORA_GMAIL_PASSWORD
        }
    },
}

module.exports=eval(process.env.CODEIAL_ENVIRONMENT);