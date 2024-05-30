import { Ellipsis, Plus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import TitleEditableInput from "../input/TitleEditableInput";
import BoardList from "./BoardList";

const Board = () => {
  return (
    <article className="max-w-[272px] rounded-lg p-2 bg-grayBg shadow">
      <section className="flex items-center justify-between mb-2">
        {/* <h2 className=" text-xs "></h2> */}
        <TitleEditableInput title={"Website Launch"} />
        <Ellipsis className="cursor-pointer" />
      </section>
      <BoardList />
      <section className="pt-2">
        <Button
          variant="outline"
          className="w-full flex item-center justify-start gap-2"
        >
          <span>
            <Plus />
          </span>
          <span className="text-xs">Add a Card</span>
        </Button>
      </section>
    </article>
  );
};

export default Board;
