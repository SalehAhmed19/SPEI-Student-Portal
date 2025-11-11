import React, { useState } from "react";
import { images } from "../../assets/assets";
import useIcons from "../../hooks/useIcons";
import { Link } from "react-router-dom";

export default function SideBar({ className }) {
  const location = window.location.pathname;
  const [activeId, setActiveId] = useState(location);

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
    {
      icon: <Dashboard />,
      label: "Dashboard",
      href: "/dashboard",
      submenu: [],
    },

    {
      icon: <DownloadForm />,
      label: "Download Form",
      href: "/download-forms",
      submenu: [],
    },
    { icon: <Result />, label: "Result", href: "/results", submenu: [] },
    { icon: <Improve />, label: "Improve", href: "/improvement", submenu: [] },
    {
      icon: <Attendance />,
      label: "Attendance",
      href: "/attendance",
      submenu: [],
    },
    { icon: <Routine />, label: "Routine", href: "/routine", submenu: [] },
    { icon: <User />, label: "User Profile", href: "/profile", submenu: [] },
    { icon: <Hoste />, label: "Hostel", href: "/hostel", submenu: [] },
    {
      icon: <BloodDonate />,
      label: "Blood Donate",
      href: "/blood-donate",
      submenu: [],
    },
    { icon: <Support />, label: "Support", href: "/support", submenu: [] },
  ];

  const paymentsMenu = {
    icon: <Payment />,
    label: "Payment",
    href: location,
    submenu: [
      { label: "Pay Fees", href: "/accounts/pay-fees" },
      { label: "Account Details", href: "/accounts/account-details" },
      {
        label: "Hostel Account Details",
        href: "/accounts/hostel-account-details",
      },
    ],
  };

  const logout = {
    icon: <Logout />,
    label: "Logout",
    href: "/support",
    submenu: [],
  };

  const [dropDown, setDropdown] = useState(false);

  // const activeItem = menus.find((item) => item.label === activeId);
  return (
    <div className={`${className}`}>
      <img src={images.logo} alt="logo" className="w-40" />
      <hr className="mt-5 border-black/10" />

      <ul className="flex flex-col my-5">
        {menus.map((item, index) => {
          const isActive = item.label === activeId;
          return (
            <div key={index} className="">
              <li>
                <Link
                  to={item.href}
                  onClick={() => {
                    setActiveId(item.label);
                  }}
                  className={`flex items-center gap-2 font-medium w-68 hover:bg-white hover:text-green-700 rounded-xl cursor-pointer duration-300 px-5 py-3 ${
                    item.label === "Logout" && "hover:text-red-700"
                  } ${
                    isActive && "bg-green-700 text-white" // Active state
                  } `}
                >
                  {item.icon} {item.label}
                </Link>
              </li>
              {item.submenu.length > 0 &&
                item.submenu.map((sm, idx) => (
                  <li>
                    <Link
                      to={sm.href}
                      key={idx}
                      className={`hover:bg-white hover:text-green-700 rounded-xl cursor-pointer duration-300 px-5 py-3 pl-10 flex items-center gap-2 ${
                        item.submenu.length > 0 && dropDown ? "block" : "hidden"
                      }`}
                    >
                      <div className="h-2 w-2 rounded-full bg-green-700"></div>{" "}
                      {sm.label}
                    </Link>
                  </li>
                ))}
            </div>
          );
        })}

        <li>
          <Link
            to={"/accounts/pay-fees"}
            onClick={() => {
              setActiveId("Payment");
              setDropdown(!dropDown);
            }}
            className={`flex items-center gap-2 font-medium w-68 hover:bg-white hover:text-green-700 rounded-xl cursor-pointer duration-300 px-5 py-3  `}
          >
            <Payment /> Payment
          </Link>
        </li>

        {paymentsMenu.submenu.length > 0 &&
          paymentsMenu.submenu.map((sm, idx) => (
            <li>
              <Link
                to={sm.href}
                key={idx}
                className={`hover:bg-white hover:text-green-700 rounded-xl cursor-pointer duration-300 px-5 py-3 pl-10 flex items-center gap-2 ${
                  paymentsMenu.submenu.length > 0 && dropDown
                    ? "block"
                    : "hidden"
                }`}
              >
                <div className="h-2 w-2 rounded-full bg-green-700"></div>{" "}
                {sm.label}
              </Link>
            </li>
          ))}

        <li
          className={`hover:bg-red-700 hover:text-white rounded-xl cursor-pointer duration-300 px-5 py-3 flex items-center gap-2`}
        >
          <Logout />
          {logout.label}
        </li>
      </ul>
    </div>
  );
}
