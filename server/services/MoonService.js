import { dbContext } from "../db/DbContext";

class MoonService {

    async find(query = {}) {
        return await dbContext.Moons.find(query).populate("planet")
    }

    async create(data) {
        return await dbContext.Moons.create(data)
    }
}

export const moonService = new MoonService();