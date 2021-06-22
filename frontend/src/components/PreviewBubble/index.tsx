import useStyles from "./styles";
import { useTemplate } from "components/TemplateProvider";

import Footer from "./components/Footer";
import TextHeader from "./components/TextHeader";
import MediaHeader from "./components/MediaHeader";
import Time from "./components/Time";
import { Box } from "@material-ui/core";

function PreviewBubble() {
  const { selectedTemplate } = useTemplate();
  const mStyles = useStyles();

  return (
    <Box
      pl={2}
      height="100%"
    >
      <Box className={mStyles.previewContainer}>
        <h5>Preview</h5>
        <Box className={mStyles.bubbleContainer}>
          <Box boxSizing="border-box" display="inline-block" maxWidth="100%" position="relative">
            <Box className={mStyles.chatBubble}>
              <Box position="relative">
                {
                  (selectedTemplate?.header && selectedTemplate.header.type === "text")? (
                    <TextHeader value={selectedTemplate.header.value} />
                  ): (selectedTemplate?.header && selectedTemplate.header.type === "media")? (
                    <MediaHeader type={selectedTemplate.header.value} />
                  ): null
                }
                <Box className={mStyles.bodyContainer}>
                  <span className={mStyles.contentContainer}>
                    <span className={mStyles.bodyContent}>
                      {selectedTemplate?.body}
                    </span>
                  </span>
                </Box>
                { selectedTemplate?.footer && <Footer value={selectedTemplate.footer} /> }
                <Time />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PreviewBubble;