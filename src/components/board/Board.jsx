import { Ellipsis, Plus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import TitleEditableInput from "../input/TitleEditableInput";
import CardList from "./CardList";

const Board = () => {
  return (
    <article className="min-w-[270px] w-[270px] rounded-xl p-2 bg-grayBg shadow">
      <section className="flex items-center justify-between mb-2">
        <TitleEditableInput title={"Website Launch"} />
        <Ellipsis className="cursor-pointer" />
      </section>
      {/* Card list goes here */}
      <CardList />
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
