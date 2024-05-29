"use client";
import React, { useEffect } from "react";
import NavbarMenuItem from "./NavbarMenuItem";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

//
import PopoverProfileMenu from "./PopoverProfileMenu";
import { Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { formatSlug } from "@/app/utils/formatSlug";

function MainNavBar() {
  const { data: session } = useSession();
  const router = useRouter();

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
        <div className="ml-auto flex">
          {session ? (
            <PopoverProfileMenu />
          ) : (
            <div>
              <Button
                onClick={() =>
                  signIn("github", {
                    redirectTo: `/u/${session?.user?.name}/boards`,
                  })
                }
              >
                Sign In
              </Button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

export default MainNavBar;
