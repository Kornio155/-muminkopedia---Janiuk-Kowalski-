import ArtefactSchema, {Artefact} from "../models/Artefacts";

export async function getAllArtefacts (): Promise<Artefact[]> {
    return ArtefactSchema.find();
}

export async function addNewArtefact(wlascicielId: number, nazwaArtefaktu: string, wlasciwosc: string): Promise<Artefact> {
    const newArtefact = new ArtefactSchema({wlascicielId, nazwaArtefaktu, wlasciwosc});
    return await newArtefact.save();
}