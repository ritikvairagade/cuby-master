//env variables
require("dotenv").config();

//library
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";


//config
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";


//microservices routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";
import Order from "./API/orders";
import Reviews from "./API/reviews";
import User from "./API/User";
import Menu from "./API/menu";
import Payments from "./API/Payments";



//Database connection
import connectDB from "./database/connection";

const cuby = express();

// application middlewares
cuby.use(express.json());
cuby.use(express.urlencoded({ extended: false }));
cuby.use(helmet());
cuby.use(cors());
cuby.use(passport.initialize());


//passport configuration
googleAuthConfig(passport);
routeConfig(passport);

//application Routes
cuby.use("/auth", Auth);
cuby.use("/restaurant", Restaurant);
cuby.use("/food", Food);
cuby.use("/image", Image);
cuby.use("/order", Order);
cuby.use("/reviews", Reviews);
cuby.use("/user", User);
cuby.use("/menu", Menu);
cuby.use("/payments", Payments);


cuby.get("/", (req, res) => res.json({ message: "setup sucess"}));

cuby.listen(4000, () => 
  connectDB()
    .then(() => console.log("server is running"))
    .catch(() => console.log("server is running , but database connection failed"))
);