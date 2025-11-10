import React from "react";
import { images } from "../../assets/assets";
import useIcons from "../../hooks/useIcons";

export default function SideBar({ className }) {
  const {
    Dashboard,
    Payment,
    DownloadForm,
    Result,
    Improve,
    Attendance,
    Routine,
    User,
    Hoste,
    BloodDonate,
    Support,
    Logout,
  } = useIcons();

  const menus = [
    { icon: <Dashboard />, label: "Dashboard", href: "/" },
    { icon: <Payment />, label: "Payment", href: "/payment" },
    { icon: <DownloadForm />, label: "Download Form", href: "/download" },
    { icon: <Result />, label: "Result", href: "/result" },
    { icon: <Improve />, label: "Improve", href: "/improve" },
    { icon: <Attendance />, label: "Attendance", href: "/attendance" },
    { icon: <Routine />, label: "Routine", href: "/routine" },
    { icon: <User />, label: "User Profile", href: "/user" },
    { icon: <Hoste />, label: "Hostel", href: "/hostel" },
    { icon: <BloodDonate />, label: "Blood Donate", href: "/blood-donate" },
    { icon: <Support />, label: "Support", href: "/support" },
    { icon: <Logout />, label: "Logout", href: "/support" },
  ];
  return (
    <div className={`${className}`}>
      <img src={images.logo} alt="logo" className="w-40" />
      <hr className="mt-5 border-black/10" />

      <ul className="flex flex-col my-5">
        {menus.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 hover:bg-white hover:text-green-700 rounded-xl cursor-pointer duration-300 px-5 py-3 font-medium w-68 ${
              item.label === "Logout" && "hover:text-red-700"
            }`}
          >
            {item.icon} {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
