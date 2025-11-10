import React from "react";
import useIcons from "../../../hooks/useIcons";

export default function CurrentDue() {
  const { Payment } = useIcons();
  return (
    <div className="p-5 flex gap-5 items-center">
      <div className="rounded-full bg-red-700 text-white p-5 text-2xl">
        <Payment />
      </div>
      <div className="font-bold">
        <h3 className="text-3xl">$ 20000</h3>
        <p className="text-black/50">Current Due</p>
      </div>
    </div>
  );
}
