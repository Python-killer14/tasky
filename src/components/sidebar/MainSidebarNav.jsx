"use client";
import { useState } from "react";
import SidebarCategoryList from "./SidebarCategoryList";
import { Divider } from "@mui/material";
import { ArrowBigLeft } from "lucide-react";
import { cn } from "@/lib/utils";

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

function MainSidebarNav({ sidebarExpanded }) {
  return (
    <aside
      className={cn(
        sidebarExpanded ? "" : "absolute -left-60",
        "z-10 min-w-64"
      )}
    >
      <div>
        <SidebarCategoryList navBarMenus={menus} />
        <Divider className="my-2" />
        <SidebarCategoryList
          navBarMenus={workspaces}
          categoryTitle="Workspaces"
          isWorkspace={true}
        />
      </div>
    </aside>
  );
}

export default MainSidebarNav;
