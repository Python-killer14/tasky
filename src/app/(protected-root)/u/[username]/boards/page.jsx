import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { auth } from "../../../../../../auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Boards | Tasky",
  description:
    "Tasky is a simple and powerfull project management kanban platform. ",
};

async function Boards() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return <div className="flex-[79.74%]">Boardss</div>;
}

export default Boards;
