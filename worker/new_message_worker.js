const queue=require('../config/kue');
const messageMailer=require('../mailer/new_message_mailer');

queue.process("messages",function(job,done)
{
    messageMailer.newMessage(job.data);
    done();
});