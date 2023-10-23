import { updatePlayer } from "../../db/implementations/playesRepository";


const update = async (req:any, res:any) => {

    const {id,name,apellidos,numero,posicion,cedula,foto,equipo,fecha_nacimiento,bt} = req.body;
    const player = {name,apellidos,numero,posicion,cedula,foto,equipo,fecha_nacimiento,bt};

    const response = await updatePlayer(id,player);
    console.log(response);
    res.status(200).send({message:`The player was updated`});
    
}

export default update;