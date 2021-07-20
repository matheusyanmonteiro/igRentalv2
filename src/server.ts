import "reflect-metadata"; // this is a very important for TSyring dont forget.
import express from "express";
import swaggerUi from "swagger-ui-express";

// all routes base
import { router } from "./routes";
// for  documentation
import swaggerFile from "./swagger.json";
// get database
import "./database";
// get the depedency injection tool
import "./shared/container";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log("Server is Running! 🦝"));
