import  React from 'react'
// import './App.css';
import TweetGenerator from './components/tweetgenertor';
import Home from "./components/home";
import About from "./components/about";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
        <Router>
          <Routes >
            <Route path="/" element={<TweetGenerator />}/>
          </Routes>
        </Router>
    </>
  )
}

export default App;
