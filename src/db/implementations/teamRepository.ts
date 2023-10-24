import { Team } from "../models";

// Crea un nuevo equipo
export const createTeam = async (teamData: any) => {
  try {
    return await Team.create(teamData);
  } catch (error) {
    console.error("Error creating team:", error);
    throw error;
  }
}

// Obtiene todos los equipos
export const getAllTeams = async () => {
  try {
    return await Team.find();
  } catch (error) {
    console.error("Error fetching teams:", error);
    throw error;
  }
}

// Obtiene un equipo por su ID
export const getTeamById = async (id: string) => {
  try {
    return await Team.findOne({ id: id });
  } catch (error) {
    console.error("Error fetching team by ID:", error);
    throw error;
  }
}

// Elimina un equipo por su ID
export const removeTeam = async (id: string) => {
  try {
    return await Team.deleteOne({ id: id });
  } catch (error) {
    console.error("Error deleting team by ID:", error);
    throw error;
  }
}

// Actualiza un equipo por su ID
export const updateTeam = async (id: string, updatedTeamData: any) => {
  try {
    return await Team.findOneAndUpdate({ id: id }, updatedTeamData);
  } catch (error) {
    console.error("Error updating team by ID:", error);
    throw error;
  }
}
