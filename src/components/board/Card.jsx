// Icons
import { Chip, Tooltip } from "@mui/joy";
import { AlignLeft, Clock, ListChecks, Pen, Timer } from "lucide-react";
import LabelCardPreview from "./LabelCardPreview";
import Image from "next/image";
import { Avatar } from "@mui/material";

const Card = () => {
  return (
    <article className="group relative bg-white border-transparent border-2 rounded-xl overflow-hidden shadow hover:border-lightGreen mb-2">
      <section className="mb-1">
        <Image
          src="https://images.unsplash.com/photo-1503424886307-b090341d25d1?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height={300}
          width={300}
          className="rounded-t-md"
        />
      </section>
      <div className="absolute hidden top-2 right-2 bg-white rounded-full p-1 group-hover:block ">
        <Pen className="text-black cursor-pointer size-3" />
      </div>
      <section className="flex items-center flex-wrap gap-1 py-1 px-2">
        <LabelCardPreview color={"red"} />
        <LabelCardPreview color={"blue"} />
        <LabelCardPreview color={"gray"} />
        <LabelCardPreview color={"gray"} />
        <LabelCardPreview color={"gray"} />
        <LabelCardPreview color={"gray"} />
        <LabelCardPreview color={"gray"} />
        <LabelCardPreview color={"gray"} />
        <LabelCardPreview color={"gray"} />
      </section>
      <section className="py-1 px-2">
        {/* Title section */}
        <h1 className=" text-sm font-medium">Card title goes here</h1>
      </section>
      <section className=" flex items-center gap-2 flex-wrap py-1 px-2">
        <AlignLeft className=" cursor-pointer" size={14} />
        <Tooltip size="sm" title="This card has checklist items">
          <div className=" flex items-center gap-1 cursor-pointer">
            <ListChecks size={14} />
            <span className="text-[11px]">0/13</span>
          </div>
        </Tooltip>
        <Chip size="sm" startDecorator={<Clock size={12} />}>
          May, 27 - May 30
        </Chip>
      </section>
      <section className="px-2 pt-2 pb-3 flex items-center">
        <Avatar
          src="https://images.unsplash.com/photo-1503424886307-b090341d25d1?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-7 h-7 cursor-pointer ml-auto"
        />
      </section>
    </article>
  );
};

export default Card;
