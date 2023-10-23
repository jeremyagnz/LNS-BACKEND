import { createPlayer } from '../../db/implementations/playesRepository';
import {v4 as uuidv4} from 'uuid'


const create = async (req:any, res:any) => {
    const {name,apellidos,numero,posicion,cedula,foto,equipo,fecha_nacimiento,bt} = req.body;
    
    const playerPayload = {
        id: uuidv4(),
        name,
        apellidos,
        numero,
        posicion,
        cedula,
        foto,
        equipo,
        fecha_nacimiento,
        bt
    };
    console.log(playerPayload);
   await createPlayer(playerPayload);
  
    res.status(201).send({message:"Player created"});
};

export default create;

