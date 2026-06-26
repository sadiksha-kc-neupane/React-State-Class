import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsliked] = useState(false);

  let toggleButton = () => {
    setIsliked(!isLiked);
  };

  return (
    <div>
      <button>Like Button</button> <br></br>
      <p onClick={toggleButton}>
        {isLiked ? (
          <i class="fa-regular fa-heart"></i>
        ) : (
          <i class="fa-solid fa-heart"></i>
        )}
      </p>
    </div>
  );
}
