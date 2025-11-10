import React from "react";

export default function Heading({ images }) {
  return (
    <div className="relative mt-10">
      <img
        src={images.profileHeading}
        alt="heading-bg"
        className="rounded-xl"
      />
      <img
        src={images.image}
        alt="avatar"
        className="rounded-full absolute right-0 bottom-0"
      />
      <div className="absolute top-0 left-0 p-5">
        <h2 className="text-white font-bold text-3xl">Saleh Ahmed Mahin</h2>
        <hr className="my-3 border-gray-50/20" />
        <p className="text-white text-lg">
          <span className="font-bold">Student ID:</span> 123456789
        </p>
        <p className="text-white text-lg">
          <span className="font-bold">Roll:</span> 123456789
        </p>
        <p className="text-white text-lg">
          <span className="font-bold">Department:</span> Computer Technology
        </p>
        <p className="text-white text-lg">
          <span className="font-bold">Semester:</span> 8th
        </p>
        <p className="text-white text-lg">
          <span className="font-bold">Session:</span> 19-20
        </p>
      </div>
    </div>
  );
}
