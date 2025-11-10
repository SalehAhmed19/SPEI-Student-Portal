import { images } from "../../assets/assets";
import BalanceHighlights from "./BalanceHighlights/BalanceHighlights";
import Heading from "./Heading";
import SemesterGrade from "./SemesterGrade/SemesterGrade";
import Summary from "./SemesterGrade/Summary";

export default function Outlet({ className }) {
  return (
    <div
      className={`${className} py-5 flex flex-col gap-20 h-screen overflow-y-scroll hide-scrollbar`}
    >
      <Heading images={images} />

      <BalanceHighlights />

      <div className="grid grid-cols-2 gap-10">
        <SemesterGrade />
        <Summary />
      </div>
    </div>
  );
}
