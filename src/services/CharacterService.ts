import CharacterRepository from "../repositories/CharacterRepository";

class CharacterService {

    async getAll() {
        return CharacterRepository.findAll();
    }

    async getById(id: string | string[]) {
        return CharacterRepository.findById(Number(id));
    }

    async create(data: any) {
        if (!data.imie) {
            throw new Error("Imię jest wymagane!");
        }

        return CharacterRepository.create(data);
    }

    async update(id: string | string[], data: any) {
        return CharacterRepository.update(Number(id), data);
    }

    async delete(id: string | string[]) {
        return CharacterRepository.delete(Number(id));
    }
}

export default new CharacterService();
