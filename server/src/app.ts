import express from "express";
import { prisma } from "./utils/prismaClient";
import { readdirSync } from "fs";
import cors from "cors";
import { helloController } from "./controllers";

const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./swagger");
import { errorHandler } from "./middlewares/errorHandler";
import session from 'express-session';
const app = express();

app.use(session({
    secret: '7f5853950abba8ac19f3fda2928900290837c4138426dc1d4e158d6de3fb7728',
    resave: false,
    saveUninitialized: true,
}));

//  Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



//serve all routes dynamically using readdirsync
readdirSync("./src/routes").map((path) =>
    app.use("/api/v1", require(`./routes/${path}`))
);
app.get("/", helloController);
app.use(errorHandler);
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});