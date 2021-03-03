import express from "express";
import BaseController from "../utils/BaseController";
import { galaxyService } from "../services/GalaxyService";
import { solarsystemService } from "../services/SolarSystemService";

export class GalaxyController extends BaseController {
    constructor() {
        super("api/galaxies");
        this.router
            .get("", this.getAll)
            .get("/:id/systems", this.getSystemsByGalaxyId)
            .post("", this.create)
            .delete("/:id", this.delete);
    }

    async getAll(req, res, next) {
        try {
            res.send({message: "Galaxies Retrieved", data: await galaxyService.find(req.query)});
        } catch (error) {
            next(error);
        }
    }

    async getSystemsByGalaxyId(req, res, next) {
        try {
            res.send({message: "Systems Retrieved", data: await solarsystemService.find( {galaxy: req.params.id} )});
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            res.send({message: "Galaxy Created", data: await galaxyService.create(req.body)});
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            res.send({message: "Galaxy Deleted", data: await galaxyService.delete(req.params.id)});
        } catch (error) {
            next(error);
        }
    }
}