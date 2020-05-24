import * as joi from 'joi';

export const userValidator = joi.object().keys({
    name: joi.string().required(),
    password: joi.string().required(),
    email: joi.string().email().required()
});


