import React from 'react';

export const Tweet = () => {
  return(
    <article class="tweet">
      <header>
        <img src="./images/avatars/avatar-4.png" alt="avatar" />
        <div class="user-meta">
          <p>Descartes</p>
          <p class="tweeter-handle">@rd</p>
        </div>
      </header>
      <p>Je pense , donc je suis</p>
      <footer>
        <p>1 day ago</p>
        <div class="icons">
          <i class="tweet-icon fas fa-flag" aria-hidden="true"></i>
          <i class="tweet-icon fas fa-retweet" aria-hidden="true"></i>
          <i class="tweet-icon far fa-heart" aria-hidden="true"></i>
        </div>
      </footer>
    </article>
  )
}