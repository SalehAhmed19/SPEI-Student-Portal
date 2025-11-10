import React from "react";
import useIcons from "../../../hooks/useIcons";

export default function TotalPaid() {
  const { Payment } = useIcons();
  return (
    <div className="p-5 flex gap-5 items-center">
      <div className="rounded-full bg-green-700 text-white p-5 text-2xl">
        <Payment />
      </div>
      <div className="font-bold">
        <h3 className="text-3xl">$ 200000</h3>
        <p className="text-black/50">Total Paid</p>
      </div>
    </div>
  );
}
