import React from "react";
import Template from "../models/template";

type TemplateContextType = {
  templates: Template[],
  selectedTemplate?: Template,
  setSelectedTemplate: React.Dispatch<React.SetStateAction<Template | undefined>>,
  targetPhoneNumber?: string,
  setTargetPhoneNumber: React.Dispatch<React.SetStateAction<string>>,
  updateHeaderUserValue: (value: string) => void;
}

export const TemplateContext = React.createContext<TemplateContextType>({} as TemplateContextType);
