import React from 'react';
import './Tweet.css';

export const Tweet = props => {
  const {name, handle, text, profile_image, date} = props

  return(
    <article className="tweet">
      <header>
        <img src={profile_image} alt="avatar" />
        <div className="user-meta">
          <p>{name}</p>
          <p className="tweeter-handle">{handle}</p>
        </div>
      </header>
      <p>{text}</p>
      <footer>
        <p>{date}</p>
        <div className="icons">
          <i className="tweet-icon fas fa-flag" aria-hidden="true"></i>
          <i className="tweet-icon fas fa-retweet" aria-hidden="true"></i>
          <i className="tweet-icon far fa-heart" aria-hidden="true"></i>
        </div>
      </footer>
    </article>
  )
}