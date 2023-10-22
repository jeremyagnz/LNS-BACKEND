import { removeTeam } from "../../db/implementations/teamRepository";

const remove = async (req:any, res:any) => {
    const {id} = req.query;

    await removeTeam(id);
    return res.status(200).send({message:'The team was deleted'});

}

export default remove;