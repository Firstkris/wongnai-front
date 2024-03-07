import Joi from 'joi';
import { validate } from "./validate"
const registerSchema = Joi.object({
    name: Joi.string().required().trim().messages({
        "string.empty": "Name is require",
        "any.required": "Name is require",
    }),
    mobile: Joi.string()
        .required()
        .trim()
        .pattern(/[0-9]{10}$/)
        .messages({
            "string.empty": "Mobile is require",
            "any.required": "Mobile is require",
            "string.pattern.base": "Mobile invalid",
        }),
    email: Joi.string().email({ tlds: false }).messages({
        "string.empty": "Email is require",
        "any.required": "Email is require",
    }),
    password: Joi.string().required().trim().messages({
        "string.empty": "Password is require",
        "any.required": "Password is require",
    }),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
        "string.empty": "Confirm password is require",
        "any.only": "Password and confirm password is't match",
        "any.required": "Confirm password is require",
    })
    
})

const validateRegister = input => validate(registerSchema)(input);
export default validateRegister;