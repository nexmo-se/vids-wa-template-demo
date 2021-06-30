import { VidsContext } from "../contexts/vids";
import { useContext } from "react";

export function useVids () {
  return useContext(VidsContext);
}
