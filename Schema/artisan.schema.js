import Joi from 'joi';

const signUpArtisan = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phoneNumber: Joi.string().required()
})

const logInArtisan = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})

const updateArtisanLogIn = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().optional(),
    phoneNumber: Joi.string(),
    serviceType: Joi.string(),
    serviceTimeStart: Joi.string().optional(),
    serviceTimeEnd: Joi.string().optional(),
    country: Joi.string(),
    state: Joi.string(),
    area: Joi.string().optional(),
    address: Joi.string(),
    picture: Joi.string().optional(),
    bio: Joi.string(),
    workPhoto: Joi.string(),
    credentials: Joi.string(),
})

const updateArtisan = Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().email().optional(),
    phoneNumber: Joi.string().optional(),
    serviceType: Joi.string().optional(),
    serviceTimeStart: Joi.string().optional(),
    serviceTimeEnd: Joi.string().optional(),
    country: Joi.string().optional(),
    state: Joi.string().optional(),
    area: Joi.string().optional(),
    address: Joi.string().optional(),
    picture: Joi.string().optional(),
    bio: Joi.string().optional(),
    workPhoto: Joi.string().optional(),
    credentials: Joi.string().optional(),
})

export {signUpArtisan, logInArtisan, updateArtisanLogIn, updateArtisan}