import { createBrowserRouter } from "react-router-dom";
import { ErrorPage} from "./pages/ErrorPage";

import HomePage from "./pages/HomePage";
import AgriNewsPage from "./pages/AgriNewsPage";
import FisheryNewsPage from "./pages/FisheryNewsPage";
import LivestockNewsPage from "./pages/LivestockNewsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/agri-news",
    element: <AgriNewsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/fishery-news",
    element: <FisheryNewsPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/livestock-news",
    element: <LivestockNewsPage />,
    errorElement: <ErrorPage />
  }
]);