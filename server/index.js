//env variables
require("dotenv").config();

//library
import express from "express";
import cors from "cors";
import helmet from "helmet";

//microservices routes
import Auth from "./API/Auth";


//Database connection
import connectDB from "./database/connection";

const cuby = express();

// application middlewares
cuby.use(express.json());
cuby.use(express.urlencoded({ extended: false }));
cuby.use(helmet());
cuby.use(cors());

//application Routes
cuby.use("/auth", Auth);


cuby.get("/", (req, res) => res.json({ message: "setup sucess"}));

cuby.listen(4000, () => 
  connectDB()
    .then(() => console.log("server is running"))
    .catch(() => console.log("server is running , but database connection failed"))
);