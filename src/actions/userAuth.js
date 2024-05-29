import { signIn, signOut } from "../../auth";

const signInUserCredentail = async () => {
  "use server";
  await signIn();
};

const signInUserProvider = async (provider) => {
  "use server";
  await signIn(provider);
};

const signOutUser = async () => {
  "use server";

  await signOut();
};

export { signInUserCredentail, signOutUser };
