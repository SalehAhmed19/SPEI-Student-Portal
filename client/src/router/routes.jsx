import { createBrowserRouter } from "react-router-dom";
import MainL from "../layout/MainL";
import HomeP from "../pages/HomeP";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainL />,
    children: [{ path: "/dashboard", element: <HomeP /> }],
  },
]);

export default routes;
