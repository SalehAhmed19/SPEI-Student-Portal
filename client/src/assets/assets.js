// importing images
import logo from "./images/logo.png";
import profileHeading from "./images/profile-heading.png";
import image from "./images/image.png";

// importing icons
import {
  MdDashboard,
  MdPayment,
  MdDownload,
  MdAccessTimeFilled,
  MdCalendarMonth,
  MdBedroomChild,
  MdContactSupport,
  MdLogout,
} from "react-icons/md";
import { IoDocumentsSharp } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa6";
import { BiSolidDonateBlood } from "react-icons/bi";
import { GoNumber } from "react-icons/go";

// images
export const images = {
  logo,
  profileHeading,
  image,
};

export const icons = {
  Dashboard: MdDashboard,
  Payment: MdPayment,
  Download: MdDownload,
  Result: IoDocumentsSharp,
  Improve: BsGraphUpArrow,
  Attendance: MdAccessTimeFilled,
  Routine: MdCalendarMonth,
  User: FaUserGraduate,
  Hoste: MdBedroomChild,
  BloodDonate: BiSolidDonateBlood,
  Support: MdContactSupport,
  Logout: MdLogout,
  Number: GoNumber,
};
