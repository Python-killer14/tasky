import React from "react";
import SidebarCategoryList from "./SidebarCategoryList";
import { Divider } from "@mui/material";
import { ArrowBigDown } from "lucide-react";

const menus = [
  {
    name: "Boards",
    iconName: "Boards",
    slug: "boards",
    endIcon: "ArrowDown",
  },
  {
    name: "Members",
    iconName: "Members",
    slug: "members",
    endIcon: "ArrowDown",
  },
  {
    name: "Home",
    iconName: "Home",
    slug: "",
    endIcon: "ArrowDown",
  },
];

const workspaces = [
  {
    name: "Workspace 1",
    slug: "workspace-1",
    iconName: "",
  },
  {
    name: "Workspace 2",
    slug: "workspace-2",
    iconName: "",
  },
];

function MainSidebarNav() {
  return (
    <aside className="flex-[20.26%] max-w-[257px] sticky top-[48px] left-0 h-screen-nav border-r-[1px]">
      <div>{/* Sidebar expander */}</div>
      <SidebarCategoryList navBarMenus={menus} />
      <Divider className="my-2" />
      <SidebarCategoryList
        navBarMenus={workspaces}
        categoryTitle="Workspaces"
        isWorkspace={true}
      />
    </aside>
  );
}

export default MainSidebarNav;
