import { useState, useEffect } from "react";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-26 md:bottom-14 cursor-pointer right-[max(1rem,calc((100vw-980px)/2))] px-4 py-2 bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] font-sour text-blue-500 hover:text-orange-600 mt-8 flex justify-end transition-all"
        >
          back to top ⇡
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
