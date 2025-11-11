import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import { announcement } from "../../../assets/assets";

export default function Announcement() {
  return (
    <div className="bg-gray-100 p-5 rounded-xl">
      <SectionTitle title={"Announcement"} />

      <hr className="border-black/10 my-5" />

      <ul className="h-86 overflow-y-scroll">
        {announcement.map((ann, idx) => (
          <li
            key={idx}
            className="p-3 hover:bg-white rounded-xl duration-300 cursor-pointer flex gap-4 items-center bangla-font"
          >
            <div className="h-2 w-2 bg-green-700"></div>{" "}
            {ann.title.slice(0, 75) + "..."}
          </li>
        ))}
      </ul>
      <p className="text-green-700 font-bold cursor-pointer">See More...</p>
    </div>
  );
}
