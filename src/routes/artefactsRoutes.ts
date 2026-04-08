

import express, {Request, Response} from "express";
import TaskModel , {Artefact} from "../models/Artefacts";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    try{
        const tasks: Array<Artefact> = await TaskModel.find();
        res.json(tasks);
    } catch(err){
        res.status(500).json({error: `Nie udało się pobrać zadań ${err}`});
    }
})

router.post("/", async(req: Request, res: Response) => {
    try{
        const {title, description} = req.body;
        const newTask: Artefact | null = new TaskModel({title, description});
        await newTask.save();
        res.status(201).json({message: `Dodano nowe zadanie: ${newTask}`});

    }catch(err){
        res.status(500).json({error: "Nie udało się dodać zadania ", err});
    }
})

export default router;
