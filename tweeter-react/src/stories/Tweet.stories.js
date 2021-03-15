import React from 'react';
import { Tweet } from '../components/Tweet';

export default { title: 'Singular Tweet' };

export const emptyTweet = () => <Tweet />;

export const populatedTweet = () => {

  const singleTweet = {
    name:'Francis Bourgouin',
    handle: '@Cadaei',
    profile_image: 'https://i.imgur.com/2WZt0D6.png',
    text: 'What do you think about dragons and kittens?',
    date: '10 days ago'
  }

  // return <Tweet
  //   name = {singleTweet.name}
  //   handle = {singleTweet.handle}
  //   profile_image = {singleTweet.profile_image}
  //   text = {singleTweet.text}
  //   date = {singleTweet.date}
  //   />

  return <Tweet {...singleTweet} />
};