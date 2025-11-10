import React from "react";
import TotalPaid from "./TotalPaid";
import CurrentDue from "./CurrentDue";
import TotalDue from "./TotalDue";

export default function BalanceHighlights() {
  return (
    <div className="grid grid-cols-3 gap-5">
      <TotalPaid />
      <CurrentDue />
      <TotalDue />
    </div>
  );
}
