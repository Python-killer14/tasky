import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { auth } from "../../../../../../auth";
import { redirect } from "next/navigation";
import Board from "@/components/board/Board";

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

  return (
    <div className="flex-[79.74%]">
      <section>
        <Board />
      </section>
    </div>
  );
}

export default Boards;
