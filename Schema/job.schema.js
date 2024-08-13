import Joi from "joi";


const createJobSchema = Joi.object({
  
   taskName: Joi.string().required(),
   taskDescription:Joi.string().required(),
   location: Joi.string().required(),
   date: Joi.string().required(),
   status:Joi.string().optional()
})

export const updateJobSchema = Joi.object({
  
    taskName: Joi.string().optional(),
    taskDescription:Joi.string().optional(),
    location: Joi.string().optional(),
    date: Joi.string().optional(),
    status:Joi.string().optional()
 })
export default createJobSchema;