function VideoPlayer({ videos }) {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:ml-10 md:mr-10">
      {videos.map((video, i) => (
        <video
          key={i}
          autoPlay={!isMobile}
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
      ))}
    </div>
  );
}

export default VideoPlayer;
