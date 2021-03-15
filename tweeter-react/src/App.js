import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { Profile } from './components/Profile';
import { TweetForm } from './components/TweetForm';
import { Tweet } from './components/Tweet';

const tweetsData = [
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
  const tweets = tweetsData.map((tweetsData, index) => {
    return <Tweet
      key={index}
      name={tweetsData.name}
      handle={tweetsData.handle}
      profile_image={tweetsData.profile_image}
      text={tweetsData.text}
      date={tweetsData.date}
    />
  })

  return (
    <div className="App">
      <Navigation />
      <main className="container">
        <div className="user-panel">
          <Profile />
          <TweetForm />
        </div>
        <div id="tweets-container">
          {tweets}
        </div>
      </main>
    </div>
  );
}

export default App;
