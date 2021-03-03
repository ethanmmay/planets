import express from "express";
import BaseController from "../utils/BaseController";
import { solarsystemService } from "../services/SolarSystemService";
import { planetService } from "../services/PlanetService";

export class SolarSystemController extends BaseController {
    constructor() {
        super("api/systems");
        this.router
            .get("", this.getAll)
            .get("/:id/planets", this.getPlanetsBySystemId)
            .post("", this.create);
    }

    async getAll(req, res, next) {
        try {
            res.send({message: "Systems Retrieved", data: await solarsystemService.find(req.query)});
        } catch (error) {
            next(error);
        }
    }

    async getPlanetsBySystemId(req, res, next) {
        try {
            res.send({message: "Planets Retrieved", data: await planetService.find( {system: req.params.id} )});
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            res.send({message: "System Created", data: await solarsystemService.create(req.body)});
        } catch (error) {
            next(error);
        }
    }
}