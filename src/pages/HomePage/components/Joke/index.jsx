import './style.css';
import { useState } from 'react';
export const Joke = ({ userAvatar, userName, text, likes, dislikes, key }) => {
  const [downCount, setDownCount] = useState(dislikes);
  const [upCount, setUpCount] = useState(likes);
  return (
    <div class="joke" key={key}>
      <div class="joke__body">
        <div class="joke__user">
          <img class="user-avatar" src={userAvatar} />
          <p class="user-name">{userName}</p>
        </div>

        <p class="joke__text">{text}</p>
      </div>
      <div class="joke__likes">
        <button
          id="btn-up"
          class="btn-like btn-like--up"
          onClick={() => setUpCount(upCount + 1)}
        ></button>
        <span id="likes-up" class="likes-count likes-count--up">
          {upCount}
        </span>
        <button
          id="btn-down"
          class="btn-like btn-like--down"
          onClick={() => setDownCount(downCount + 1)}
        ></button>
        <span id="likes-down" class="likes-count likes-count--down">
          {downCount}
        </span>
      </div>
    </div>
  );
};
