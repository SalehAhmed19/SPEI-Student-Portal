import React from "react";
import SectionTitle from "../../UI/SectionTitle";

export default function OverallPerformance() {
  return (
    <div className="bg-gray-100 p-5 rounded-xl">
      <SectionTitle title={"Your overall performance"} />

      <hr className="border-black/10 my-5" />

      <ul className="text-xl flex flex-col gap-5">
        <li>
          <span className="font-bold">Class Attendence:</span> 0/23
        </li>
        <li>
          <span className="font-bold">Mid Term:</span> Present
        </li>
        <li>
          <span className="font-bold">Job Submitted:</span> 0/5
        </li>
      </ul>
    </div>
  );
}
