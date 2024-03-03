import Joi from "joi";
import { validate } from "./validate";
const validateLoginSchema = Joi.object({
  username: Joi.string().required().messages({
    "string.empty": "Mobile is require",
    "any.required": "Mobile is require",
    "string.pattern.base": "Mobile invalid",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Mobile is require",
    "any.required": "Mobile is require",
    "string.pattern.base": "Mobile invalid",
  }),
});

const validateLogin = (input) => validate(validateLoginSchema)(input);
export { validateLogin };
