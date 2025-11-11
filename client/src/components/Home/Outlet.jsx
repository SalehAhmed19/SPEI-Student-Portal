import { images } from "../../assets/assets";
import Announcement from "./Announcement/Announcement";
import BalanceHighlights from "./BalanceHighlights/BalanceHighlights";
import Heading from "./Heading";
import OverallPerformance from "./SemesterGrade/OverallPerformance";
import SemesterGrade from "./SemesterGrade/SemesterGrade";
import Summary from "./SemesterGrade/Summary";

export default function Outlet({ className }) {
  return (
    <div
      className={`${className} py-5 pb-10 flex flex-col gap-20 h-screen overflow-y-scroll hide-scrollbar`}
    >
      <Heading images={images} />

      <BalanceHighlights />
      <div className="grid grid-cols-2 gap-5">
        <SemesterGrade />
        <Announcement />
        <Summary />
        <OverallPerformance />
      </div>
    </div>
  );
}
