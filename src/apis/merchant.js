import axios from "../configs/axios";
import { getToken } from "../utils/local-storage";


export const login = async (fromData) =>
  await axios.post("/merchant/login", fromData);

export const register = async (fromData) => axios.post('/merchant/register', fromData);

export const fetchMe = () =>
  axios.get("/user/me", {
    headers: { Authorization: `Bearer ${getToken}` },
  });


export const getProvince = async () => axios.get('/merchant/province')

export const getDistrict = async (provinceCode) => axios.post('/merchant/district', { provinceCode })

export const getSubDistrict = async (districtCode) => axios.post('/merchant/sub-district', { districtCode })

export const getCategory = async () => axios.get('/merchant/category')

export const merchantCreateRestaurant = async (mercData) => axios.post('/merchant/register', mercData)

export const gistdaApi = async (data) => axios.post('https://api.sphere.gistda.or.th/services/geo/address', data)

export const fetchGeoDataByName = async (data) => axios.post('/merchant/get-by-name', data)