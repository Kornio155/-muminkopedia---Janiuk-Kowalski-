import { Request, Response } from "express";
import CharacterService from "../services/CharacterService";

class CharacterController {

    async getAll(req: Request, res: Response) {
        try {
            const characters = await CharacterService.getAll();
            res.status(200).json(characters);
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const character = await CharacterService.getById(req.params.id);

            if (!character) {
                return res.status(404).json({ message: "Postać nie znaleziona" });
            }

            res.status(200).json(character);
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const created = await CharacterService.create(req.body);
            res.status(201).json(created);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updated = await CharacterService.update(req.params.id, req.body);

            if (!updated) {
                return res.status(404).json({ message: "Postać nie znaleziona" });
            }

            res.status(200).json(updated);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const deleted = await CharacterService.delete(req.params.id);

            if (!deleted) {
                return res.status(404).json({ message: "Postać nie znaleziona" });
            }

            res.status(200).json({ message: "Usunięto postać" });
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default new CharacterController();
