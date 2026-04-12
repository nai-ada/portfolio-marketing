const smiski = "/images/smiski.gif";
const email = "/images/email.png";
const linkedin = "/images/linkedin.png";

const Contact = () => {
  return (
    <div className="ml-2 mr-2 md:ml-10 md:mr-10">
      <h2 className="text-blue-600 mt-10 text-[46px] font-bold text-center font-sour">
        contact
      </h2>
      <p className="text-center mx-auto mt-5 max-w-xl text-orange-500 text-[12px] md:text-[15px] font-lilex">
        I'm currently open to full-time opportunities in social media marketing
        and adjacent roles. If you're looking for a collaborative team member
        who's as comfortable in a content calendar as they are in a data
        dashboard, I'd love to connect!
      </p>

      <img
        src={smiski}
        alt="smiski exercising"
        className="m-auto max-w-40"
      ></img>

      <div className="flex m-auto justify-center mb-20 mt-6 px-4">
        <ul className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16">
          <li className="flex justify-center font-lilex mt-2">
            <a
              href="mailto:nadiavespalec00@gmail.com"
              className="underline decoration-transparent text-[14px] hover:decoration-current text-gray-600 transition-colors hover:text-orange-500 duration-300 flex items-center"
            >
              nadiavespalec00@gmail.com
              <img src={email} alt="email icon" className="w-5 ml-2" />
            </a>
          </li>

          <li className="flex justify-center font-lilex mt-2">
            <a
              href="https://linkedin.com/in/nadiavespalec"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-transparent text-[14px] hover:decoration-current transition-colors text-gray-600  hover:text-orange-500 duration-300 flex items-center"
            >
              /nadiavespalec
              <img src={linkedin} alt="linkedin icon" className="w-5 ml-2" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
