"use client";
import { useState } from "react";
import MainSidebarNav from "./MainSidebarNav";
import { cn } from "@/lib/utils";
import { ArrowBigLeft } from "lucide-react";
import { Tooltip } from "@mui/material";

function SidebarWrapper() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  return (
    <div
      className={cn(
        sidebarExpanded ? "flex-[20.26%]" : "flex-[0]",
        "sticky top-0 left-0 h-screenNav border-r-[1px] transition-all duration-100 ease-linear"
      )}
    >
      <div>
        <Tooltip
          arrow
          title={sidebarExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
        >
          <ArrowBigLeft
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
            className={cn(
              !sidebarExpanded &&
                "rotate-180 translate-x-1/2 border bg-white border-gray-500 rounded-full",
              "cursor-pointer ml-auto mt-2"
            )}
          />
        </Tooltip>
      </div>
      <MainSidebarNav sidebarExpanded={sidebarExpanded} />
    </div>
  );
}

export default SidebarWrapper;
