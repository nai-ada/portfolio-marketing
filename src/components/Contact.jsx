import smiski from "../assets/images/smiski.gif";
import email from "../assets/images/email.png";
import linkedin from "../assets/images/linkedin.png";
import instagram from "../assets/images/instagram.png";
import tiktok from "../assets/images/tik-tok.png";

const Contact = () => {
  return (
    <div className="ml-2 mr-2 md:ml-10 md:mr-10">
      <h2 className="text-blue-600 mt-10 text-[46px] font-bold text-center font-sour">
        i'd love to work with you!
      </h2>
      <p className="text-center mx-auto mt-5 max-w-xl text-orange-500 text-[12px] md:text-[15px] font-lilex">
        Whether you're looking to amplify your brand's voice, grow your social
        media presence, or develop a digital marketing strategy that actually
        converts, I'd love to hear about your project.
      </p>

      <img
        src={smiski}
        alt="smiski exercising"
        className="m-auto max-w-40"
      ></img>

      <div className="flex m-auto justify-center mb-20 mt-6">
        <ul className="flex gap-10 md:gap-16">
          <li className="hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer">
            <a
              href="mailto:nadiavespalec00@gmail.com"
              className="underline decoration-transparent hover:decoration-current transition-colors duration-300"
            >
              <img src={email} alt="" className="w-7"></img>
            </a>
          </li>
          <li className="hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer">
            <a
              href="https://www.linkedin.com/in/nadiavespalec"
              className="underline decoration-transparent hover:decoration-current transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" className="w-7"></img>
            </a>
          </li>
          <li className="hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer">
            <a
              href="https://www.instagram.com"
              className="underline decoration-transparent hover:decoration-current transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="" className="w-7"></img>
            </a>
          </li>
          <li className="hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer">
            <a
              href="https://www.tiktok.com"
              className="underline decoration-transparent hover:decoration-current transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktok} alt="" className="w-7"></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
