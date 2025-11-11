import React from "react";
import { useForm, Controller } from "react-hook-form"; // No change here
import SectionTitle from "../../components/UI/SectionTitle";
import { images } from "../../assets/assets";
import Autocomplete from "@mui/joy/Autocomplete";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Bkash from "./Bkash";
import Nagad from "./Nagad";
import CardPayment from "./CardPayment";

export default function PayFeesP() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      "payment-type": null, // CHANGED: Default is null (will hold a string)
      amount: null, // CHANGED: Default is null (will hold a number)
    },
  });

  const options = [
    { label: "Tution Fee" },
    { label: "ID Card Fee" },
    { label: "Shoulder, Monogram, Tie Fee" },
    { label: "Registration Fee" },
    { label: "Academic Transcript Fee" },
    { label: "Mid-Term Exam Fee" },
    { label: "Form Fillup Fee" },
    { label: "Hostel Fee" },
    { label: "Main Certificate Fee" },
    { label: "Industrial Attachment Fee" },
  ];

  const onSubmit = (data) => {
    // This data will now be in your desired format:
    // { "payment-type": "Tution Fee", amount: 2500 }
    console.log(data);
    reset();
  };

  return (
    <div className="py-5 pr-5">
      <SectionTitle title={"Select Payment Method"} />
      <hr className="border-black/10 my-8 w-full" />

      <SectionTitle title={"Mobile Banking"} className={"text-center my-10"} />
      <div className="grid grid-cols-2 gap-5">
        <Bkash
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          control={control}
          options={options}
        />
        <Nagad
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          control={control}
          options={options}
        />
      </div>

      <SectionTitle title={"Card Payment"} className={"text-center my-10"} />
      <div className="flex justify-center">
        <CardPayment
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          control={control}
          options={options}
        />
      </div>
    </div>
  );
}
