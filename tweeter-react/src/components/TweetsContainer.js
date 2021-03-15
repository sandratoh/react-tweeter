import React from 'react';
import { Tweet } from './Tweet';

export const TweetsContainer = props => {
  const { tweetData } = props

  const tweets = tweetData
  ? tweetData.map((tweetData, index) => {
    return <Tweet
      key={index}
      name={tweetData.name}
      handle={tweetData.handle}
      profile_image={tweetData.profile_image}
      text={tweetData.text}
      date={tweetData.date}
    />
  })
  : 'There is no tweet here'

  return (
    <div id="tweets-container">
    {tweets}
    </div>
  )
}
