import {Schema, model} from "mongoose"

const jobSchema = new Schema({
  
   client:{
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
   },

   artisan:{
    type: Schema.Types.ObjectId,
    ref: 'Artisan',
   },

   taskName:{
      type: String,
      required: true,
   },

   taskDescription:{
    type: String,
    required: true,
   },
   
   date:{
    type: Date,
    required: true,
   },

   
   location: {
      type: String,
      required: true,
   },

   status:{
    type: String,
    enum: ['pending', 'accepted', 'completed', 'cancelled'],
    default: 'pending',
   },


})

const JobModel = new model("Job", jobSchema);

export default JobModel;