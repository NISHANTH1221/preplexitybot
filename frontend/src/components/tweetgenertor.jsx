import React, { useState } from "react";
import axios from "axios";
import { useAsyncError } from "react-router-dom";

const TweetGenerator=()=>{
    const [topic,setTopic]=useState("");
    const [aiArticle,setAiArticle]= useState("");
    const [isLoading,setIsLoading] = useState(false);

    const handleSubmit= async (event)=>{
        console.log("button Clicked");
        event.preventDefault();
        try{
            const response= await axios.post( "http://localhost:3000/createsummary" , { topic });
            setAiArticle(response.data.summary);
            console.log(response.data.summary);
        }
        catch(error){
           console.log(error);
        }
    }

    return(
        <div className="bg-peach w-[100%]  min-h-screen p-10">
            <h1 className="text-center text-salmonpink font-bold text-6xl py-20">Preplexity</h1>
            <form  onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for the topic" className="block text-start text-bold text-white text-2xl p-5 w-[80%] mx-auto my-10 bg-salmonpink placeholder:text-white placeholder:text-bold placeholder:text-2xl rounded-xl placeholder:text-start ring-4 ring-white"  value={topic} onChange={(e)=>{setTopic(e.target.value)}}/>
                <button type="submit"  className="block mx-auto bg-salmonpink p-3 rounded-lg text-white font-bold hover:opacity-90">Submit</button>
            </form>
            {
                aiArticle && aiArticle != "" ? <RenderArticle article={aiArticle}/>  : null
            }
        </div>
    )
}
export default TweetGenerator;

const RenderArticle = ({article}) =>{
    return(
        <div className="w-[80%] text-white rounded-md mx-auto bg-salmonpink p-4 my-10">
         <h1 className="block mx-auto text-start font-bold text-lg">AI Summary</h1>
         <div>
            {article}
         </div>
        </div>
    )
}