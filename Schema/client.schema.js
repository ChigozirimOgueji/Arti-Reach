import Joi from 'joi';

const signUpSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

const logInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})

const updateSchema = Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().optional()
})

export {signUpSchema, logInSchema, updateSchema}