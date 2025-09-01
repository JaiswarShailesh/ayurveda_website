import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import HomePage from "../page/home";
import HospitalPage from "../page/hospitalPage";
import CollegePage from "../page/collegePage";
import ResearchCentrePage from "../page/researchCentrePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/hospital", element: <HospitalPage /> },
      { path: "/college", element: <CollegePage /> },
      { path: "/research-centre", element: <ResearchCentrePage /> },
    ],
  },
]);

export default router;
