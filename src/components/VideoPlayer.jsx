import { useEffect, useRef } from "react";

function VideoItem({ video }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.play();
        } else {
          ref.current.pause();
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      controls
      style={{
        width: "100%",
        maxWidth: "250px",
        display: "block",
        margin: "20px auto",
        border: "2px round",
      }}
      className="rounded-xl"
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

function VideoPlayer({ videos }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:ml-10 md:mr-10">
      {videos.map((video, i) => (
        <VideoItem key={i} video={video} />
      ))}
    </div>
  );
}

export default VideoPlayer;
