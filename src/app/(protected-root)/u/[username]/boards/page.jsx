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
    <div className="boards_page flex gap-3 overflow-x-scroll flex-[79.74%] pt-3 px-2">
      {/* <section className="boards_page flex gap-3 w-[1200px] overflow-x-scroll"> */}
      <Board />
      <Board />
      <Board />
      <Board />
      <Board />
      {/* </section> */}
    </div>
  );
}

export default Boards;
