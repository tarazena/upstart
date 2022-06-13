import express from "express";
import cors from "cors";

import { paths } from "./paths";
import csrf from "csurf";

export const app = express();

var csrfProtect = csrf({ cookie: true });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

paths.forEach((path) => {
  if (path.useCSRF) {
    app[path.method](`/api${path.path}`, csrfProtect, path.connectRequest);
  } else {
    app[path.method](`/api${path.path}`, path.connectRequest);
  }
});
