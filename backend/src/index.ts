import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./configs";

import ErrorHandler from "./middlewares/error-handler";
import WATemplateRoutes from "./routes/wa-template";

(async () => {
  const app = express();
  
  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));

  app.use("/", express.static("public"));
  app.use("/whatsapp-templates", WATemplateRoutes);
  app.post("/status", (req: any, res: any) => res.status(200).end());

  
  app.listen(config.port, () => {
    console.log(`Express is listening on port: ${config.port}`)
  })
  
  app.use(ErrorHandler.handle);
})()