import Outlet from "../components/Home/Outlet";
import SideBar from "../components/Home/SideBar";

export default function HomeP() {
  return (
    <div>
      <div className="flex gap-5 h-screen">
        <SideBar className={"p-5 m-5 bg-gray-100 rounded-xl"} />
        <Outlet className={"m-5"} />
      </div>

      <p className="p-5 text-center font-bold">
        Developed by <span className="text-green-700">Saleh Ahmed Mahin</span>{" "}
        &copy; All rights reserved{" "}
        <span className="text-green-700">{new Date().getFullYear()}</span>
      </p>
    </div>
  );
}
