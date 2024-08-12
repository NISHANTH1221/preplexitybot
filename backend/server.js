import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ChatCompletions from "./components/grog.js";
import CreateTweet from "./components/createTweet.js";
import ScrapeData from "./components/WebscrapingBot.js";

const app=express();

const port=3000;

app.use(cors());

app.use(bodyParser.json());


app.post( "/createsummary" , async (req,res) => {

    const { topic } = req.body;

    console.log(topic);

    if (!topic){
        return res.status(500).json({ message: "No data has been received "})
    }
    
    const topicDetails = await ScrapeData(topic);

    const completion = await ChatCompletions(topicDetails,topic);

    return res.status(200).json({ summary : completion });

});

app.listen(port,()=>{
    console.log(`app is listening at port ${port}`)
});