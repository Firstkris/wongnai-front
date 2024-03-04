const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});
