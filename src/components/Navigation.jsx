import Logo from "./Logo";
import DownloadIcon from "../assets/images/download_icon.png";

export default function Navigation() {
  return (
    <>
      <Logo />
      <nav
        className="font-lilex text-[12px] md:text-[14px] text-blue-600 font-semibold"
        id="top"
      >
        <ul className="flex flex-wrap m-4 mt-0 justify-center space-x-5 md:space-x-10">
          <li>
            <a
              href="https://nadiavespalec.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:transition hover:duration-300"
            >
              visit my dev site
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="underline decoration-transparent hover:decoration-current transition-colors duration-300"
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="underline decoration-transparent hover:decoration-current transition-colors duration-300"
            >
              my work
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nadiavespalec"
              className="underline decoration-transparent hover:decoration-current transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </li>
          <li>
            <a
              href="mailto:nadiavespalec00@gmail.com"
              className="underline decoration-transparent hover:decoration-current transition-colors duration-300"
            >
              email
            </a>
          </li>
          <li>
            <a
              href="#"
              className="underline decoration-transparent hover:decoration-current transition-colors duration-300 flex"
            >
              resume
              <img
                src={DownloadIcon}
                alt="download icon"
                className="w-5 ml-1"
              ></img>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
