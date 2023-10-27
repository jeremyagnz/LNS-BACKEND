import express  from "express";
import remove from "../../controllers/playerController/delete";
import update from "../../controllers/playerController/update";
import createPlayerStats from "../../controllers/statsPlayers/create";
import getStats from "../../controllers/statsPlayers/get";



const statsPlayers = express.Router();

statsPlayers.post('/create', createPlayerStats);

statsPlayers.get('/get', getStats);

statsPlayers.delete('/remove', remove);

statsPlayers.patch('/update', update);

export default statsPlayers;