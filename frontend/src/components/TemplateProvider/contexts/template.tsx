import React from "react";
import Template from "../models/template";
import { LocationValue } from "../types";

type TemplateContextType = {
  templates: Template[],
  selectedTemplate?: Template,
  setSelectedTemplate: React.Dispatch<React.SetStateAction<Template | undefined>>,
  targetPhoneNumber?: string,
  setTargetPhoneNumber: React.Dispatch<React.SetStateAction<string>>,
  updateHeaderUserValue: (value: (string | LocationValue)) => void,
  updateBodyUserValue: (index: number, value: string) => void
}

export const TemplateContext = React.createContext<TemplateContextType>({} as TemplateContextType);
