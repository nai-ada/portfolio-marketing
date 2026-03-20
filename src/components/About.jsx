export default function About() {
  return (
    <div className="flex justify-center mx-8 mt-40 md:mt-50" id="about">
      <div className="max-w-xl text-orange-500 text-[12px] md:text-[15px] font-lilex">
        <p>
          Hey, you made it! Thanks for taking the time to explore my website.
          I'm a Vancouver-based social media marketing coordinator and software
          developer who can't seem to stay in one creative lane.
        </p>
        <br></br>
        <p>
          I'm passionate about transforming local businesses from "Never heard
          of it" to "Yeah! Did you see their post on Instagram? It was hilarious
          - I shop there all the time now!"
        </p>
        <br></br>
        <p>
          At 12, I was editing videos for fun on Splice (we ALL remember Splice,
          right?), dreaming about creating content people would actually engage
          with. Now I get to do exactly that for real brands! Nothing beats
          watching people respond to work you've poured your heart into.
        </p>
        <br></br>
        <p>
          Want to get to know me even more? Check out{" "}
          <a
            href="https://youtube.com"
            className="underline text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            this link
          </a>{" "}
          for a quick video about me!
        </p>
      </div>
    </div>
  );
}
