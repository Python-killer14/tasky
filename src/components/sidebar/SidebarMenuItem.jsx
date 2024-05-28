"use client";
import { ChevronDown, Home, LayoutDashboard, Users } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

function SidebarMenuItem({ menuItem, isWorkspace = false }) {
  const pathname = usePathname();

  const className = cn("size-4 transition-colors duration-200");

  // Icons
  const icons = {
    Members: <Users className={cn(className)} strokeWidth={2.5} />,
    Boards: <LayoutDashboard className={cn(className)} />,
    Home: <Home className={cn(className)} />,
    ArrowDown: <ChevronDown className={cn(className)} />,
  };
  return (
    <Link href={"/" + menuItem.slug}>
      <div
        className={cn(
          pathname === "/" + menuItem.slug
            ? "bg-lightGreen"
            : "hover:bg-lighterGreen",
          "group flex gap-3 items-center py-2 px-3 my-1 rounded-md  transition-colors duration-200"
        )}
      >
        {isWorkspace ? (
          <Avatar
            sx={{ bgcolor: deepOrange[500], width: 22, height: 22 }}
            variant="rounded"
          >
            {menuItem.name[0]}
          </Avatar>
        ) : (
          icons[menuItem.iconName]
        )}
        {<span className="text-sm font-medium">{menuItem.name}</span>}
        {isWorkspace && <ChevronDown className={cn(className)} />}
      </div>
    </Link>
  );
}

export default SidebarMenuItem;
