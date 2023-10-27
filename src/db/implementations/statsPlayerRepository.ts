import statsPlayer from "../models/statsPlayersSchema";


// Crea un nuevo jugador
export const createStats = async (playerData: any) => {
  try {
    return await statsPlayer.create(playerData);
  } catch (error) {
    console.error("Error creating player:", error);
    throw error;
  }
}


// Obtiene todos los jugadores
export const getAllPlayersStats = async () => {
  try {
    return await statsPlayer.find();
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
}