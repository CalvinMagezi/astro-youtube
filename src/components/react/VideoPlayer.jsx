import React from "react";
import ReactPlayer from "react-player/lazy/index.js";

function VideoPlayer({ id }) {
  return (
    <div class="w-full">
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
    </div>
  );
}

export default VideoPlayer;
