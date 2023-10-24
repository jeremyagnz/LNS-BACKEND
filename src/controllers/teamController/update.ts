import { updateTeam } from "../../db/implementations/teamRepository";

const update = async (req: any, res: any) => {
  try {
    const { id, nombre, logo, manager } = req.body;

    if (!id) {
      console.log("Missing 'id' in the request body");
      return res.status(400).send("Missing 'id' in the request body");
    }

    if (!nombre && !logo && !manager) {
      console.log("No valid data for update: Missing 'nombre', 'logo', and 'manager'");
      return res.status(400).send("No valid data for update: Missing 'nombre', 'logo', and 'manager'");
    }

    const team = { nombre, logo, manager };

    const response = await updateTeam(id, team);

    if (response) {
      console.log(response);
      return res.status(200).send({ message: `The team was updated` });
    } else {
      console.log("Team not found");
      return res.status(404).send("Team not found");
    }
  } catch (error) {
    console.error("Error in update operation:", error);
    return res.status(500).send("Internal Server Error");
  }
};

export default update;
