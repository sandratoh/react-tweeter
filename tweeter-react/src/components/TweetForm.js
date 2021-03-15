import React, { useState } from 'react';
import './TweetForm.css';

export const TweetForm = props => {
  const { addNewTweet } = props;
  const [tweetText, setTweetText] = useState('');
  const tweetRemainingLength = 140 - tweetText.length;
  const outputStyle = {color: tweetRemainingLength >= 0 ? '#353D46' : '#E02020'};

  const submitTweet = event => {
    event.preventDefault();
    if (tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText);
      setTweetText('');
    }
  }

  return(
    <section className="new-tweet" id="tweet-area">
      <form onSubmit={submitTweet} method="POST" action="/tweets/">
        <label for="tweet-text">What are you humming about?</label>
        <textarea value={tweetText} onChange={event => setTweetText(event.target.value)} name="text" id="tweet-text" placeholder="Today is a very nice day!"></textarea>
        <p className="form-msg">Hello There Stranger \|O-O|/ </p>
        <div className="tweet-meta">
          <button type="submit">Tweet</button>
          <output style={outputStyle} name="counter" className="counter" for="tweet-text">{140 - tweetText.length}</output>
        </div>
      </form>
    </section>
  )
}