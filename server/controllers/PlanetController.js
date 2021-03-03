import express from "express";
import BaseController from "../utils/BaseController";
import { moonService } from "../services/MoonService";
import { planetService } from "../services/PlanetService";
import { speciesService } from "../services/SpeciesService";
import { planetspeciesService } from "../services/PlanetSpeciesService";

export class PlanetController extends BaseController {
    constructor() {
        super("api/planets");
        this.router
            .get("", this.getAll)
            .get("/:id/moons", this.getMoonsByPlanetId)
            .get("/:id/species", this.getSpeciesByPlanetId)
            .post("", this.create);
    }

    async getAll(req, res, next) {
        try {
            res.send({message: "Planets Retrieved", data: await planetService.find(req.query)});
        } catch (error) {
            next(error);
        }
    }

    async getMoonsByPlanetId(req, res, next) {
        try {
            res.send({message: "Moons Retrieved", data: await moonService.find( {planet: req.params.id} )});
        } catch (error) {
            next(error);
        }
    }

    async getSpeciesByPlanetId(req, res, next) {
        try {
            res.send({message: "Species Retrieved", data: await planetspeciesService.find( {planet: req.params.id} )});
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            res.send({message: "Planet Created", data: await planetService.create(req.body)});
        } catch (error) {
            next(error);
        }
    }
}