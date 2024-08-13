import { Schema, SchemaType, model } from "mongoose";

const clientSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        encrypted: true
    },  
},
    {
        toJSON: {
            transform: (doc, ret) => {
                delete ret.password;
                return ret;
            }
        }
    })


const ClientModel = new model("Client", clientSchema);
export default ClientModel;