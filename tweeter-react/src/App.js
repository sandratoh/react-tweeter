import React, { useState } from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { Profile } from './components/Profile';
import { TweetForm } from './components/TweetForm';
import { TweetsContainer } from './components/TweetsContainer';

const initialTweetData = [
  {
    name:'Francis Bourgouin',
    handle: '@Cadaei',
    profile_image: 'https://i.imgur.com/2WZt0D6.png',
    text: 'What do you think about dragons and kittens?',
    date: '10 days ago'
  },
  {
    name:'Amy Manell',
    handle: '@amyhere',
    profile_image: 'https://i.imgur.com/2WZt0D6.png',
    text: 'If I have seen further it is by standing on the shoulders of giants',
    date: '15 days ago'
  }
]

function App() {
  const [tweetData, setTweetData] = useState(initialTweetData);

  const addNewTweet = text => {
    const newTweet = {
      name:'Amy Manell',
      handle: '@amyhere',
      profile_image: 'https://i.imgur.com/2WZt0D6.png',
      text,
      date: '5 days ago'
    }

    setTweetData([newTweet, ...tweetData]);
  };

  return (
    <div className="App">
      <Navigation />
      <main className="container">
        <div className="user-panel">
          <Profile />
          <TweetForm  addNewTweet={addNewTweet}/>
        </div>
       <TweetsContainer tweetData={tweetData} />
      </main>
    </div>
  );
}

export default App;
