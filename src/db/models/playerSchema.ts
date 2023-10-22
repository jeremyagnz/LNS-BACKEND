import mongoose  from "mongoose";

const playerSchema = new mongoose.Schema({

    id: {
        type:String,
        required: true,
        unique:true
    },
    name: {
        type:String,
        required: true,
    },
    apellidos: {
        type:String,
        required: true,
    },
    cedula: {
        type:String,
        required: true,
    },
    foto: {
        type:String,
    },
    equipo: {
        type:String,
        required: true,
    },
    numero: {
        type:Number,
        required: true,
    },
    posicion: {
        type:String,
        required: true,
    },
    fecha_nacimiento: {
        type:String,
        required: true,
    },
    bt: {
        type:String,
        required: true,
    },

    
}, {collection: 'player', timestamps: false, versionKey:false});

const Player = mongoose.model('player',playerSchema);

export default Player;
