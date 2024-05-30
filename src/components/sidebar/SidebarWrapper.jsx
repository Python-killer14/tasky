"use client";
import { useState } from "react";
import MainSidebarNav from "./MainSidebarNav";
import { cn } from "@/lib/utils";
import { ArrowBigLeft } from "lucide-react";

function SidebarWrapper() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  return (
    <div
      className={cn(
        sidebarExpanded ? "flex-[20.26%]" : "flex-[0]",
        " sticky top-0 left-0 h-screenNav border-r-[1px] transition-all duration-200"
      )}
    >
      <div>
        <ArrowBigLeft
          onClick={() => setSidebarExpanded(!sidebarExpanded)}
          className={cn(
            !sidebarExpanded && "rotate-180",
            "cursor-pointer ml-auto"
          )}
        />
      </div>
      <MainSidebarNav sidebarExpanded={sidebarExpanded} />
    </div>
  );
}

export default SidebarWrapper;
