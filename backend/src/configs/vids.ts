import lodash from "lodash";

// This function will replace `./` at the beginning to
// `process.cwd()`
const createUtilsPath = () => {
  if (!process.env.VIDS_UTILS_PATH) {
    return "/var/www/html/utils.js";
  } if (process.env.VIDS_UTILS_PATH.startsWith("./")) {
    return lodash(process.env.VIDS_UTILS_PATH).replace("./", `${process.cwd()}/src/`);
  } else return process.env.VIDS_UTILS_PATH;
}

const config = {
  utilsPath: createUtilsPath()
}

export default config;
