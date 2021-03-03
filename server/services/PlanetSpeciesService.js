import { dbContext } from "../db/DbContext";

class PlanetSpeciesService {

    async find(query = {}) {
        return await dbContext.PlanetSpecies.find(query)
    }

    async create(data) {
        return await dbContext.PlanetSpecies.create(data)
    }
}

export const planetspeciesService = new PlanetSpeciesService();