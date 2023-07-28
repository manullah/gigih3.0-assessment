import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages";
import DetailPage from "../pages/[videoId]";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/:videoId",
    element: <DetailPage />,
  },
]);
