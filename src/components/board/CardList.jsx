import React from "react";
import Card from "./Card";

const CardList = () => {
  return (
    <div>
      <section className="board_container h-[433px] overflow-hidden overflow-y-scroll ">
        <Card />
        <Card />
      </section>
    </div>
  );
};

export default CardList;
