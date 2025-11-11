import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import SectionTitle from "../../UI/SectionTitle";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    // title: {
    //   display: true,
    //   text: "Results",
    // },
  },
};

// Your raw data
const results = [
  { semester: "1st Semester", gpa: 3.53 },
  { semester: "2nd Semester", gpa: 3.23 }, // Changed data for a better example
  { semester: "3rd Semester", gpa: 3.56 }, // Changed data for a better example
  { semester: "4th Semester", gpa: 3.64 }, // Changed data for a better example
  { semester: "5th Semester", gpa: 3.82 }, // Changed data for a better example
  { semester: "6th Semester", gpa: 3.73 }, // Changed data for a better example
  { semester: "7th Semester", gpa: 3.33 }, // Changed data for a better example
  { semester: "8th Semester", gpa: 4.0 }, // Changed data for a better example
];

// 1. Create the 'labels' array (for the X-axis)
const labels = results.map((result) => result.semester);

// 2. Create the final 'data' object in the correct structure
const data = {
  labels: labels, // Use the 'labels' array here
  datasets: [
    {
      label: "Semester GPA", // More descriptive label
      data: results.map((result) => result.gpa),
      backgroundColor: "rgba(30, 130, 76, 0.8)",
    },
  ],
};

// ------------------------------------

export default function SemesterGrade() {
  return (
    <div className="bg-gray-100 p-5 rounded-xl">
      <SectionTitle title={"Semester Grade"} />
      <div>
        <Bar options={options} data={data} className="cursor-pointer w-full" />
      </div>
    </div>
  );
}
