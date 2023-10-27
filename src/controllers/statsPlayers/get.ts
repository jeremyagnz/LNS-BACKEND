import { getAllPlayersStats } from "../../db/implementations/statsPlayerRepository";



const getStats = async (req: any, res: any) => {
  try {
    const { id } = req.query;

    /* if (id) {
      const player = await getPlayer(id);

      if (player) {
        console.log(player);
        return res.status(200).send(player);
      } else {
        console.log("Player not found");
        return res.status(404).send("Player not found");
      }
    } */

    const allPlayersStats = await getAllPlayersStats();
    if (allPlayersStats && allPlayersStats.length > 0) {
      console.log(allPlayersStats);
      return res.status(200).send(allPlayersStats);
    } else {
      console.log("No players found");
      return res.status(404).send("No players found");
    }
  } catch (error) {
    console.error("Error in get operation:", error);
    return res.status(500).send("Internal Server Error");
  }
};

export default getStats;
