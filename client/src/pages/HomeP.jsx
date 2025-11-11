import Outlet from "../components/Home/Outlet";
import SideBar from "../components/Home/SideBar";

export default function HomeP() {
  return (
    <div>
      <Outlet className={"m-5"} />
    </div>
  );
}
