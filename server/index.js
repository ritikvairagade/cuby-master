//library
import express from "express";

const cuby = express();

cuby.get("/", (req, res) => res.json({ message: "setup sucess"}));

cuby.listen(4000, () => console.log("server is running"));