import CaseStudies from "./CaseStudies";
import SelectedContent from "./SelectedContent";

export default function Work() {
  return (
    <div id="work" className="m-4">
      <h2 className="text-blue-600 mt-10 text-[46px] font-bold text-center font-sour">
        case studies
      </h2>
      <CaseStudies />
      <h2 className="text-blue-600 text-[46px] font-bold text-center font-sour">
        featured content
      </h2>
      <SelectedContent />
    </div>
  );
}
