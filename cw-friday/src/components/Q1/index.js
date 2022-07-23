import { useRef } from "react";

function ShowVideo() {
  const myVideo = useRef(null);
  return (
    <div>
      <video ref={myVideo} width="320" height="176" controls>
        <source
          src="https://res.cloudinary.com/daintu6ky/video/upload/v1573070866/screen_Recording_2019-11-06_at_4.14.52_PM.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <button
          onClick={() => {
            myVideo.current.play();
          }}
        >
          Play
        </button>
        <button
          onClick={() => {
            myVideo.current.pause();
          }}
        >
          Pause
        </button>
      </div>
    </div>
  );
}

export default ShowVideo;
