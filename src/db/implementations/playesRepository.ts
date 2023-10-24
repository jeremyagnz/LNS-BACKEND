import { Player } from "../models";

// Crea un nuevo jugador
export const createPlayer = async (playerData: any) => {
  try {
    return await Player.create(playerData);
  } catch (error) {
    console.error("Error creating player:", error);
    throw error;
  }
}

// Obtiene todos los jugadores
export const getAllPlayers = async () => {
  try {
    return await Player.find();
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
}

// Obtiene un jugador por su ID
export const getPlayer = async (id: string) => {
  try {
    return await Player.findOne({ id: id });
  } catch (error) {
    console.error("Error fetching player by ID:", error);
    throw error;
  }
}

// Elimina un jugador por su ID
export const removePlayer = async (id: string) => {
  try {
    return await Player.deleteOne({ id: id });
  } catch (error) {
    console.error("Error deleting player by ID:", error);
    throw error;
  }
}

// Actualiza un jugador por su ID
export const updatePlayer = async (id: string, updatedPlayerData: any) => {
  try {
    return await Player.findOneAndUpdate({ id: id }, updatedPlayerData);
  } catch (error) {
    console.error("Error updating player by ID:", error);
    throw error;
  }
}
