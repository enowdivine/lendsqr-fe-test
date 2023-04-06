export interface SidebarLinks {
  "/"?: {};
  "/#"?: {};
  "/dashboard"?: {};
  "/users"?: {};
  "/user-detail"?: {};
}

export type PathName = keyof SidebarLinks;
export interface Links {
  path: PathName;
  exact?: boolean;
  text: string;
}
