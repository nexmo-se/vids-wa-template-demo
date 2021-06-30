// A dummy utils.js for local development
// You need to have sample.json located in `./src/sample.json`
import sample from "./sample.json";

module.exports = {
  getDb: () => {},
  getNexmo: () => {
    return sample;
  },
  getIdFromJWT: (token) => {},
  getBearerToken: (req) => {
    const token = req.header("Authorization").replace("Bearer", "").trim();
    return token;
  },
  getIniStuff: () => {
    return sample;
  }
}
