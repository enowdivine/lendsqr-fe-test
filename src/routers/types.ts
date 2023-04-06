import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/#"?: {};
  "/dashboard"?: {};
  "/users"?: {};
  "/user-detail"?: {};
}

export type PathName = keyof LocationStates;
export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}
