import React, { useState } from "react";
import axios from "axios";

const TweetGenerator=()=>{
    const [topic,setTopic]=useState("");
    const [aiArticle,setAiArticle]= useState("");
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(false);

    const handleSubmit= async (event)=>{
        console.log("button Clicked");
        event.preventDefault();
        setIsLoading(true);
        try{
            const response= await axios.post( `${import.meta.env.VITE_BACKEND_URL}/createsummary` , { topic });
            setAiArticle(response.data.summary);
            setIsLoading(false);
        }
        catch(error){
           setError(error.messsage);
        }
    }

    return(
        <div className="bg-peach w-[100%]  min-h-screen p-10">
            <h1 className="text-center text-salmonpink font-bold text-6xl py-20">Preplexity</h1>
            <form  onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for the topic" className="block text-start text-bold text-white text-2xl p-5 w-[80%] mx-auto my-10 bg-salmonpink placeholder:text-white placeholder:text-bold placeholder:text-2xl rounded-xl placeholder:text-start ring-4 ring-white"  value={topic} onChange={(e)=>{setTopic(e.target.value)}}/>
                <button type="submit" disabled={isLoading} className="block mx-auto bg-salmonpink p-3 rounded-lg text-white font-bold hover:opacity-80 shadow-lg">Submit</button>
            </form>
            {
                aiArticle && aiArticle != "" ? <RenderArticle article={aiArticle}/>  : null
            }
            {
                error && error.length>0 ? <RenderArticle article={error}/> :null
            }
        </div>
    )
}
export default TweetGenerator;

const RenderArticle = ({article}) =>{
    return(
        <div className="w-[80%] text-white rounded-md mx-auto bg-salmonpink p-4 my-10 shadow-lg">
         <h1 className="block mx-auto text-start font-bold text-lg">AI Summary</h1>
         <div>
            {article}
         </div>
        </div>
    )
}