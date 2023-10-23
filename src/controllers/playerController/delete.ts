import { removePlayer } from "../../db/implementations/playesRepository";


const remove = async (req:any, res:any) => {
    const {id} = req.query;

    await removePlayer(id);
    return res.status(200).send({message:'The player was deleted'});

}

export default remove;