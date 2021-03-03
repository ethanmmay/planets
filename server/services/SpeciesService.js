import { dbContext } from "../db/DbContext";

class SpeciesService {

    async find(query = {}) {
        return await dbContext.Species.find(query)
    }

    async create(data) {
        return await dbContext.Species.create(data)
    }
}

export const speciesService = new SpeciesService();