import { createBrowserRouter } from "react-router-dom";
import { routePaths } from "./constants";
import { HomePage } from "../pages/home";
import { RandomParticlesPage } from "../pages/randomParticles";
import { PageLayout } from "../layouts/page";

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: routePaths.home,
        element: <HomePage />,
      },
      {
        path: routePaths.randomParticles,
        element: <RandomParticlesPage />,
      },
    ],
  },
]);
