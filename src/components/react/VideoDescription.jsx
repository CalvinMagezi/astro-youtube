import React from "react";

function VideoDescription({ description }) {
  const [readMore, setReadMore] = React.useState(false);
  //   console.log(readMore);

  return (
    <div>
      <p className="text-sm text-gray-500 ">
        {readMore === false ? description.substring(0, 100) : description}
      </p>
      {readMore === false && (
        <button onClick={() => setReadMore(true)} className="cursor-pointer">
          ...more
        </button>
      )}
      {readMore === true && (
        <button onClick={() => setReadMore(false)} className="cursor-pointer">
          ...less
        </button>
      )}
    </div>
  );
}

export default VideoDescription;
