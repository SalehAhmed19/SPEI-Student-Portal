import React from "react";
import { images } from "../../assets/assets";
import { Controller } from "react-hook-form";
import Autocomplete from "@mui/joy/Autocomplete";
import Input from "@mui/joy/Input";

export default function Bkash({ handleSubmit, onSubmit, control, options }) {
  return (
    <div className="flex items-center gap-5">
      <img src={images.bKash} alt="bkash" className="rounded-2xl w-40" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <Controller
          name="payment-type"
          control={control}
          rules={{ required: "Please select a payment type" }}
          render={({ field }) => (
            <Autocomplete
              placeholder="Select Payment Type"
              options={options}
              getOptionLabel={(option) => option.label}
              // CHANGED: Find the option object that matches the RHF string value
              value={options.find((o) => o.label === field.value) || null}
              // CHANGED: Send only the label string (or null) to RHF
              onChange={(_, newValue) => {
                field.onChange(newValue ? newValue.label : null);
              }}
              onBlur={field.onBlur}
              isOptionEqualToValue={(option, value) =>
                option.label === value.label
              }
            />
          )}
        />

        <Controller
          name="amount"
          control={control}
          rules={{ required: "Please enter an amount" }}
          render={({ field }) => (
            <Input
              placeholder="Amount"
              color="neutral"
              variant="outlined"
              // CHANGED: Ensure the input uses number type
              type="number"
              // CHANGED: Convert null to '' for the input field
              value={field.value === null ? "" : field.value}
              // CHANGED: Parse the string value to a number (or null)
              onChange={(e) => {
                const val = e.target.value;
                // Set to null if empty, otherwise parse as a number
                field.onChange(val === "" ? null : parseFloat(val));
              }}
              onBlur={field.onBlur}
              name={field.name}
              ref={field.ref}
            />
          )}
        />

        <button
          type="submit"
          className="bg-green-700 px-5 py-2 rounded-md text-white font-bold cursor-pointer"
        >
          Pay
        </button>
      </form>
    </div>
  );
}
