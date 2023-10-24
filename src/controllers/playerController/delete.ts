import { removePlayer } from "../../db/implementations/playesRepository";


const remove = async (req: any, res: any) => {
  try {
    const { id } = req.query;

    if (!id) {
      console.log("Missing 'id' in the request query");
      return res.status(400).send("Missing 'id' in the request query");
    }

    await removePlayer(id);
    return res.status(200).send({ message: 'The player was deleted' });
  } catch (error) {
    console.error("Error in remove operation:", error);
    return res.status(500).send("Internal Server Error");
  }
};

export default remove;
