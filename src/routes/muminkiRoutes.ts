

import express, {Request, Response} from "express";
import TaskModel , {Character} from "../models/Character";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    try{
        const tasks: Array<Character> = await TaskModel.find();
        res.json(tasks);
    } catch(err){
        res.status(500).json({error: `Nie udało się pobrać zadań ${err}`});
    }
})

router.post("/", async(req: Request, res: Response) => {
    try{
        const {title, description} = req.body;
        const newTask: Character | null = new TaskModel({title, description});
        await newTask.save();
        res.status(201).json({message: `Dodano nowe zadanie: ${newTask}`});

    }catch(err){
        res.status(500).json({error: "Nie udało się dodać zadania ", err});
    }
})

export default router;
