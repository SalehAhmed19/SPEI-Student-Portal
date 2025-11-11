import { createBrowserRouter } from "react-router-dom";
import MainL from "../layout/MainL";
import HomeP from "../pages/HomeP";
import PayFeesP from "../pages/Payments/PayFeesP";
import AccountDetailsP from "../pages/AccountDetails/AccountDetailsP";
import HostelAccountDetailsP from "../pages/Payments/HostelAccountDetailsP";
import DownloadFormsP from "../pages/DownloadFormsP";
import ResultsP from "../pages/ResultsP";
import ImproveP from "../pages/ImproveP";
import AttendenceP from "../pages/AttendenceP";
import RoutineP from "../pages/RoutineP";
import UserProfileP from "../pages/Profile/UserProfileP";
import HostelP from "../pages/HostelP";
import BloodDonationP from "../pages/BloodDonationP";
import SupportP from "../pages/SupportP";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainL />,
    children: [
      { path: "/dashboard", element: <HomeP /> },
      { path: "/accounts/pay-fees", element: <PayFeesP /> },
      { path: "/accounts/account-details", element: <AccountDetailsP /> },
      {
        path: "/accounts/hostel-account-details",
        element: <HostelAccountDetailsP />,
      },
      {
        path: "/download-forms",
        element: <DownloadFormsP />,
      },
      {
        path: "/results",
        element: <ResultsP />,
      },
      {
        path: "/improvement",
        element: <ImproveP />,
      },
      {
        path: "/attendance",
        element: <AttendenceP />,
      },
      {
        path: "/routine",
        element: <RoutineP />,
      },
      {
        path: "/profile",
        element: <UserProfileP />,
      },
      {
        path: "/hostel",
        element: <HostelP />,
      },
      {
        path: "/blood-donate",
        element: <BloodDonationP />,
      },
      {
        path: "/support",
        element: <SupportP />,
      },
    ],
  },
]);

export default routes;
