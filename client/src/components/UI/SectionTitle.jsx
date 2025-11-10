import React from "react";

export default function SectionTitle({ className, title }) {
  return <h2 className={`font-bold text-3xl ${className}`}>{title}</h2>;
}
