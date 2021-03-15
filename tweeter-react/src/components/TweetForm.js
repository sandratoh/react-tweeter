import React from 'react';

export const TweetForm = () => {

  return(
    <section class="new-tweet" id="tweet-area">
      <form method="POST" action="/tweets/">
        <label for="tweet-text">What are you humming about?</label>
        <textarea name="text" id="tweet-text" placeholder="Today is a very nice day!"></textarea>
        <p class="form-msg">Hello There Stranger \|O-O|/ </p>
        <div class="tweet-meta">
          <button type="submit">Tweet</button>
          <output name="counter" class="counter" for="tweet-text">140</output>
        </div>
      </form>
    </section>
  )
}