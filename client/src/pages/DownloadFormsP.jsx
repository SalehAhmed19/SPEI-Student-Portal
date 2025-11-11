import React from "react";
import SectionTitle from "../components/UI/SectionTitle";
import { forms, icons } from "../assets/assets";
import useIcons from "../hooks/useIcons";

export default function DownloadFormsP() {
  const { DownloadForm } = useIcons();
  return (
    <div className="py-5 pr-5">
      <SectionTitle title={"Download Forms"} />

      <hr className="my-8 border-black/10" />

      <div className="grid grid-cols-4 gap-5">
        {forms.map((form, idx) => (
          <div
            key={idx}
            className="bg-gray-100 p-5 rounded-xl text-green-700 text-center font-bold"
          >
            <h5 className="text-xl">{form.title}</h5>

            <button className="text-xl bg-white text-green-700 hover:bg-green-700 hover:text-white duration-300 px-5 py-2 rounded-full cursor-pointer mt-5">
              <DownloadForm className="mx-auto" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
