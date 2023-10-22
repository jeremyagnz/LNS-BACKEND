import express  from "express";
import create from "../../controllers/teamController/create";
import get from "../../controllers/teamController/get";
import remove from "../../controllers/teamController/delete";
import update from "../../controllers/teamController/update";


const teamRoutes = express.Router();

teamRoutes.post('/create', create);

teamRoutes.get('/get', get);

teamRoutes.delete('/remove', remove);

teamRoutes.patch('/update', update);

export default teamRoutes;