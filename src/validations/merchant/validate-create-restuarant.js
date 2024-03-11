import Joi from "joi";
import { validate } from "../validate";

const createRestaurantSchema = Joi.object({
    merchantId: Joi.number(),
    restaurantName: Joi.string().trim().required().messages({
        "string.empty": "กรุณาใส่ชื่อร้าน",
        "any.required": "กรุณาใส่ชื่อร้าน",
    }),
    subtitle: Joi.string().trim().required().messages({
        "string.empty": "กรุณาใส่รายละเอียด",
        "any.required": "กรุณาใส่รายละเอียด",
    }),
    provinceCode: Joi.number(),
    districtCode: Joi.number(),
    subdistrictCode: Joi.number(),
    categoryId: Joi.number(),
    mobile: Joi.string()
        .required()
        .pattern(/[0][0-9]{9}$/)
        .messages({
            "string.empty": "กรุณาใส่หมายเลขโทรศัพท์",
            "any.required": "กรุณาใส่หมายเลขโทรศัพท์",
            "string.pattern.base": "Mobile invalid",
        }),
    email: Joi.string().trim().email({ tlds: false }).optional().allow(null).messages({
        "string.empty": "Email is require",
        "any.required": "Email is require",
        'any.only': "Email is required",
        'string.trim': "Email is required"
    }),
    priceLength: Joi.string(),
    address: Joi.string().trim().required().messages({
        "string.empty": "กรุณาใส่ที่อยู่",
        "any.required": "กรุณาใส่ที่อยู่",
    }),
    lat: Joi.number(),
    lng: Joi.number()

});

const validateCreateRestaurant = (input) => validate(createRestaurantSchema)(input);
export { validateCreateRestaurant };
