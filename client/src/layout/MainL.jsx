import { Outlet } from "react-router-dom";
import SideBar from "../components/Home/SideBar";

export default function MainL() {
  return (
    <div>
      <div className="flex h-screen">
        <SideBar className={"p-5 m-5 bg-gray-100 rounded-xl"} />
        <div className="my-5 w-full">
          <Outlet />
        </div>
      </div>

      <p className="p-5 text-right font-bold">
        Developed by <span className="text-green-700">Saleh Ahmed Mahin</span>{" "}
        &copy; All rights reserved{" "}
        <span className="text-green-700">{new Date().getFullYear()}</span>
      </p>
    </div>
  );
}
