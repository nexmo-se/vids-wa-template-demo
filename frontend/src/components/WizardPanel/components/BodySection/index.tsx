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
      (string, mainIndex) => {
        const breakline = createElement("br", { key: `${selectedTemplate.id}_body_br_${mainIndex}` });
        const splittedInput = string.split(/{{\d+}}/g);
        if (splittedInput.length === 1) {
          const span = createElement("span", { key: `${selectedTemplate.id}_body_span_${mainIndex}_1` }, string);
          return [span, breakline];
        } else {
          const elements = lodash(splittedInput).slice(0, -1).map(
            (string, childIndex) => {
              const span = createElement("span", { key: `${selectedTemplate.id}_body_span_${mainIndex}_${childIndex}` } , string);
              const input = createElement(
                "input",
                {
                  type: "text",
                  size: 20,
                  value: selectedTemplate.bodyValues[childIndex],
                  onChange: (e: ChangeEvent<HTMLInputElement>) => updateBodyUserValue(childIndex, e.target.value)
                }
              );

              const inputContainer = createElement(
                "div",
                {
                  className: "Vlt-input",
                  key: `${selectedTemplate.id}_body_input_${mainIndex}_${childIndex}`
                },
                input
              );
              return [span, inputContainer]
            }
          ).value()
          return [elements, breakline]
        }
      }
    ).flattenDeep().value();

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
