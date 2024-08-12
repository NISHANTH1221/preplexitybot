import Groq from 'groq-sdk';
import dotenv from "dotenv";
dotenv.config();

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

const main = async(topicDetails,topic) => {

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {
        "role": "system",
        "content": ` You are a intelligent Article Writer. You need to find the relevant points to this topic: ${topic} and write a relvenat 200 words post such that i will be high converting and brings engagement and only include those related to news topic Dont include All rights reserved and website details we scraped from.`
      },
      {
        "role": "user",
        "content": `${topicDetails}`
      }
    ],
    "model": "llama3-70b-8192",
    "temperature": 1,
    "max_tokens": 1024,
    "top_p": 1,
    "stream": true,
    "stop": null
  });

  let finalString = "";

  for await (const chunk of chatCompletion) {
    finalString += (chunk.choices[0]?.delta?.content || '');
  }
  
  return finalString;

}

export default main;