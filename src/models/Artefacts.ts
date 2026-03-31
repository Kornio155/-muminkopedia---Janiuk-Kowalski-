import mongoose, { Document } from "mongoose";

export interface Artefact extends Document {
    wlascicielId: number;
    nazwaArtefaktu: string;
    wlasciwosc: string;
}

const ArtefactSchema = new mongoose.Schema({
    wlascicielId: { type: Number, required: true },
    nazwaArtefaktu: { type: String, required: true },
    wlasciwosc: { type: String, required: true }
});

export default mongoose.model<Artefact>('Artefact', ArtefactSchema);
