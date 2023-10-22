import express  from "express";
import create from "../../controllers/playerController/create";
import get from "../../controllers/playerController/get";
import remove from "../../controllers/playerController/delete";
import update from "../../controllers/playerController/update";



const playerRoutes = express.Router();

playerRoutes.post('/create', create);

playerRoutes.get('/get', get);

playerRoutes.delete('/remove', remove);

playerRoutes.patch('/update', update);

export default playerRoutes;