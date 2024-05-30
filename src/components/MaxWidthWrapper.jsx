import { cn } from "@/lib/utils";
import React from "react";

function MaxWidthWrapper({ className, children }) {
  return (
    <div
      className={cn(
        "min-h-screenNav mx-auto w-full max-w-screen-xl shadow-xl ",
        className
      )}
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
