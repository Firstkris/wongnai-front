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


import { defaultFacility, priceLength } from "../../constants/constant"
import { GISTDA_API_KEY } from "../../constants/constant";
import useRestaurantContext from "../../hooks/useRestaurantContext";
import { Loading } from "../../components/Loading";


function BusinessInfo() {

    const navigate = useNavigate()
    const { merchantId } = useParams()

    const {
        fetchCategory,
        provinces,
        district,
        subDistrict,
        category,
        createRestaurant,
        fetchAreaGeoData,
        getGeoDataFromGistda
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
    const [facility, setFacility] = useState(defaultFacility)

    const { isLoading, setLoading } = useRestaurantContext()

    const hdlChangeInput = (e) => {

        if (e.target.name === "mobile") {
            setInput((prv => ({ ...prv, [e.target.name]: e.target.value })))
        } else {

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
                    [day[0]]: { open: everydayTime.open, close: everydayTime.close, closed: false },
                }),
                {}
            )
        );

    }

    console.log(facility);

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
            const res = await createRestaurant(input, openingHours, facility)
            toast.success("register successful");
            setLoading(true)

            navigate(`/merchant/${merchantId}/${res.data.newRestaurant.id}`)

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
        if (searchData.lat === 0) return
        getGeoDataFromGistda(searchData)

    }, [searchData.lat, searchData.lng])

    useEffect(() => {
        hdlSetInputGeoData();
    }, [subDistrict?.[0]?.subdistrictCode]);

    console.log(input);

    if (isLoading) return <Loading />

    return (
        <form onSubmit={hdlSubmit}>
            <div className={`w-full flex flex-col gap-6`}>
                {/* รายละเอียดธุรกิจ */}
                <Card>
                    <HrWithText name={"รายละเอียดธุรกิจ"} />

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

                    <GoogleMaps hdlSetLatLng={hdlSetLatLng} />

                    <Input
                        placeholder="ชื่อซอยหรือถนน พร้อมบ้านเลขที่"
                        label={"ที่อยู่ :"}
                        name="address"
                        value={input.address}
                        onChange={hdlChangeInput}
                        errorMessage={error.address}
                    />

                    {/* <Input
                        placeholder="ชื่อซอยหรือถนน พร้อมบ้านเลขที่"
                        label={"เส้นทาง :"}
                    // name='resName'
                    // value={input.name}
                    // onChange={hdlChangeInput}
                    /> */}

                    <Select
                        label={"จังหวัด"}
                        name={"provinceCode"}
                        display={"province"}
                        value={input.provinceCode}
                        onChange={hdlChangeInput}
                        items={provinces}
                    />
                    {/* {input.provinceCode && */}
                    <Select
                        label={"เขต/อำเภอ"}
                        name={"districtCode"}
                        display={"district"}
                        value={input.districtCode}
                        onChange={hdlChangeInput}
                        items={district}
                    />
                    {/* } */}
                    {/* {input.districtCode && */}
                    <Select
                        label={"แขวง/ตำบล"}
                        name={"subdistrictCode"}
                        display={"subdistrict"}
                        value={input.subdistrictCode}
                        onChange={hdlChangeInput}
                        items={subDistrict}
                    />

                    {/* } */}
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
                    />

                    <RadioBtn
                        label={"ที่จอดรถ"}
                        name={"parking"}
                        choices={[
                            { text: "มี", value: 1 },
                            { text: "ไม่มี", value: 0 },
                        ]}
                        onChange={onChangeFacility}
                    />
                    <RadioBtn
                        label={"ไวไฟ"}
                        name={"wifi"}
                        choices={[
                            { text: "ใช่", value: 1 },
                            { text: "ไม่ใช่", value: 0 },
                        ]}
                        onChange={onChangeFacility}
                    />

                    <RadioBtn
                        label={"รับบัตรเครดิต"}
                        name={"creditCard"}
                        choices={[
                            { text: "ใช่", value: 1 },
                            { text: "ไม่ใช่", value: 0 },
                        ]}
                        onChange={onChangeFacility}
                    />
                    <RadioBtn
                        label={"แอลกอฮอล์"}
                        name={"alcohol"}
                        choices={[
                            { text: "มี", value: 1 },
                            { text: "ไม่มี", value: 0 },
                        ]}
                        onChange={onChangeFacility}
                    />
                </Card>

                <div className="w-full">
                    <Button name={"บันทึก"} />
                </div>
            </div>
        </form>
    );
}

export default BusinessInfo;
