/* global $ */
/* global document */

$(document).ready(() => {
  
  const timeInterval = postTime => {
    const currentTime = Date.now();
    const numOfDays = (currentTime - postTime) / (1000 * 3600 * 24);
    
    let num = numOfDays;
    let unit = 'day';
    
    if (numOfDays >= 365) {
      num /= 365;
      unit = 'year';

    } else if (numOfDays >= 30) {
      num /= 30;
      unit = 'month';

    } else if (numOfDays >= 7) {
      num /= 7;
      unit = 'week';

    } else if (Math.floor(numOfDays) === 0) {
      return 'Today';
    }

    let roundedNum = Math.floor(num);
    
    if (roundedNum > 1) {
      unit += 's';
    }
    
    return `${roundedNum} ${unit} ago`;
  };

  const renderTweets = tweets => {
    $('#tweets-container').empty();
    for (let tweet of tweets) {
      $('#tweets-container').append(createTweetElement(tweet));
    }
  };
  
  const createTweetElement = tweet => {
    let $tweet = $(
      `<article class="tweet">
        <header>
          <img src=${tweet.user.avatars}>
          <div class="user-meta">
            <p>${tweet.user.name}</p>
            <p class="tweeter-handle">${tweet.user.handle}</p>
          </div>
        </header>
        <p>${tweet.content.text}</p>
        <footer>
          <p>${timeInterval(tweet.created_at)}</p>
          <div class="icons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="far fa-heart"></i>
          </div>
        </footer>
      </article>`
    );
    return $tweet;
  };
  
  $('form').on('submit', event => {
    event.preventDefault();

    const input = $('textarea').val();
    
    if (!input) {
      alert('No input');
    } else if (input.length > 140) {
      alert('Too many char');
    }

    $.post({
      url: '/tweets/',
      data: $('form').serialize()
    })
      .then(res => loadTweets())
      .catch(err => console.log(err));
  });
  
  const loadTweets = () => {
    $.get({
      url: '/tweets/',
      dataType: 'json'
    })
      .then(res => renderTweets(res))
      .catch(err => console.log(err));
  };

  loadTweets();
});