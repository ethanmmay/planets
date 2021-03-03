import express from "express";
import BaseController from "../utils/BaseController";
import { moonService } from "../services/MoonService";

export class MoonController extends BaseController {
    constructor() {
        super("api/moons");
        this.router
            .get("", this.getAll)
            .post("", this.create);
    }

    async getAll(req, res, next) {
        try {
            res.send({message: "Moons Retrieved", data: await moonService.find(req.query)});
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            res.send({message: "Moon Created", data: await moonService.create(req.body)});
        } catch (error) {
            next(error);
        }
    }
}