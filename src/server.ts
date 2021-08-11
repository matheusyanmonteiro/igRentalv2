import "reflect-metadata"; // this is a very important for TSyring don't forget.
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

// the class of custom errors
import { AppError } from "./errors/AppError";
// all routes base
import { router } from "./routes";
// for  documentation
import swaggerFile from "./swagger.json";
// get database
import "./database";
// get the dependency injection tool
import "./shared/container";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal Server ERROR - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is Running! 🦝"));
