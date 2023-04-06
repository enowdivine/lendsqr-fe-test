import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from "./types";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/account/Dashboard";
import UserDetails from "../pages/account/UserDetails";

const pages: Page[] = [
  { path: "/", exact: true, component: Login },
  { path: "/dashboard", exact: true, component: Dashboard },
  { path: "/users", exact: true, component: Dashboard },
  { path: "/user-details/:id", exact: true, component: UserDetails },
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
