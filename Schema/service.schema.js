import Joi from 'joi';

const createServiceSchema = Joi.object({
    name: Joi.string().required().max(100),
    description: Joi.string().required().max(500),
    imageUrl: Joi.string().required()
})

export const updateServiceSchema = Joi.object({
    name: Joi.string().optional().max(100),
    description: Joi.string().optional().max(500),
    imageUrl: Joi.string().optional()
})
export default createServiceSchema ;