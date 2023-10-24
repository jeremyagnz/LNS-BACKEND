
import { v4 as uuidv4 } from 'uuid';
import { createPlayer } from '../../db/implementations/playesRepository';

const create = async (req: any, res: any) => {
  try {
    const {
      name, apellidos, numero, posicion, cedula, foto, equipo, fecha_nacimiento, bt
    } = req.body;

    if (!name || !apellidos || !numero || !posicion || !cedula || !foto || !equipo || !fecha_nacimiento || !bt) {
      console.log("Invalid player data: Missing required fields");
      return res.status(400).send("Invalid player data: Missing required fields");
    }

    const playerPayload = {
      id: uuidv4(),
      name,
      apellidos,
      numero,
      posicion,
      cedula,
      foto,
      equipo,
      fecha_nacimiento,
      bt
    };

    console.log(playerPayload);
    await createPlayer(playerPayload);

    return res.status(201).send({ message: "Player created" });
  } catch (error) {
    console.error("Error in create operation:", error);
    return res.status(500).send("Internal Server Error");
  }
};

export default create;
