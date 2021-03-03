import express from "express";
import BaseController from "../utils/BaseController";
import { planetspeciesService } from "../services/PlanetSpeciesService";

export class PlanetSpeciesController extends BaseController { // PlanetSpecies Links Species to Planets (Many-to-Many)
  constructor() {
    super("api/planetspecies");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }

  async getAll(req, res, next) {
    try {
      res.send({message: "Links Retrieved", data: await planetspeciesService.find(req.query)});
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      res.send({message: "Link Created", data: await planetspeciesService.create(req.body)});
    } catch (error) {
      next(error);
    }
  }
}
