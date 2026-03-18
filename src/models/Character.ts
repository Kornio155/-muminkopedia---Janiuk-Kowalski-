import mongoose, {Document} from "mongoose";


export interface Character extends Document {
    id: number;
    imie: string;
    opis: string;
    gatunek: string;
    status: string;
    najlepszyPrzyj: string;
}

const CharacterSchema = new mongoose.Schema({
    id: {id: Number, required: true},
    imie: {imie: String, required: true},
    opis: {opis: String, required: true},
    gatunek: {gatunek: String, required: true},
    status: {status: String, required: true},
    najlepszyPrzyj: {najlepszyPrzyj: String, required: true},
})

export default mongoose.model<Character>('Character', CharacterSchema);