import { updatePlayer } from "../../db/implementations/playesRepository";


const update = async (req: any, res: any) => {
  try {
    const { id, name, apellidos, numero, posicion, cedula, foto, equipo, fecha_nacimiento, bt } = req.body;

    if (!id) {
      console.log("Missing 'id' in the request body");
      return res.status(400).send("Missing 'id' in the request body");
    }

    if (!name && !apellidos && !numero && !posicion && !cedula && !foto && !equipo && !fecha_nacimiento && !bt) {
      console.log("No valid data for update: Missing all fields");
      return res.status(400).send("No valid data for update: Missing all fields");
    }

    const player = { name, apellidos, numero, posicion, cedula, foto, equipo, fecha_nacimiento, bt };

    const response = await updatePlayer(id, player);

    if (response) {
      console.log(response);
      return res.status(200).send({ message: `The player was updated` });
    } else {
      console.log("Player not found");
      return res.status(404).send("Player not found");
    }
  } catch (error) {
    console.error("Error in update operation:", error);
    return res.status(500).send("Internal Server Error");
  }
};

export default update;
