"use client";
import React from "react";
import NavbarMenuItem from "./NavbarMenuItem";
import Image from "next/image";
import Link from "next/link";

// Redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import UserAvatar from "./UserAvatar";
import PopoverProfileMenu from "./PopoverProfileMenu";

function MainNavBar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  console.log("user", user);
  return (
    <aside>
      <div className="flex items-center border-b px-4 py-2 border-gray-300 sticky top-0 bg-white">
        <Link href="/">
          <Image
            src="/images/tasky-lightgreen-logo.png"
            alt="logo"
            width={100}
            height={100}
            className="w-[110px]"
          />
        </Link>

        <div>
          <NavbarMenuItem />
        </div>
        <div className="ml-auto">
          <PopoverProfileMenu />
        </div>
      </div>
    </aside>
  );
}

export default MainNavBar;
