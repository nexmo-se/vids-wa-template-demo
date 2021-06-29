import lodash from "lodash";
import { ChangeEvent, createElement } from "react";

import useStyles from "./styles";
import { useTemplate } from "components/TemplateProvider";

import { Box } from "@material-ui/core";

function BodySection () {
  const mStyles = useStyles();
  const { selectedTemplate, updateBodyUserValue } = useTemplate();

  /**
   * Generate body based on the `selectedTemplate.body`. This will convert
   * \n to <br />. Furthermore it will convert the {{1}} paramters
   * to certain component.
   * @returns 
   */
  function generateBody () {
    if (!selectedTemplate) return;

    const splittedString = selectedTemplate.body.split(/\n/g);
    const elements = lodash(splittedString)
    .map(
      (string) => {
        const breakline = createElement("br");
        const splittedInput = string.split(/{{\d+}}/g);
        if (splittedInput.length === 1) {
          const span = createElement("span", null, string);
          return [span, breakline];
        } else {
          const elements = lodash(splittedInput).slice(0, -1).map(
            (string, index) => {
              const span = createElement("span", null, string);
              const input = createElement(
                "input",
                {
                  type: "text",
                  size: 20,
                  value: selectedTemplate.bodyValues[index],
                  onChange: (e: ChangeEvent<HTMLInputElement>) => updateBodyUserValue(index, e.target.value)
                }
              );

              const inputContainer = createElement("div", { className: "Vlt-input" }, input);
              return [span, inputContainer]
            }
          ).value()
          return [elements, breakline]
        }
      }
    ).flattenDeep().value()
    return elements;
  }

  return (
    <Box
      height={1}
      className="Vlt-card Vlt-card--border Vlt-bg-white"
    >
      <Box className="Vlt-card__header">
        <h5>Body</h5>
        <p>
          Enter the text for your message in the language you've selected.
        </p>
      </Box>
      <Box className="Vlt-card__content">
        <div className={mStyles.content}>
          <div className="Vlt-form__element Vlt-form__element--elastic">
            {generateBody()}
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default BodySection;
