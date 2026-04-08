import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import muminkiRoutes from "./routes/muminkiRoutes";
import artefactsRoutes from "./routes/artefactsRoutes";
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));
app.use("/characters", muminkiRoutes)
app.use("/artefacts", artefactsRoutes)

app.get("/", (req, res) => {
    res.json({ message: "API Express + TypeScript działa!" });
});

export default app;


