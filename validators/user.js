import Joi from 'joi'

const userFields = {
  firstName: Joi.string().trim().min(2).max(32).required(),
  lastName: Joi.string().trim().min(2).max(32).required(),
  email: Joi.string()
    .lowercase()
    .email({ tlds: { allow: false } })
    .required(),
  mobile: Joi.number().integer().required(),
  nationality: Joi.string().required(),
  residence: Joi.string().required(),
  dob: Joi.date().required(),
  gender: Joi.string().required()
}

export const userSchema = Joi.object(userFields)
