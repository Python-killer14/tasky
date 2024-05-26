import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";

function SidebarCategoryList({ navBarMenus, categoryTitle = "Workspaces" }) {
  return (
    <section className="px-2 mt-5">
      {categoryTitle && (
        <h1 className="text-xs text-lighterGray uppercase font-medium px-1">
          {categoryTitle}
        </h1>
      )}
      <div className="mt-1">
        {navBarMenus.map((menu, index) => (
          <SidebarMenuItem key={index} menuItem={menu} />
        ))}
      </div>
    </section>
  );
}

export default SidebarCategoryList;
