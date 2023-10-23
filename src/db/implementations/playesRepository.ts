import { Player } from "../models"


export const createPlayer = async (player: any) => {
    return await Player.create(player)
}
export const getAllPlayers = async () => {
    return await Player.find()
}

export const getPlayer = async (id: string) => {
    return await Player.findOne({ id: id })
}

export const removePlayer = async (id: string) => {
    return await Player.deleteOne({ id: id })
}

export const updatePlayer = async (id: string, player: any) => {
    return await Player.findOneAndUpdate({ id: id },
        {
            name: player.name, naapellidos: player.apellidos, numero: player.numero, posicion: player.posicion,
            cedula: player.cedula, foto: player.foto, equipo: player.equipo, fecha_nacimiento: player.fecha_nacimiento, bt: player.bt
        });
}
