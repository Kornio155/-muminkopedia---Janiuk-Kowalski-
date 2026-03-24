import mongoose, {Document} from "mongoose";


export interface Character extends Document {
    id: number;
    imie: string;
    opis: string;
    gatunek: string;
    czySpi: string;
    najlepszyPrzyj: string;
}

const CharacterSchema = new mongoose.Schema({
    id: {id: Number, required: true},
    imie: {imie: String, required: true},
    opis: {opis: String, required: true},
    gatunek: {gatunek: String, required: true},
    czySpi: {czySpi: String, required: true},
    najlepszyPrzyj: {najlepszyPrzyj: String, required: true},
})

export default mongoose.model<Character>('Character', CharacterSchema);