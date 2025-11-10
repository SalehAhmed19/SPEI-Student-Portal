import { createBrowserRouter } from "react-router-dom";
import MainL from "../layout/MainL";
import HomeP from "../pages/HomeP";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainL />,
    children: [{ path: "/", element: <HomeP /> }],
  },
]);

export default routes;
