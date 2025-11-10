import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import useIcons from "../../../hooks/useIcons";

export default function Summary() {
  const { Number, Result } = useIcons();
  return (
    <div>
      <SectionTitle title={"Summary"} />

      <hr className="border-black/10 my-8" />

      <div>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-3 items-center text-xl">
            <div className="bg-green-700 text-white p-2 rounded-xl">
              <Number className="text-xl" />
            </div>{" "}
            <span className="font-bold">CGPA:</span> 3.56
          </li>
          <li className="flex gap-3 items-center text-xl">
            <div className="bg-green-700 text-white p-2 rounded-xl">
              <Result className="text-xl" />
            </div>{" "}
            <span className="font-bold">Avarage Grade:</span> B+
          </li>
          <li className="flex gap-3 items-center text-xl">
            <div className="bg-green-700 text-white p-2 rounded-xl">
              <Result className="text-xl" />
            </div>{" "}
            <span className="font-bold">Total Credit:</span> 150
          </li>
        </ul>
      </div>
    </div>
  );
}
