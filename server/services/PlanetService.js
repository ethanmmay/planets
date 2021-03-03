import { dbContext } from "../db/DbContext";

class PlanetService {

    async find(query = {}) {
        return await dbContext.Planets.find(query).populate("system")
    }

    async create(data) {
        return await dbContext.Planets.create(data)
    }
}

export const planetService = new PlanetService();