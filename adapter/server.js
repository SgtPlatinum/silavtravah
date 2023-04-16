import path from "path";
import { fileURLToPath } from "url";

import express from "express";
import compression from "compression";

import configure from "../dist/index.js";
//
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const {
  ASSETS = path.join(__dirname, "assets"),
  PRERENDERED = path.join(__dirname, "prerendered"),
} = process.env;

const app = express();
app.use(compression());
app.use("/", express.static(ASSETS));
app.use("/", express.static(PRERENDERED));

configure(app);