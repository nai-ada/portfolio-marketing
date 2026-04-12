import VideoPlayer from "./VideoPlayer";
import { Link } from "react-router-dom";
const twiceEvent =
  "https://res.cloudinary.com/dpday3x3j/video/upload/f_mp4/v1772887535/twice-event_j34p5g.mov";
const giftExchange =
  "https://res.cloudinary.com/dpday3x3j/video/upload/f_mp4/v1772887456/gift-exchange_y3tjyi.mov";
const shopLocal =
  "https://res.cloudinary.com/dpday3x3j/video/upload/v1772887533/shop-local_qxhxk1.mp4";
const boyfriendVid =
  "https://res.cloudinary.com/dpday3x3j/video/upload/v1772887410/boyfriend-vid_mnpopb.mp4";
const colorHunt =
  "https://res.cloudinary.com/dpday3x3j/video/upload/v1772887415/color-hunt_xux4ik.mp4";
const artPrint =
  "https://res.cloudinary.com/dpday3x3j/video/upload/f_mp4/v1772887420/art-print_idovdh.mov";
const japaneseUnboxing =
  "https://res.cloudinary.com/dpday3x3j/video/upload/v1772887510/japanese-unboxing_qm2qgs.mp4";

export default function SelectedContent() {
  const featuredContent = [
    { url: artPrint, description: "art print unboxing 🎨", title: "art" },
    { url: twiceEvent, description: "twice pop-up event vlog", title: "twice" },
    { url: colorHunt, description: "color hunting in the city", title: "city" },
    {
      url: boyfriendVid,
      description: "bf does my makeup challenge",
      title: "makeup",
    },
    {
      url: giftExchange,
      description: "holiday gift exchange",
      title: "holiday",
    },
    { url: shopLocal, description: "shop local haul", title: "shop" },
  ];
  const featuredUgcContent = [japaneseUnboxing];

  return (
    <>
      <Link to="/gallery">
        <p className="text-gray-600 cursor-pointer text-center m-4 mt-2 underline font-lilex decoration-transparent hover:decoration-current transition-colors  hover:text-orange-500 duration-300">
          view content gallery ↗
        </p>
      </Link>

      <div className="md:ml-10 md:mr-10 lg:ml-30 lg:mr-30">
        <div>
          {/* <h3 className="font-lilex text-[14px] text-center text-orange-500 m-4 ">
            <span className="font-bold italic text-[18px]">
              Dream Collective Canada
            </span>{" "}
            <span className="text-[18px]">|</span> vlogs, trends, and more
          </h3> */}
          <VideoPlayer videos={featuredContent} className="max-w-50" />
        </div>

        <div className="border-b border-gray-300 mt-10"></div>

        {/* <div className="mt-10">
          <h3 className="font-lilex text-[14px] text-center text-orange-500 m-4">
            <span className="font-bold italic text-[18px]">
              UGC @nectariniche (shh! I'm a work in progress...)
            </span>{" "}
            <span className="text-[18px]">|</span> unboxings, hauls, reviews,
            and more
          </h3>
          <VideoPlayer videos={featuredUgcContent} />
        </div> */}
      </div>
    </>
  );
}
