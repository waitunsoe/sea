import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

import "./assets/plugins/bootstrap/dist/css/bootstrap.min.css";
import "./assets/plugins/bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
