import CaseStudies from "./CaseStudies";
import SelectedContent from "./SelectedContent";

export default function Work() {
  return (
    <div id="work" className="m-4">
      <h2 className="text-blue-600 mt-10 text-[46px] font-bold text-center font-sour">
        case studies
      </h2>
      <div className="flex justify-center mx-8 mt-4 mb-4">
        <div className="max-w-xl text-orange-500 text-[12px] md:text-[15px] font-lilex">
          <p>
            Each case study breaks down a real marketing challenge — what I
            tried, what I learned, and how it shaped the way I approach social
            media strategy. A look into my process, not just my results.
          </p>
        </div>
      </div>
      <CaseStudies />
      <h2 className="text-blue-600 text-[46px] font-bold text-center font-sour">
        featured content
      </h2>
      <SelectedContent />
    </div>
  );
}
