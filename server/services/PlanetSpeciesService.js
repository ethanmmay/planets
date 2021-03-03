import { dbContext } from "../db/DbContext";

class PlanetSpeciesService {

    async find(query = {}) {
        return await dbContext.PlanetSpecies.find(query).populate("species planet")
    }

    async create(data) {
        return await dbContext.PlanetSpecies.create(data)
    }
}

export const planetspeciesService = new PlanetSpeciesService();