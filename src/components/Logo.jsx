import { useState } from "react";
import { Link } from "react-router-dom";
const LogoImage = "/images/logo.png";
const LogoActive = "/images/logo_active.png";

export default function Logo() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="p-1 flex justify-center">
        <Link to="/">
          <img
            src={isHovered ? LogoActive : LogoImage}
            alt="logo"
            className="w-20 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </Link>
      </div>
    </>
  );
}
