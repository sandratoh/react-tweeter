import React from 'react';
import './TweetForm.css';

export const TweetForm = () => {

  return(
    <section className="new-tweet" id="tweet-area">
      <form method="POST" action="/tweets/">
        <label for="tweet-text">What are you humming about?</label>
        <textarea name="text" id="tweet-text" placeholder="Today is a very nice day!"></textarea>
        <p className="form-msg">Hello There Stranger \|O-O|/ </p>
        <div className="tweet-meta">
          <button type="submit">Tweet</button>
          <output name="counter" className="counter" for="tweet-text">140</output>
        </div>
      </form>
    </section>
  )
}