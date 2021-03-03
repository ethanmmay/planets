import { dbContext } from "../db/DbContext";

class SolarSystemService {

    async find(query = {}) {
        return await dbContext.SolarSystems.find(query).populate("galaxy")
    }

    async create(data) {
        return await dbContext.SolarSystems.create(data)
    }
}

export const solarsystemService = new SolarSystemService();