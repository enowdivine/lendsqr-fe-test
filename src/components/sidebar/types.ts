import { IconType } from "react-icons";
import { ComponentType } from "react";
export interface SidebarLinks {
  "/"?: {};
  "#"?: {};
  "/dashboard"?: {};
  "/users"?: {};
  "/user-detail"?: {};
}

export type PathName = keyof SidebarLinks;
export interface Links {
  path: PathName;
  exact?: boolean;
  text: string;
  icon: ComponentType<Object>;
}
