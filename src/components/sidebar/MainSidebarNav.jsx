import React from "react";
import SidebarCategoryList from "./SidebarCategoryList";

const menus = [
  {
    name: "Boards",
    iconName: "Boards",
  },
  {
    name: "Members",
    iconName: "Members",
  },
  {
    name: "Boards",
    iconName: "Boards",
  },
];

function MainSidebarNav() {
  return (
    <aside className="flex-[20.26%] border-r-[1.5px] ">
      <div>{/* Sidebar expander */}</div>
      <SidebarCategoryList navBarMenus={menus} />
    </aside>
  );
}

export default MainSidebarNav;
