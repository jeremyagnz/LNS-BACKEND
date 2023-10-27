import express  from "express";
import teamRoutes from "./teams";
import playerRoutes from "./players";
import statsPlayers from "./statsPlaters";


const routes = express.Router();

routes.use('/teams', teamRoutes);
routes.use('/players', playerRoutes);
routes.use('/playersStats', statsPlayers);

export default routes;