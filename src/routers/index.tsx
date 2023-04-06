import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from "./types";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/account/Dashboard";

const pages: Page[] = [
  { path: "/", exact: true, component: Login },
  { path: "/dashboard", exact: true, component: Dashboard },
];

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {pages.map(({ component, path }) => {
          const Component = component;
          return <Route key={path} element={<Component />} path={path} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
