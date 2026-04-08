import CharacterSchema, {Character} from "../models/Character";

export async function getAllCharacters() : Promise<Character[]> {
    return CharacterSchema.find();
}