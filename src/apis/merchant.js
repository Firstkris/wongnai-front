import axios from "../configs/axios";

export const getProvince = async () => axios.get('/merchant/province')

export const getDistrict = async (provinceCode) => axios.post('/merchant/district', { provinceCode })

export const getSubDistrict = async (districtCode) => axios.post('/merchant/sub-district', { districtCode })

export const getCategory = async () => axios.get('/merchant/category')

export const merchantCreateRestaurant = async (mercData) => axios.post('/merchant/register', mercData)