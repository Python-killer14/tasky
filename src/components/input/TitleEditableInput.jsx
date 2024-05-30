"use client";
import { cn } from "@/lib/utils";
import { Input } from "@mui/joy";
import React, { useState } from "react";

function TitleEditableInput({ title }) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputVlaue, setInputValue] = useState(title);

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
    // submitCHanged title to api db
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className=" text-xs ">
      <form action="">
        <Input
          type="text"
          value={inputVlaue}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          // variant={isFocused ? "outlined" : "soft"}
          size="sm"
          className={cn(
            !isFocused
              ? "border-transparent outline-none bg-transparent shadow-none"
              : "",
            "font-semibold"
          )}
        />
      </form>
    </div>
  );
}

export default TitleEditableInput;
