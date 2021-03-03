import { dbContext } from "../db/DbContext";

class GalaxyService {

    async find(query = {}) {
        return await dbContext.Galaxies.find(query)
    }

    async create(data) {
        return await dbContext.Galaxies.create(data)
    }

    async delete(id) {
        return await dbContext.Galaxies.findByIdAndDelete(id)
    }
}

export const galaxyService = new GalaxyService();