import Joi from 'joi';
import { validate } from "./validate"


const loginSchema = Joi.object({
    usernameOrMobile: Joi.string().required().messages({
      'string.empty': 'username or mobile is required',
      'any.required': 'username or mobile is required'
    }),
    password: Joi.string().required().messages({
      'string.empty': 'password is required',
      'any.required': 'password is required'
    })
  });

  const validateLogin = input => validate(loginSchema)(input);
export default validateLogin
