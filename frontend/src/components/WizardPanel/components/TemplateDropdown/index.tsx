import { useTemplate } from "components/TemplateProvider";
import { capitalCase } from "change-case";

import { Box } from "@material-ui/core";
import { ChangeEvent } from "react";

function TemplateDropdown() {
  const { templates, setSelectedTemplate } = useTemplate();

  function handleTemplateChange(e: ChangeEvent<HTMLSelectElement>) {
    const selectedTemplate = templates?.find
      ((template) => {
        if (template.id === e.target.value) return true;
        else return false;
      }
    );

    if (selectedTemplate && setSelectedTemplate) {
      setSelectedTemplate(selectedTemplate);
    }
  }

  return (
    <Box className="Vlt-native-dropdown Vlt-native-dropdown--app">
      <select
        onChange={handleTemplateChange}
      >
        {
          templates?.map(
            (template: any) => (
              <option
                key={template.id}
                value={template.id}
              >
                {capitalCase(template.id)}
              </option>
            )
          )
        }
      </select>
    </Box>
  )
}

export default TemplateDropdown;
