const DownloadIcon = "/images/download_icon.png";

export default function Experience() {
  return (
    <>
      <div className="justify-center" id="experience">
        <h2 className="text-blue-600 mt-10 text-[46px] font-bold text-center font-sour">
          professional experience
        </h2>
        <div className="flex justify-center font-lilex mt-2">
          <a
            href="#"
            className="underline decoration-transparent hover:decoration-current transition-colors hover:text-orange-500 duration-300 flex"
          >
            download resume
            <img
              src={DownloadIcon}
              alt="download icon"
              className="w-5 ml-1"
            ></img>
          </a>
        </div>
        <div className="md:ml-10 md:mr-10 lg:ml-30 lg:mr-30">
          <ul class="timeline">
            <li class="timeline-event">
              <label class="timeline-event-icon"></label>
              <div class="timeline-event-copy">
                <p class="timeline-event-thumbnail font-lilex">
                  August 2025 - present
                </p>
                <h3 className="font-sour font-extrabold text-blue-600">
                  Digital Marketer
                </h3>
                <h4 className="font-lilex  text-orange-500">Volunteer work</h4>
                <p className="font-lilex">
                  <strong>Key Responsibilities:</strong>
                  <div className="text-[12px]">
                    <p>→ dhgdf</p>
                    <p>→ dhgdf</p>
                    <p>→ dhgdf</p>
                    <p>→ dhgdf</p>
                  </div>
                </p>
                <p className="font-lilex">
                  <strong>Role Highlights:</strong> <br></br>
                  Ständiges Verbessern des agilen Entwicklungsprozesses
                  beispielsweise durch Grunt, Yeoman, GIT, JIRA und
                  BrowserStack.
                </p>
              </div>
            </li>
            <li class="timeline-event">
              <label class="timeline-event-icon"></label>
              <div class="timeline-event-copy">
                <p class="timeline-event-thumbnail font-lilex">
                  August 2025 - present
                </p>
                <h3 className="font-sour font-extrabold text-blue-600">
                  Social Media Marketing Coordinator
                </h3>
                <h4 className="font-lilex  text-orange-500">
                  Dream Collective Canada
                </h4>
                <p className="font-lilex">
                  <strong>Key Responsibilities:</strong>
                  <div className="text-[12px]">
                    <p>→ dhgdf</p>
                    <p>→ dhgdf</p>
                    <p>→ dhgdf</p>
                    <p>→ dhgdf</p>
                  </div>
                </p>
                <p className="font-lilex">
                  <strong>Role Highlights:</strong> <br></br>
                  Ständiges Verbessern des agilen Entwicklungsprozesses
                  beispielsweise durch Grunt, Yeoman, GIT, JIRA und
                  BrowserStack.
                </p>
              </div>
            </li>
          </ul>
          <div className="border-b border-gray-300 mt-10"></div>
        </div>
      </div>
    </>
  );
}
