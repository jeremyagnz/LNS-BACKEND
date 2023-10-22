import { createTeam } from "../../db/implementations/teamRepository";
import {v4 as uuidv4} from 'uuid'

const create = async (req:any, res:any) => {
    const {name,logo,manager} = req.body;
    
    const teamPayload = {
        id: uuidv4(),
        name,
        logo,
        manager
    };
    console.log(teamPayload);
   await createTeam(teamPayload);
  
    res.status(201).send({message:"Team created"});
};



export default create;

