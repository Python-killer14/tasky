import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import ProfileMenuItem from "./ProfileMenuItem";
import { Divider } from "@mui/material";
import { signoutUser } from "@/lib/signoutFunc";
import LogoutMenuItem from "./LogoutMenuItem";
import { auth } from "../../../auth";
import { useSession } from "next-auth/react";

function PopoverProfileMenu() {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className="w-8 h-8 border-[3px] border-gray-300">
          <AvatarImage
            src={session && session?.user?.image}
            alt={session && session?.user && session?.user?.name}
          />
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 py-6">
        <div className="grid gap-4">
          <div className="">
            <h4 className="font-medium leading-none px-4 mb-2">Account</h4>
            <div className="flex gap-2 items-center px-4 pt-2 mb-2">
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src={session && session?.user && session?.user?.image}
                  alt={session && session?.user && session?.user?.name}
                />
              </Avatar>
              <div>
                <p className="text-sm text-muted-foreground">
                  {session?.user?.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {session?.user?.email}
                </p>
              </div>
            </div>
            <div>
              <ProfileMenuItem name="Profile" />
              <ProfileMenuItem name="Account" />
            </div>
            <Divider className="mt-2" />
          </div>
          <div className="grid gap-x-2">
            <ProfileMenuItem name="Settings" />
            <ProfileMenuItem name="Billing" />
            <ProfileMenuItem name="Theme" />
            <ProfileMenuItem name="Integrations" />
          </div>
          <Divider className="" />
          <LogoutMenuItem name="Logout" onClick={signoutUser} />
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default PopoverProfileMenu;
