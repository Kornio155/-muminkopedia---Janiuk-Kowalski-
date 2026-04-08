import {Artefact} from "../models/Artefacts";
import {addNewArtefact, getAllArtefacts} from "../repositories/artefacts.repository";


export async function fetchArtefacts (): Promise<Artefact[]> {
    return await getAllArtefacts();
}

export async function addArtefact(wlascicielId: number, nazwaArtefaktu: string, wlasciwosc: string): Promise<Artefact> {
    if (!wlascicielId || !wlasciwosc ||!nazwaArtefaktu) {
        throw new Error("Missing required fields");
    }

    return await addNewArtefact(wlascicielId, nazwaArtefaktu, wlasciwosc)
}