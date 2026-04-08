import artefacts, {Artefact} from "../models/Artefacts";
import {Request, Response} from "express";
import {addArtefact, fetchArtefacts} from "../services/artefacts.service";

export async function getAllArtefacts(req: Request, res: Response): Promise<void> {
    try{
        const artefacts = await fetchArtefacts();
        res.status(200).json(artefacts);
    }catch(error){
        res.status(500).json({error: `Not Found: ${error}`});
    }
}

export async function postArtefact(req: Request, res: Response): Promise<void> {
    try {
        const{wlascicielId, nazwaArtefaktu, wlasciwosc} = req.body;
        const newArtefact = await addArtefact(wlascicielId, nazwaArtefaktu, wlasciwosc);
        res.status(201).json({message: 'Artefacts added successfully'});
    }catch(error){
        const errorMessage = error instanceof  Error ? error.message : "Nieznany błąd"
        res.status(400).json({error: `Nie udalo sie dodac: ${errorMessage}`});
    }
}

