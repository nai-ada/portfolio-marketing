import VideoPlayer from "./VideoPlayer";
import vlog1 from "../assets/videos/vlog1.mp4";
import vlog2 from "../assets/videos/vlog2.mp4";
import matcha1 from "../assets/videos/matcha1.mp4";
import giftExchange from "../assets/videos/gift-exchange.mp4";
import ugc1 from "../assets/videos/ugc1.mp4";
import ugc2 from "../assets/videos/ugc2.mp4";
import ugc3 from "../assets/videos/ugc3.mp4";
import ugc4 from "../assets/videos/ugc4.mp4";

export default function Work() {
  const dreamCollective = [vlog1, vlog2, matcha1, giftExchange];
  const ugcContent = [ugc1, ugc2, ugc3, ugc4];
  return (
    <div id="work" className="m-4">
      <h2 className="text-blue-600 mt-10 text-[46px] font-bold text-center font-sour">
        at a glance
      </h2>

      {/* this is a link to archive page */}
      <p className="text-gray-600 cursor-pointer text-center m-6 underline font-lilex">
        full project archive ↗
      </p>

      <div className="md:ml-10 md:mr-10 lg:ml-30 lg:mr-30">
        <div>
          <h3 className="font-lilex text-[14px] text-center text-orange-500 m-4 ">
            <span className="font-bold italic text-[18px]">
              Dream Collective Canada
            </span>{" "}
            <span className="text-[18px]">|</span> vlogs, trends, and more
          </h3>
          <VideoPlayer videos={dreamCollective} className="max-w-50" />
        </div>

        <div className="border-b border-gray-300 mt-10"></div>

        <div className="mt-10">
          <h3 className="font-lilex text-[14px] text-center text-orange-500 m-4">
            <span className="font-bold italic text-[18px]">
              UGC @nectariniche
            </span>{" "}
            <span className="text-[18px]">|</span> unboxings, hauls, reviews,
            and more
          </h3>
          <VideoPlayer videos={ugcContent} />
        </div>
      </div>
    </div>
  );
}
