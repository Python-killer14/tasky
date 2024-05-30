// Icons
import { Tooltip } from "@mui/joy";
import { AlignLeft, ListChecks, Pen } from "lucide-react";

const Card = () => {
  return (
    <article className="group relative  bg-white border-transparent border-2 rounded-md shadow hover:border-lightGreen my-2 px-2 py-1">
      <Pen className=" absolute hidden top-2 right-4 cursor-pointer size-3 group-hover:block" />
      <section className="flex items-center gap-1 py-1">
        <div className=" w-10 h-1 rounded-sm bg-lime-600"></div>
        <div className=" w-10 h-1 rounded-sm bg-lime-200"></div>
        <div className=" w-10 h-1 rounded-sm bg-lime-200"></div>
      </section>
      <section className="py-1">
        {/* Title section */}
        <h1 className=" text-sm font-medium">Card title goes here</h1>
      </section>
      <section className=" flex items-center gap-2 py-1">
        <AlignLeft className=" cursor-pointer" size={14} />
        <Tooltip size="sm" title="This card has checklist items">
          <div className=" flex items-center gap-1 cursor-pointer">
            <ListChecks size={14} />
            <span className="text-[11px]">0/13</span>
          </div>
        </Tooltip>
      </section>
    </article>
  );
};

export default Card;
