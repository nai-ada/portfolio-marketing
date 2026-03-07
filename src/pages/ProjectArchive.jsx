import VideoPlayer from "../components/VideoPlayer";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
const vlog1 =
  "https://res.cloudinary.com/dpday3x3j/video/upload/v1772887536/vlog1_zruxu3.mp4";
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
const phoneDeco =
  "https://res.cloudinary.com/dpday3x3j/video/upload/v1772887532/phone-deco_xpfh6m.mp4";
const customerFeature =
  "https://res.cloudinary.com/dpday3x3j/video/upload/v1772889126/customer-feature_eplyqi.mp4";
const artPrint =
  "https://res.cloudinary.com/dpday3x3j/video/upload/f_mp4/v1772887420/art-print_idovdh.mov";
const alienStage =
  "https://res.cloudinary.com/dpday3x3j/video/upload/f_mp4/v1772887420/alien-stage_drrnw0.mov";
const jjkDetailed =
  "https://res.cloudinary.com/dpday3x3j/video/upload/v1772889131/jjk-detailed_yvdbrw.mp4";
const halloweenRecap =
  "https://res.cloudinary.com/dpday3x3j/video/upload/f_mp4,vc_h264/v1772887495/halloween-recap_uieoit.mp4";
const halloweenLiveDrawing =
  "https://res.cloudinary.com/dpday3x3j/video/upload/f_mp4,vc_h264/v1772887475/halloween-live-drawing_fxnugp.mp4";
const japaneseUnboxing =
  "https://res.cloudinary.com/dpday3x3j/video/upload/v1772887510/japanese-unboxing_qm2qgs.mp4";
const bouquetEvent =
  "https://res.cloudinary.com/dpday3x3j/video/upload/v1772887419/bouquet-event_moum4z.mp4";

export default function ProjectArchive() {
  const categories = [
    { label: "vlogs", videos: [artPrint, vlog1] },
    {
      label: "promo",
      videos: [
        twiceEvent,
        boyfriendVid,
        bouquetEvent,
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
