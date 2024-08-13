import {Schema, model} from 'mongoose';

const ServiceSchema = new Schema({
  
    name:{
        type: String,
        required: true,
        maxLength: 100
    },

    description:{
        type: String,
        required: true,
        maxLength: 500
    },
    imageUrl: {
        type: String,  
        required: false,
        unique: false
    }

}, 
)

const ServiceModel = new model("service", ServiceSchema);

export default ServiceModel;