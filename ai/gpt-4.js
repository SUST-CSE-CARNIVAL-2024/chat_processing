const openai = require('openai').OpenAI;
const dotenv = require("dotenv");
dotenv.config();

const client = new openai(process.env.OPENAI_API_KEY);

async function main() {
    const completion = await client.chat.completions.create({
      messages: [{ role: "system", content: "You are a psychologist." }],
      model: "gpt-3.5-turbo",
    });
  
    console.log(completion.choices[0]);
  }
  
//   main();
  

module.exports = {
    client
}