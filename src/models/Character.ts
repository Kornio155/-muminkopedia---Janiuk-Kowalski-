import mongoose, {Document} from "mongoose";


export interface Character extends Document {
    id: number;
    imie: string;
    opis: string;
    gatunek: string;
    czySpi: string;
    najlepszyPrzyj: number;
}

const CharacterSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    imie: {type: String, required: true},
    opis: {type: String, required: true},
    gatunek: {type: String, required: true},
    czySpi: {type: String, required: true},
    najlepszyPrzyj: {type: Number, required: true},
})

export default mongoose.model<Character>('Character', CharacterSchema);