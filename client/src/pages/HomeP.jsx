import Outlet from "../components/Home/Outlet";
import SideBar from "../components/Home/SideBar";

export default function HomeP() {
  return (
    <div className="flex gap-5 h-screen">
      <SideBar className={"p-5 m-5 bg-gray-100 rounded-xl"} />
      <Outlet className={"m-5"} />
    </div>
  );
}
