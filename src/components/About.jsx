const email = "/images/email.png";
const linkedin = "/images/linkedin.png";

export default function About() {
  return (
    <div className="flex justify-center mx-8 mt-40 md:mt-50" id="about">
      <div className="max-w-xl text-orange-500 text-[12px] md:text-[15px] font-lilex">
        <p>
          Welcome to my corner of the web! I'm a social media and digital
          marketing professional with a background in web development and a
          growing interest in SEO, analytics, and digital strategy. Right now, I
          work as a social media marketing coordinator, creating content that
          helps brands connect with their audiences in a way that feels engaging
          and intentional.
        </p>
        <br></br>
        <p>
          At 12, I was editing videos for fun on iMovie and Splice (we ALL
          remember Splice, right?), dreaming about creating content people would
          actually engage with. Now, I produce real work with real results,
          fulfilling my childhood dream.
        </p>
        <br></br>
        <p>
          Want to learn even more about me? Check out{" "}
          <a
            href="https://youtube.com"
            className="underline text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            this link
          </a>{" "}
          for a quick video!
        </p>
        <br></br>
        <p className="text-blue-600">
          Wanting to chat? Feel free to reach me via email or LinkedIn:
        </p>
        <ul className="flex gap-6 mt-5">
          <li className="hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer">
            <a
              href="mailto:nadiavespalec00@gmail.com"
              className="underline decoration-transparent hover:decoration-current transition-colors duration-300"
            >
              <img src={email} alt="" className="w-5 md:w-6"></img>
            </a>
          </li>

          <li className="hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer">
            <a
              href="https://www.linkedin.com/in/nadiavespalec"
              className="underline decoration-transparent hover:decoration-current transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" className="w-5 md:w-6"></img>
            </a>
          </li>
        </ul>

        <div className="border-b border-gray-300 mt-16"></div>
      </div>
    </div>
  );
}
