import { Schema, model } from "mongoose";

const artisanSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        encrypted: true
    },
    phoneNumber: {
        type: String,
    },
    service: {
        type: Schema.Types.ObjectId,
        ref: "Service"
    },
    serviceTimeStart: {
        type: String,
        required: false
    },
    serviceTimeEnd: {
        type: String,
        required: false
    },
    country: {
        type: String,
    },
    state: {
        type: String,
    },
    area: {
        type: String,
        required: false
    },
    address: {
        type: String,
    },
    picture: {
        type: String, // Store the image URL (see previous advice for storage)
        required: false,
    },
    bio: {
        type: String,
    },
    workPhoto: {
        type: String, // Store the URL of the image in the database
    },
    credentials: {
        type: String,
    }
},
    {
        toJSON: {
            transform: (doc, ret) => {
                delete ret.password;
                return ret;
            }
        }
    })


const ArtisanModel = new model("Artisan", artisanSchema);
export default ArtisanModel;
