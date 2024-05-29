"use server";
import { signIn, signOut } from "../../auth";
const signoutUser = async () => {
  await signOut();
};

const signinUser = async () => {
  await signIn();
};

export { signoutUser, signinUser };
