import React from "react";
import Card from "./Card";

const BoardList = () => {
  return (
    <div>
      <section className=" board_container h-[443px] overflow-hidden overflow-y-scroll">
        <Card />
        <Card />
      </section>
    </div>
  );
};

export default BoardList;
