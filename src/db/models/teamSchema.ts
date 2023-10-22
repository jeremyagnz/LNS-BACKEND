import mongoose  from "mongoose";

const teamSchema = new mongoose.Schema({

    id: {
        type:String,
        required: true,
        unique:true
    },
    name: {
        type:String,
        required: true,
    },
    logo: {
        type:String,
    },
    manager: {
        type:String,
        required: true,
        unique:true
    },
    
}, {collection: 'team', timestamps: false, versionKey:false});

const Team = mongoose.model('team',teamSchema);

export default Team;
