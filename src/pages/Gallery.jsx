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

export default function Gallery() {
  const categories = [
    {
      label: "vlogs",
      videos: [
        {
          url: artPrint,
          title: "Art Print Unboxing",
          description: "watch me unbox a new art print for the shop",
        },
        {
          url: vlog1,
          title: "Day in My Life",
          description: "a cozy day running the shop",
        },
      ],
    },
    {
      label: "promo",
      videos: [
        {
          url: twiceEvent,
          title: "TWICE Pop-Up Event",
          description: "we set up a booth at a TWICE fan event 🎀",
        },
        {
          url: boyfriendVid,
          title: "Boyfriend Does My Makeup",
          description: "letting him loose with the brushes 💄",
        },
        {
          url: bouquetEvent,
          title: "Bouquet Workshop",
          description: "covering a local bouquet-making workshop 🌸",
        },
        {
          url: shopLocal,
          title: "Shop Local",
          description: "supporting small businesses in the city",
        },
        {
          url: customerFeature,
          title: "Customer Feature",
          description: "featuring one of our amazing customers 🧡",
        },
        {
          url: alienStage,
          title: "Alien Stage Fan Art",
          description: "promoting our alien stage inspired prints",
        },
        {
          url: jjkDetailed,
          title: "JJK Detailed Illustration",
          description: "a closer look at our jujutsu kaisen piece",
        },
        {
          url: halloweenRecap,
          title: "Halloween Event Recap",
          description: "recap of our halloween pop-up 🎃",
        },
        {
          url: halloweenLiveDrawing,
          title: "Halloween Live Drawing",
          description: "live drawing session at the halloween event",
        },
      ],
    },
    {
      label: "trends",
      videos: [
        {
          url: colorHunt,
          title: "Color Hunt",
          description: "hunting for color inspo around the city 🎨",
        },
        {
          url: giftExchange,
          title: "Gift Exchange",
          description: "our holiday gift exchange reveal 🎁",
        },
      ],
    },
    {
      label: "unboxings",
      videos: [
        {
          url: japaneseUnboxing,
          title: "Japanese Stationery Unboxing",
          description: "unboxing a haul of japanese stationery 🇯🇵",
        },
      ],
    },
    {
      label: "hauls",
      videos: [
        {
          url: phoneDeco,
          title: "Phone Deco Haul",
          description: "everything i got for decorating my phone 📱",
        },
      ],
    },
  ];

  return (
    <>
      <Logo />
      <div className="text-blue-600 m-4 pt-0 mt-0 text-center font-sour">
        <h1 className=" font-bold text-[65px] md:text-[80px] leading-none mb-5">
          <span className="font-normal">✧</span> content gallery{" "}
          <span className="font-normal">✧</span>
        </h1>
        <p className="font-lilex text-orange-500">
          all my content in one place!
        </p>
        <Link to="/">
          <p className="underline decoration-transparent hover:decoration-current transition-colors text-[12px] font-lilex mt-4 text-gray-600 hover:text-orange-500 duration-300">
            ← take me back to the homepage!
          </p>
        </Link>
      </div>

      <div className="border-b border-gray-300 mt-10 max-w-[600px] mx-auto"></div>

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
              <div className="border-b border-gray-300 mt-10 max-w-[600px] mx-auto"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
