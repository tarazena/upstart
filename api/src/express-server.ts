import express from "express";
import cors from "cors";

import { paths } from "./paths";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

paths.forEach((path) => {
  app[path.method](`/api${path.path}`, path.connectRequest);
});
