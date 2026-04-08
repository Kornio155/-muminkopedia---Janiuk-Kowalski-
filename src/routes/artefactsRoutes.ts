import express from "express";
import {getAllArtefacts, postArtefact} from "../controllers/artefacts.controller";

const artefactsRouter = express.Router();

artefactsRouter.get("/", getAllArtefacts);
artefactsRouter.post("/", postArtefact);

export default artefactsRouter;
