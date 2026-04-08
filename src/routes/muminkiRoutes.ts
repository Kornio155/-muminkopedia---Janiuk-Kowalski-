

import express, {Request, Response} from "express";
import TaskModel , {Character} from "../models/Character";
import {getAllCharacters} from "../repositories/characters.repository";

const characterRouter = express.Router();

characterRouter.get("/", getAllCharacters);

export default characterRouter;
