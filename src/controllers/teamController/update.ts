import { updateTeam } from "../../db/implementations/teamRepository";

const update = async (req:any, res:any) => {

    const {id, nombre, logo, manager} = req.body;
    const team = {nombre, logo, manager};

    const response = await updateTeam(id,team);
    console.log(response);
    res.status(200).send({message:`The team was updated`});
    
}

export default update;