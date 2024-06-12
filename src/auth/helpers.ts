"use server";
import { signIn as naSignIn, signOut as naSignOut } from "./index";

export async function signIn() {
  await naSignIn();
}

export async function signOut() {
  await naSignOut();
}
