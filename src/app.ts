import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import muminkiRoutes from "./routes/muminkiRoutes";
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));
app.use("/muminki", muminkiRoutes)

app.get("/", (req, res) => {
    res.json({ message: "API Express + TypeScript działa!" });
});

export default app;


