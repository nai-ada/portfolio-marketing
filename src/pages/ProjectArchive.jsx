import VideoPlayer from "../components/VideoPlayer";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import vlog1 from "../assets/videos/vlog1.mp4";
import twiceEvent from "../assets/videos/twice-event.mp4";
import giftExchange from "../assets/videos/gift-exchange.mp4";
import shopLocal from "../assets/videos/shop-local.mp4";
import boyfriendVid from "../assets/videos/boyfriend-vid.mp4";
import colorHunt from "../assets/videos/color-hunt.mp4";
import phoneDeco from "../assets/videos/phone-deco.mp4";
import customerFeature from "../assets/videos/customer-feature.mp4";
import artPrint from "../assets/videos/art-print.mov";
import alienStage from "../assets/videos/alien-stage.mp4";
import jjkDetailed from "../assets/videos/jjk-detailed.mp4";
import halloweenRecap from "../assets/videos/halloween-recap.mp4";
import halloweenLiveDrawing from "../assets/videos/halloween-live-drawing.mp4";
import japaneseUnboxing from "../assets/videos/japanese-unboxing.mp4";

export default function ProjectArchive() {
  const categories = [
    { label: "vlogs", videos: [artPrint, vlog1] },
    {
      label: "promo",
      videos: [
        twiceEvent,
        boyfriendVid,
        shopLocal,
        customerFeature,
        alienStage,
        jjkDetailed,
        halloweenRecap,
        halloweenLiveDrawing,
      ],
    },
    { label: "trends", videos: [colorHunt, giftExchange] },
    { label: "unboxings", videos: [japaneseUnboxing] },
    { label: "hauls", videos: [phoneDeco] },
  ];

  return (
    <>
      <Logo />
      <div className="text-blue-600 m-4 pt-0 mt-0 text-center font-sour">
        <h1 className=" font-bold text-[65px] md:text-[80px] leading-none mb-5">
          project archive
        </h1>
        <p>here you can view all my work in one place.</p>
        <Link to="/">
          <p className="mt-4 font-lilex text-black text-[12px] underline">
            ← take me back to the homepage!
          </p>
        </Link>
      </div>

      <div className="border-b border-gray-300 mt-10 max-w-[650px] mx-auto"></div>

      <div className="md:ml-10 md:mr-10 lg:ml-30 lg:mr-30 mt-8">
        {categories.map(({ label, videos }, index) => (
          <div
            key={label}
            className={index === categories.length - 1 ? "mb-12" : ""}
          >
            <h3 className="font-lilex text-[14px] text-center text-orange-500 m-4">
              <span className="font-bold italic text-[28px]">{label}</span>
            </h3>
            <VideoPlayer videos={videos} className="max-w-50" />
            {index < categories.length - 1 && (
              <div className="border-b border-gray-300 mt-10 max-w-[650px] mx-auto"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
