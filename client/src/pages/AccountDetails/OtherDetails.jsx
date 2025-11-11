import React from "react";
import SectionTitle from "../../components/UI/SectionTitle";
import OtherInformationTable from "./OtherInformationTable";

export default function OtherDetails() {
  return (
    <div>
      <SectionTitle title={"Other Infromation"} />
      <hr className="my-8 border-black/10" />

      <OtherInformationTable />
    </div>
  );
}
