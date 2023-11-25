import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";

import HomePage from "./pages/HomePage";
import AgriNewsPage from "./pages/AgriNewsPage";
import FisheryNewsPage from "./pages/FisheryNewsPage";
import LivestockNewsPage from "./pages/LivestockNewsPage";
import BuyerGuide from "./pages/BuyerGuide";
import MagazinePage from "./pages/MagazinePage";
import AdvertisePage from "./pages/AdvertisePage";
import ContactPage from "./pages/ContactPage";
import AgriNewsDetailPage from "./pages/AgriNewsDetailPage";
import FisheryNewsDetailPage from "./pages/FisheryNewsDetailPage";
import LivestockNewsDetailPage from "./pages/LivestockNewsDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/agri-news",
    element: <AgriNewsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/agri-news/:id",
    element: <AgriNewsDetailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fishery-news",
    element: <FisheryNewsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fishery-news/:id",
    element: <FisheryNewsDetailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/livestock-news",
    element: <LivestockNewsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/livestock-news/:id",
    element: <LivestockNewsDetailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/buyer-guide",
    element: <BuyerGuide />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/our-magazine",
    element: <MagazinePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/advertise",
    element: <AdvertisePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <ErrorPage />,
  },
]);
