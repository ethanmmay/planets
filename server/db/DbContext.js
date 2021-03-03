import GalaxySchema from "../models/Galaxy";
import SolarSystemSchema from "../models/SolarSystem";
import PlanetSchema from "../models/Planet";
import MoonSchema from "../models/Moon";
import SpeciesSchema from "../models/Species";
import PlanetSpeciesSchema from "../models/PlanetSpecies";
import mongoose from "mongoose";

class DbContext {
  Galaxies = mongoose.model("Galaxy", GalaxySchema);
  SolarSystems = mongoose.model("SolarSystem", SolarSystemSchema);
  Planets = mongoose.model("Planet", PlanetSchema);
  Moons = mongoose.model("Moon", MoonSchema);
  Species = mongoose.model("Species", SpeciesSchema);
  PlanetSpecies = mongoose.model("PlanetSpecies", PlanetSpeciesSchema);
}

export const dbContext = new DbContext();
