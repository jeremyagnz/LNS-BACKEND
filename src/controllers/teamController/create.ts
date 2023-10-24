import { createTeam } from "../../db/implementations/teamRepository";
import { v4 as uuidv4 } from 'uuid';

const create = async (req: any, res: any) => {
  try {
    const { name, logo, manager } = req.body;

    if (!name || !logo || !manager) {
      console.log("Invalid team data: Missing name, logo, or manager");
      return res.status(400).send("Invalid team data: Missing name, logo, or manager");
    }

    const teamPayload = {
      id: uuidv4(),
      name,
      logo,
      manager
    };

    console.log(teamPayload);
    await createTeam(teamPayload);

    return res.status(201).send({ message: "Team created" });
  } catch (error) {
    console.error("Error in create operation:", error);
    return res.status(500).send("Internal Server Error");
  }
};

export default create;
