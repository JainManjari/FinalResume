const queue=require('../config/kue');
const messageMailer=require('../mailer/new_message_mailer');

queue.process("messages",function(job,done)
{
    console.log("message email workers is processing the job ",job.data);
    messageMailer.newMessage(job.data);
    done();
});