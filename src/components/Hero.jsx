import { useState } from "react";
const HeroProfileImg1 = "/images/japan.gif";
const HeroProfileImg2 = "/images/la.gif";
const HeroProfileImg3 = "/images/vancouver.gif";
const ClickMe = "/images/clickme.png";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: HeroProfileImg1,
      alt: "Photo of Nadia Vespalec in Shiba Park in Tokyo with Tokyo tower in the background",
    },
    {
      src: HeroProfileImg3,
      alt: "Gif of Nadia Vespalec in a store in Vancouver, BC waving to the camera in front of a mirror",
    },
    {
      src: HeroProfileImg2,
      alt: "Photo of Nadia Vespalec in Los Angeles, California on the Santa Monica ferris wheel",
    },
  ];

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="">
      <div className="text-blue-600 m-4 mt-0 text-center">
        <h1 className="font-sour font-bold text-[65px] md:text-[80px] leading-none mb-5">
          nadia vespalec
        </h1>
        <div>
          <h2 className="text-[14px] font-lilex">
            social media marketing coordinator ✧ software engineer ✧
            multi-hobbyist
          </h2>

          <div className="relative mx-auto max-w-md mt-4 mb-12">
            <div
              onClick={handleClick}
              className="relative cursor-pointer group"
              style={{ paddingBottom: "66.67%" }}
            >
              {images.map((img, index) => {
                const offset = index - currentIndex;
                const isVisible = offset >= 0;

                return (
                  <img
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    className={`absolute top-0 left-0 w-full transition duration-500 ease-out ${
                      isVisible
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    } ${offset === 0 ? "group-hover:scale-105 z-30" : ""}`}
                    style={{
                      transform: isVisible
                        ? `translateY(${offset * 18}px) translateX(${
                            offset * 8
                          }px) rotate(${offset * 8}deg) scale(${
                            1 - offset * 0.05
                          })`
                        : "translateY(-30px)",
                      zIndex: isVisible ? 30 - offset : 0,
                    }}
                  />
                );
              })}

              <div className="hidden sm:block  sm:bottom-[55%] sm:left-[80%] absolute transition-opacity duration-300 z-40 pointer-events-none">
                <img
                  src={ClickMe}
                  alt="Click me button"
                  className="animate-pulse w-25 rotate-[-5deg]"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
