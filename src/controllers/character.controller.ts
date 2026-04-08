import {Character} from "../models/Character";
import {Response, Request} from "express";
import {getAllCharacters} from "../repositories/characters.repository";
import {fetchAllCharacters} from "../services/characters.service";

export async function getCharacter(req: Request, res: Response) : Promise<void> {
    try{
        const characters = await fetchAllCharacters();
        res.status(200).json(characters);
    }catch(err){
        res.status(500).json({message:"Something went wrong"});
    }
}