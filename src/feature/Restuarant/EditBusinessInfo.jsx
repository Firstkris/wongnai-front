import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import Card from "../../components/Card";
import Input from "../../components/Input";
import Select from "../../components/Select";
import HrWithText from "../../components/HrWithText";
import Button from "../../components/Button";

import RadioBtn from "../../components/RadioBtn";
import GoogleMaps from "../../pages/Restaurant/GoogleMapPin"
import useMerchantContext from "../../hooks/useMerchantContext";
import OpeningHours from "./OpenHours";
import { validateCreateRestaurant } from "../../validations/merchant/validate-create-restuarant";


import { priceLength } from "../../constants/constant"
import { GISTDA_API_KEY } from "../../constants/constant";
import useRestaurantContext from "../../hooks/useRestaurantContext";
import { Loading } from "../../components/Loading";
import { fetchBusinessInfo } from "../../apis/merchant";


function EditBusinessInfo() {

    const navigate = useNavigate()
    const { merchantId, restaurantId } = useParams()
    const [defaultBusinessInfo, setDefaultBusinessInfo] = useState()

    // const { getBusinessInfoById } = useMerchantContext()
    let defaultFacility = {
        parking: { id: 1, value: true },
        wifi: { id: 2, value: true },
        creditCard: { id: 3, value: true },
        alcohol: { id: 4, value: true }

    }

    const [facility, setFacility] = useState(defaultFacility)
    const getBusinessInfoById = async (restaurantId) => {
        const res = await fetchBusinessInfo(restaurantId)
        // setDefaultBusinessInfo(res.data.restaurant)
        // setInput(res.data.restaurant)
        const {
            openHours,
            facilitiesWithRestaurantId,
            ...restaurantData } = res.data.restaurantInfo;

        console.log(openHours, facilitiesWithRestaurantId, restaurantData);


        if (openHours.length !== 7) {
            setIsEveryday(false)

            // handle each day open edit
            Object.entries(openingHours).reduce(
                (acc, day) => {
                    // console.log(new Date(openHours[0].openTime).toLocaleTimeString("en-GB"))
                    for (let i = 0; i < openHours.length; i++) {
                        if (openHours[i].date == day[0]) {
                            // console.log(openHours[i].date, "------------------");
                            return setOpeningHours((prv) => ({
                                ...prv,
                                [day[0]]: {
                                    open: new Date(
                                        openHours[0].openTime
                                    ).toLocaleTimeString("en-GB"),
                                    close: new Date(
                                        openHours[0].closeTime
                                    ).toLocaleTimeString("en-GB"),
                                    closed: false,
                                },
                            }));
                            // console.log(openHours, "in loop")
                        } else {
                            setOpeningHours((prv) => ({
                                ...prv,
                                [day[0]]: {
                                    open: new Date(
                                        openHours[0].openTime
                                    ).toLocaleTimeString("en-GB"),
                                    close: new Date(
                                        openHours[0].closeTime
                                    ).toLocaleTimeString("en-GB"),
                                    closed: true,
                                },
                            }));

                        }
                    }

                },
                {}
            )


        } else {
            setEverydayTime({
                open: new Date(
                    openHours[0].openTime
                ).toLocaleTimeString("en-GB"), close: new Date(
                    openHours[0].closeTime
                ).toLocaleTimeString("en-GB")
            })
        }

        setDefaultBusinessInfo(res.data.restaurantInfo)
        setInput(restaurantData)
        console.log(facilitiesWithRestaurantId[0].facilityId);

        Object.entries(defaultFacility).reduce((acc, el) => {
            // console.log(el[0])
            for (let i = 0; i < facilitiesWithRestaurantId.length; i++) {
                console.log(facilitiesWithRestaurantId[i].facilityId)
                if (el[1].id === facilitiesWithRestaurantId[i].facilityId) {
                    return setFacility(prv => ({ ...prv, [el[0]]: { ...el[1], value: true } }))
                } else {
                    setFacility(prv => ({ ...prv, [el[0]]: { ...el[1], value: false } }))
                }
            }
        }, [])


    }




    const {
        fetchCategory,
        provinces,
        district,
        subDistrict,
        category,
        createRestaurant,
        fetchAreaGeoData,
        getGeoDataFromGistda,
        updateRestaurantInfo
    } = useMerchantContext();

    const initialValue = {
        merchantId: +merchantId,
        restaurantName: "",
        subtitle: "",
        provinceCode: "",
        districtCode: "",
        subdistrictCode: "",
        categoryId: 1,
        mobile: "",
        email: null,
        priceLength: "฿",
        address: "",
        lat: "",
        lng: ""
    };


    const gistdaPostData = {
        "key": GISTDA_API_KEY,
        "lon": 0,
        "lat": 0,
        "locale": "t"
    }


    const [input, setInput] = useState(initialValue);
    const [searchData, setSearchData] = useState(gistdaPostData)
    const [error, setError] = useState({})
    const [isEveryday, setIsEveryday] = useState(true)
    const [openingHours, setOpeningHours] = useState({
        monday: { open: '09:00', close: '17:00', closed: false },
        tuesday: { open: '09:00', close: '17:00', closed: false },
        wednesday: { open: '09:00', close: '17:00', closed: false },
        thursday: { open: '09:00', close: '17:00', closed: false },
        friday: { open: '09:00', close: '17:00', closed: false },
        saturday: { open: '09:00', close: '17:00', closed: false },
        sunday: { open: '09:00', close: '17:00', closed: false }
    });


    const [everydayTime, setEverydayTime] = useState({ open: '09:00', close: '17:00' });





    console.log(facility);
    const { isLoading, setLoading } = useRestaurantContext()

    const hdlChangeInput = (e) => {

        if (e.target.name === "mobile") {
            setInput((prv => ({ ...prv, [e.target.name]: e.target.value })))
        } else {

            console.log(e.target.name, e.target.value);
            setInput(prv => ({ ...prv, [e.target.name]: +e.target.value ? +e.target.value : e.target.value }));
            setError({})
        }
    };


    const hdlChangeEveryOpen = (e) => {
        setEverydayTime(prv => ({ ...prv, [e.target.name]: e.target.value }))

    }

    const onSetTimeToEveryDay = (e) => {

        setOpeningHours(
            Object.entries(openingHours).reduce(
                (acc, day) => ({
                    ...acc,
                    [day[0]]: { open: everydayTime?.open, close: everydayTime?.close, closed: false },
                }),
                {}
            )
        );

    }

    // console.log(facility);?

    const handleTimeChange = (day, field, value) => {
        setOpeningHours(prevState => ({
            ...prevState,
            [day]: {
                ...prevState[day],
                [field]: value
            }
        }));
    };

    const handleClosedChange = (day) => {
        setOpeningHours(prevState => ({
            ...prevState,
            [day]: {
                ...prevState[day],
                closed: !prevState[day].closed
            }
        }));
    };

    const hdlSubmit = async (e) => {
        try {
            e.preventDefault()


            const validateError = validateCreateRestaurant(input)
            if (validateError) {
                toast.error('กรุณากรอกข้อมูลในช่องสีแดงให้ครบ')
                console.log(validateError);
                setError(validateError)
                return
            }
            const res = await updateRestaurantInfo(restaurantId, input, openingHours, facility)
            toast.success("update successful");
            setLoading(true)

            navigate(`/merchant/${merchantId}/${restaurantId}`)

        } catch (error) {
            setLoading(false)
            toast.error(error.response?.data.message)

        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 1e3);

        }

    }

    const hdlSetLatLng = (lat, lng) => {

        setSearchData(prv => ({ ...prv, lat: lat, lon: lng }))
        setInput((prv => ({ ...prv, lat: lat, lng: lng })))
        // getGeoDataFromGistda(searchData)
        // setInput(prv => ({}))

    }

    const hdlSetInputGeoData = () => {
        setInput(prv => ({
            ...prv,
            provinceCode: provinces?.[0]?.provinceCode,
            districtCode: district?.[0]?.districtCode,
            subdistrictCode: subDistrict?.[0]?.subdistrictCode,
        })
        )
    }

    //facility >> { parking: { id: 1, value: true }, ... 
    const onChangeFacility = (e) => {
        setFacility(prv => ({ ...prv, [e.target.name]: { value: Boolean(+e.target.value) } }))
    }




    useEffect(() => {
        fetchCategory()
    }, [])

    useEffect(() => {
        if (isEveryday) onSetTimeToEveryDay()
    }, [everydayTime?.open, everydayTime?.close])

    useEffect(() => {

        if (isNaN(+searchData.lat)) return
        getGeoDataFromGistda(searchData)

    }, [searchData.lat, searchData.lng])

    useEffect(() => {
        hdlSetInputGeoData();
    }, [subDistrict?.[0]?.subdistrictCode]);

    useEffect(() => {
        getBusinessInfoById(+restaurantId)
    }, [restaurantId])

    console.log(input);

    if (isLoading) return <Loading />

    return (
        <form onSubmit={hdlSubmit}>
            <div className={`w-full flex flex-col gap-6`}>
                {/* รายละเอียดธุรกิจ */}
                <Card>
                    <HrWithText name={"แก้ไขรายละเอียดธุรกิจ"} />

                    <Input
                        placeholder="ชื่อร้านค้า"
                        name="restaurantName"
                        value={input.restaurantName}
                        onChange={hdlChangeInput}
                        label={"ชื่อร้าน"}
                        errorMessage={error.restaurantName}
                    />

                    <Input
                        placeholder="รายละเอียดร้านค้า"
                        name="subtitle"
                        value={input.subtitle}
                        onChange={hdlChangeInput}
                        label={"รายละเอียดร้านค้า"}
                        errorMessage={error.subtitle}
                    />

                    {/* <Select label={'เลือกประเภทธุรกิจ'} /> */}
                    <Select
                        label={"เลือกหมวดหมู่"}
                        name={"categoryId"}
                        value={input.categoryId}
                        items={category}
                        onChange={hdlChangeInput}
                    />
                </Card>

                {/* ที่อยู่ */}
                <Card>
                    <HrWithText name={"ที่อยู่"} />

                    <p>เลือกตำแหน่งจากแผนที่</p>

                    <GoogleMaps hdlSetLatLng={hdlSetLatLng} isEdit={true} lat={defaultBusinessInfo?.lat} lng={defaultBusinessInfo?.lng} />

                    <Input
                        placeholder="ชื่อซอยหรือถนน พร้อมบ้านเลขที่"
                        label={"ที่อยู่ :"}
                        name="address"
                        value={input.address}
                        onChange={hdlChangeInput}
                        errorMessage={error.address}
                    />

                    <Select
                        label={"จังหวัด"}
                        name={"provinceCode"}
                        display={"province"}
                        value={input.provinceCode}
                        onChange={hdlChangeInput}
                        items={provinces}
                    />

                    <Select
                        label={"เขต/อำเภอ"}
                        name={"districtCode"}
                        display={"district"}
                        value={input.districtCode}
                        onChange={hdlChangeInput}
                        items={district}
                    />

                    <Select
                        label={"แขวง/ตำบล"}
                        name={"subdistrictCode"}
                        display={"subdistrict"}
                        value={input.subdistrictCode}
                        onChange={hdlChangeInput}
                        items={subDistrict}
                    />

                </Card>

                {/* ข้อมูลติดต่อ */}
                <Card>
                    <HrWithText name={"ข้อมูลติดต่อ"} />

                    <Input
                        placeholder="เบอร์ติดต่อ"
                        label={"เบอร์ติดต่อ :"}
                        name="mobile"
                        value={input.mobile}
                        onChange={hdlChangeInput}
                        errorMessage={error.mobile}
                    />

                    <Input
                        placeholder="example@mail.com"
                        label={"อีเมล :"}
                        name="email"
                        value={input.email}
                        onChange={hdlChangeInput}
                        errorMessage={error.email}
                    />
                </Card>

                {/* ข้อมูลเพิ่มเติม */}
                <Card>
                    <HrWithText name={"ข้อมูลเพิ่มเติม"} />

                    <RadioBtn
                        label={"วันที่เปิดให้บริการ"}
                        name={"openHours"}
                        onChange={(e) => setIsEveryday(Boolean(+e.target.value))}
                        choices={[
                            { text: "เปิดทุกวัน", value: 1 },
                            { text: "เลือกวันเปิดปิด", value: 0 },
                        ]}
                        isChecked={isEveryday}
                    />

                    {!isEveryday ? (
                        <OpeningHours
                            label={"วันที่เปิดให้บริการ"}
                            openingHours={openingHours}
                            handleTimeChange={handleTimeChange}
                            handleClosedChange={handleClosedChange}
                        />
                    ) : (
                        <>
                            <Input type="time" name={"open"} label={"เลือกเวลาเปิดของทุกวัน"} value={everydayTime.open} onChange={hdlChangeEveryOpen} />
                            <Input type="time" name={"close"} label={"เลือกเวลาปิดของทุกวัน"} value={everydayTime.close} onChange={hdlChangeEveryOpen} />
                        </>
                    )}

                    <Select
                        name={"priceLength"}
                        items={priceLength}
                        label={"ช่วงราคา"}
                        onChange={hdlChangeInput}
                        value={input.priceLength}



                    />

                    <RadioBtn
                        label={"ที่จอดรถ"}
                        name={"parking"}
                        choices={[
                            { text: "มี", value: 1 },
                            { text: "ไม่มี", value: 0 },
                        ]}
                        onChange={onChangeFacility}
                        isChecked={facility.parking.value}
                    />
                    <RadioBtn
                        label={"ไวไฟ"}
                        name={"wifi"}
                        choices={[
                            { text: "ใช่", value: 1 },
                            { text: "ไม่ใช่", value: 0 },
                        ]}
                        onChange={onChangeFacility}
                        isChecked={facility.wifi.value}

                    />

                    <RadioBtn
                        label={"รับบัตรเครดิต"}
                        name={"creditCard"}
                        choices={[
                            { text: "ใช่", value: 1 },
                            { text: "ไม่ใช่", value: 0 },
                        ]}
                        onChange={onChangeFacility}
                        isChecked={facility.creditCard.value}
                    />
                    <RadioBtn
                        label={"แอลกอฮอล์"}
                        name={"alcohol"}
                        choices={[
                            { text: "มี", value: 1 },
                            { text: "ไม่มี", value: 0 },
                        ]}
                        onChange={onChangeFacility}
                        isChecked={facility.alcohol.value}
                    />
                </Card>

                <div className="w-full">
                    <Button name={"บันทึก"} />
                </div>
            </div>
        </form>
    );
}

export default EditBusinessInfo;
