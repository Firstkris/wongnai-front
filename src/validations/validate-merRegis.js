import Joi from 'joi';
import { validate } from "./validate"
const registerSchema = Joi.object({
  name: Joi.string().required().trim().messages({
    "string.empty": "Name is required",
    "any.required": "Name is required",
  }),
  username: Joi.string().required().regex(/^[a-zA-Z0-9]+$/)
    .messages({
      "string.empty": "Username is require",
      "any.required": "Username is require",
    }),
  mobile: Joi.string()
    .required()
    .pattern(/[0][0-9]{9}$/)
    .messages({
      "string.empty": "Mobile is require",
      "any.required": "Mobile is require",
      "string.pattern.base": "Mobile invalid",
    }),
  password: Joi.string().required().trim().messages({
    "string.empty": "Password is required",
    "any.required": "Password is required",
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "string.empty": "Confirm password is required",
    "any.only": "Password and confirm password don't match",
    "any.required": "Confirm password is required",
  }).strip(),

});

const validateRegister = input => validate(registerSchema)(input);
export default validateRegister;