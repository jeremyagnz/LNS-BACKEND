import { getAllTeams, getTeamById } from "../../db/implementations/teamRepository";

const get = async (req: any, res: any) => {
  try {
    const { id } = req.query;

    if (id) {
      const team = await getTeamById(id);

      if (team) {
        console.log(team);
        return res.status(200).send(team);
      } else {
        console.log("Team not found");
        return res.status(404).send("Team not found");
      }
    }

    const allTeams = await getAllTeams();
    if (allTeams && allTeams.length > 0) {
      console.log(allTeams);
      return res.status(200).send(allTeams);
    } else {
      console.log("No teams found");
      return res.status(404).send("No teams found");
    }
  } catch (error) {
    console.error("Error in get operation:", error);
    return res.status(500).send("Internal Server Error");
  }
};

export default get;
