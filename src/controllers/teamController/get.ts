import { getAllTeam, getTeam } from "../../db/implementations/teamRepository";

const get = async (req:any, res:any) => {
    const {id} = req.query;

    if(id){
     const response = await getTeam(id);
     console.log(response);
     return res.status(200).send(response);
    }

    const resAll = await getAllTeam();
    console.log(resAll);
    return res.status(200).send(resAll);
}

export default get;