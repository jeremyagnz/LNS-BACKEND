import express  from "express";
import teamRoutes from "./teams";
import playerRoutes from "./players";


const routes = express.Router();

routes.use('/teams', teamRoutes);
routes.use('/players', playerRoutes);

export default routes;