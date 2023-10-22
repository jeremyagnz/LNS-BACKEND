import { Team } from "../models";

export const createTeam = async (team:any) => {
    return await Team.create(team)
}

export const getAllTeam = async () => {
    return await Team.find()
}

export const getTeam = async (id:string) => {
    return await Team.findOne({id:id})
}

export const removeTeam = async (id:string) => {
    return await Team.deleteOne({id:id})
}

export const updateTeam = async (id:string, team:any) => {
    return await Team.findOneAndUpdate({id:id}, {nombre:team.nombre, logo:team.logo, manager:team.manager});
}
