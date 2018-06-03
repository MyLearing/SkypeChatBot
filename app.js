// Reference the bot framework


const skype = require('botbuilder')
// Reference the Express package
const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000;
// Connect to the BOT Service 

const botService  = new skype.ChatConnector({
    appID: '',
    appPassword: ''
});



//Create a reference to our BOT Service

const bot = new skype.UniversalBot(botService);


//Wire up the bot service object to our Webservice, because then it knows where to post the incoming message
app.post('skp/msg', botService.listen())


bot.dialog('/',(session) => {
    const skypeMsg = session.message.text.toLowerCase(); 

    if(skypeMsg ==='hi' || skypeMsg === 'hello' || skypeMsg === 'hey') {
        session.send('Hi, I am your bot, I only understand money')
    } else {
        session.send('Sorry, I dont understand. Could you repeat')
    }
})


app.listen(PORT, () => {
    console.log('Currency convertor bot listening at PORT '+ PORT);
})
