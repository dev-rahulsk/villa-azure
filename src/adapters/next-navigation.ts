import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getPathname() {
  return window.location.pathname;
}

export function usePathname() {
  return useSyncExternalStore(subscribe, getPathname, () => "/");
}
