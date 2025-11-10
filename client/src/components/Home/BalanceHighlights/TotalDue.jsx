import React from "react";
import useIcons from "../../../hooks/useIcons";

export default function TotalDue() {
  const { Payment } = useIcons();
  return (
    <div className="p-5 flex gap-5 items-center">
      <div className="rounded-full bg-orange-500 text-white p-5 text-2xl">
        <Payment />
      </div>
      <div className="font-bold">
        <h3 className="text-3xl">$ 260000</h3>
        <p className="text-black/50">Total Due</p>
      </div>
    </div>
  );
}
