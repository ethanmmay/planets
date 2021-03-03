import express from "express";
import BaseController from "../utils/BaseController";
import { planetspeciesService } from "../services/PlanetSpeciesService";
import { speciesService } from "../services/SpeciesService";

export class SpeciesController extends BaseController {
    constructor() {
        super("api/species");
        this.router
            .get("", this.getAll)
            .get("/:id/planets", this.getPlanetsBySpeciesId)
            .post("", this.create);
    }

    async getAll(req, res, next) {
        try {
            res.send({message: "Species Retrieved", data: await speciesService.find(req.query)});
        } catch (error) {
            next(error);
        }
    }

    async getPlanetsBySpeciesId(req, res, next) {
        try {
            res.send({message: "Planets Retrieved", data: await planetspeciesService.find( {species: req.params.id} )});
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            res.send({message: "Species Created", data: await speciesService.create(req.body)});
        } catch (error) {
            next(error);
        }
    }
}