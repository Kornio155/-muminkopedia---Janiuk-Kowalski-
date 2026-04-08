import {Character} from "../models/Character";
import {getAllCharacters} from "../repositories/characters.repository";

export async function fetchAllCharacters(): Promise<Character[]> {
    return await getAllCharacters();
}