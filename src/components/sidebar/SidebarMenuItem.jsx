import { LayoutDashboard, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

function SidebarMenuItem({ menuItem }) {
  const className = "size-4 transition-colors duration-200";

  const icons = {
    Members: <Users className={className} strokeWidth={2.5} />,
    Boards: <LayoutDashboard className={className} />,
  };

  return (
    <Link
      href="/#"
      className="group flex gap-3 items-center py-2 px-3 rounded-md hover:bg-lighterGreen transition-colors duration-200"
    >
      {icons[menuItem.iconName]}
      <span className=" text-sm font-medium">{menuItem.name}</span>
    </Link>
  );
}

export default SidebarMenuItem;
