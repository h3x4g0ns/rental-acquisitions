import PocketBase from "pocketbase";
import { writable } from "svelte/store";

export const pb = new PocketBase("http://127.0.0.1:8090");
export const currentUser = writable(pb.authStore.currentUser);

export function logOut() {
  console.log("logout");
  pb.authStore.clear();
}

pb.authStore.onChange((auth) => {
  currentUser.set(pb.authStore.model);
});
