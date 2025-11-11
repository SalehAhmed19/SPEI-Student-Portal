import React from "react";
import SectionTitle from "../../components/UI/SectionTitle";
import TableSummary from "./TableSummary";
import OtherDetails from "./OtherDetails";

export default function AccountDetailsP() {
  return (
    <div className="py-5 pr-5">
      <SectionTitle title={"Account Details"} />
      <hr className="my-8 border-black/10" />

      <div className="flex flex-col gap-10">
        <TableSummary />
        <OtherDetails />
      </div>
    </div>
  );
}
