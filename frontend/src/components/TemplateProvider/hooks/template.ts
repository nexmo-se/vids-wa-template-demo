import { useContext } from "react";
import { TemplateContext } from "../contexts/template";

export function useTemplate() {
  return useContext(TemplateContext);
}
