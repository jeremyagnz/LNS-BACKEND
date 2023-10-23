import { getAllPlayers, getPlayer } from "../../db/implementations/playesRepository";


const get = async (req:any, res:any) => {
    const {id} = req.query;

    if(id){
     const response = await getPlayer(id);
     console.log(response);
     return res.status(200).send(response);
    }

    const resAll = await getAllPlayers();
    console.log(resAll);
    return res.status(200).send(resAll);
}

export default get;