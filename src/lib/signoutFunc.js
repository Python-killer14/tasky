"use server";
import { redirect } from "next/dist/server/api-utils";
import { signIn, signOut } from "../../auth";
const signoutUser = async () => {
  await signOut();
};

export { signoutUser };
