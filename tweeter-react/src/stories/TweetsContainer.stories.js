import React from 'react';
import { TweetsContainer } from '../components/TweetsContainer';

export default { title: 'Tweet Container' };

export const emptyTweet = () => <TweetsContainer />;

export const populatedTweet = () => {

  const tweets = [
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

  // return <Tweet
  //   name = {singleTweet.name}
  //   handle = {singleTweet.handle}
  //   profile_image = {singleTweet.profile_image}
  //   text = {singleTweet.text}
  //   date = {singleTweet.date}
  //   />

  return <TweetsContainer tweetData={tweets} />
};