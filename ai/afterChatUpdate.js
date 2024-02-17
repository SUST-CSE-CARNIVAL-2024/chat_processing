const client = require('./gpt-4').client;
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

let messages = [
    { role: "system", content: "You are a psychologist." },
    { role: "system", content: "You will get a conversion between two person." },
    { role: "system", content: "You are trying to understand emotions for both of them." },
    { role: "system", content: "You will quanitify both person's emotions from these qusetions and answers." },
    { role: "system", content: "You will provide only probability distribution for each emotion Depression, Anxiety, Stress, Contentment, Happiness, Anger, Fatigue, Neutral in json format with each person's name as key." },
]

getUpdatedEmotionProbDist = async (username) => {
    let result = await axios({
        'url': 'https://api.chatengine.io/chats/231772/messages',
        'method': 'get',
        'headers': {
            'Project-ID': '348e7a37-b988-4a5b-aeb4-4861f587d620',
            'User-Name': username,
            'User-Secret': 'abcd',
        }
    })

    // console.log(res.data)
    let chat_messages = "";

    for (let i = 0; i < result.data.length; i++) {
        let data = result.data[i];
        chat_messages += `${data.sender_username} : ${data.text}` + "\n";
    }
    // console.log(chat_messages);


    messages.push({ role: "system", content: chat_messages });
    let completion = await client.chat.completions.create({
        model: "gpt-4",
        messages: messages

    });
    // console.log(JSON.parse(completion.choices[0].message.content)[username]);
    return JSON.parse(completion.choices[0].message.content)[username];
}






// getUpdatedEmotionProbDist('prangonchakraborty2000@gmail.com')

module.exports = {
    getUpdatedEmotionProbDist

}




// getChat('prangonchakraborty2000@gmail.com')