import { useState, createContext } from "react"
import axios from "axios"
import { fetchGeoDataByName, getCategory, getDistrict, getProvince, getSubDistrict, gistdaApi, merchantCreateRestaurant } from "../apis/merchant"

export const MerchantContext = createContext()


function MerchantContextProvider({ children }) {

    const [provinces, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [subDistrict, setSubDistrict] = useState([]);
    const [category, setCategory] = useState([]);


    const fetchProvince = async () => {
        const res = await getProvince()
        // console.log(res.data.province);
        setProvince(res.data.province)
    }

    const fetchDistrict = async (provinceCode) => {
        console.log(provinceCode);
        const res = await getDistrict(+provinceCode)
        setDistrict(res.data.district)
    }

    const fetchSubDistrict = async (districtCode) => {
        console.log(districtCode)
        const res = await getSubDistrict(+districtCode)
        console.log(res.data.subDistrict)
        setSubDistrict(res.data.subDistrict)
    }

    const fetchCategory = async () => {
        const res = await getCategory()
        setCategory(res.data.categories)
    }

    const createRestaurant = async (data) => {
        const res = await merchantCreateRestaurant(data)
        // console.log(res);
    }

    // const fetchAreaGeoData = async (postalCode) => {
    //     console.log(postalCode);
    //     const res = await fetchGeoDataByPostalCode(postalCode)
    //     console.log(res.data.district);
    //     setProvince(prv => [...prv, res.data.province])
    //     setDistrict(prv => [...prv, res.data.district])
    //     console.log('fetchGeoDataByPostalCode', res);
    // }

    const getGeoDataFromGistda = async (data) => {
        setProvince([])
        setDistrict([])
        setSubDistrict([])
        console.log(data, 'data');
        const res = await gistdaApi(data)
        const geoData = await fetchGeoDataByName(res.data)
        console.log(geoData);
        setProvince(prv => ([...prv, geoData.data.provinceData]))
        setDistrict(prv => ([...prv, geoData.data.districtData]))
        setSubDistrict(prv => ([...prv, geoData.data.subDistrictData]))

    }

    return (
        <MerchantContext.Provider
            value={{
                fetchProvince,
                fetchCategory,
                provinces,
                district,
                fetchDistrict,
                subDistrict,
                fetchSubDistrict,
                category,
                createRestaurant,
                // fetchAreaGeoData,
                getGeoDataFromGistda
            }}
        >
            {children}
        </MerchantContext.Provider>
    )
}

export default MerchantContextProvider