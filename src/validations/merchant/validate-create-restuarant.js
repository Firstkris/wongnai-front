import Joi from "joi";
import { validate } from "../validate";

const createRestaurantSchema = Joi.object({
    name: Joi.string().trim().required().messages({
        "string.empty": "Name is require",
        "any.required": "Name is require",
    }),
    mobile: Joi.string()
        .required()
        .pattern(/[0][0-9]{9}$/)
        .messages({
            "string.empty": "Mobile is require",
            "any.required": "Mobile is require",
            "string.pattern.base": "Mobile invalid",
        }),
    email: Joi.string().required().messages({
        "string.empty": "Email is require",
        "any.required": "Email is require",
    }),
    password: Joi.string().required().messages({
        "string.empty": "Password is require",
        "any.required": "Password is require",
    }),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
        "string.empty": "Confirm password is require",
        "any.only": "Password and confirm password is't match",
        "any.required": "Confirm password is require",
    }),
    birthdate: Joi.string().required().messages({
        "string.empty": "Birthdate is require",
        "any.required": "Birthdate is require",
    }),
    gender: Joi.string().required().messages({
        "string.empty": "Gender is require",
        "any.required": "Gender is require",
    }),
});

const validateRegister = (input) => validate(registerShema)(input);
export { validateRegister };
