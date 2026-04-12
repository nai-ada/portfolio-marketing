function VideoPlayer({ videos }) {
  const isMobile = window.innerWidth <= 768;

  const getPoster = (videoUrl) => {
    return videoUrl
      .replace("/video/upload/", "/video/upload/so_0/")
      .replace(/\.(mp4|mov)$/, ".jpg");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:ml-10 md:mr-10">
      {videos.map(({ url, description, title }, i) => (
        <div
          key={i}
          className="bg-blue-200 rounded-xl m-5 shadow-xl mx-auto"
          style={{ maxWidth: "250px" }}
        >
          <video
            autoPlay={!isMobile}
            muted
            loop
            controls
            preload={isMobile ? "none" : "auto"}
            poster={getPoster(url)}
            className="rounded-t-xl"
            style={{
              display: "block",
              margin: "0 auto",
            }}
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="p-4">
            <p className="text-blue-600 font-semibold font-sour text-[20px] text-center">
              {title}
            </p>
            <p className="text-sm text-gray-600 font-lilex text-center mt-1 text-[12px]">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoPlayer;
