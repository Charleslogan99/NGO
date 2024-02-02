import { createBrowserRouter } from "react-router-dom";

import { NAV_ABOUT, NAV_CONTACT, NAV_FAQ, NAV_PROJECTS } from "./constants";

import Home from "../Pages/Home";
import AboutPage from "../Pages/AboutPage";
import ContactUs from "../Pages/ContactUs";
import FAQPage from "../Pages/Faq";
import ProjectsPage from "../Pages/ProjectPage";
import ErrorPage from "../Pages/ErrorPage";

export function getNavPath(route) {
  return `/${route}`
}

const AppLayout = ({ Component }) => (
  <div>
    <Component />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout Component={Home} />,
    errorElement: <ErrorPage />,
  },
  {
    path: getNavPath(NAV_ABOUT),
    element: <AppLayout Component={AboutPage} />,
    errorElement: <ErrorPage />,
  },
  {
    path: getNavPath(NAV_CONTACT),
    element: <AppLayout Component={ContactUs} />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${getNavPath(NAV_FAQ)}`,
    element: <AppLayout Component={FAQPage} />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${getNavPath(NAV_PROJECTS)}`,
    element: <AppLayout Component={ProjectsPage} />,
    errorElement: <ErrorPage />,
  },
]);

export default router;