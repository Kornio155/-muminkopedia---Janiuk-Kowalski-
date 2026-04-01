import CharacterModel, { Character } from "../models/Character";

class CharacterRepository {

    async findAll(): Promise<Character[]> {
        return CharacterModel.find();
    }

    async findById(id: number): Promise<Character | null> {
        return CharacterModel.findOne({ id });
    }

    async create(data: Character): Promise<Character> {
        return CharacterModel.create(data);
    }

    async update(id: number, data: Partial<Character>): Promise<Character | null> {
        return CharacterModel.findOneAndUpdate({ id }, data, { new: true });
    }

    async delete(id: number): Promise<Character | null> {
        return CharacterModel.findOneAndDelete({ id });
    }
}

export default new CharacterRepository();
