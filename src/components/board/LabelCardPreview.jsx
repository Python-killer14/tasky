import { cn } from "@/lib/utils";
import React from "react";

const LabelCardPreview = ({ color = "gray" }) => {
  const style = {
    backgroundColor: color,
  };
  return <div style={style} className={cn(`w-10 h-3 rounded-sm `)}></div>;
};

export default LabelCardPreview;
