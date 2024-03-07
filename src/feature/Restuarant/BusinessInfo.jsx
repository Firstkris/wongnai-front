import React, { useState } from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Select from "../../components/Select";
import HrWithText from "../../components/HrWithText";
import Button from "../../components/Button";
import RadioBtn from "../../components/RadioBtn";
import WeekDays from "./WeekDays";
import useRestaurantContext from "../../hooks/useRestaurantContext";
import { useEffect } from "react";
import GoogleMaps from "../../pages/Restaurant/GoogleMapPin"
import useMerchantContext from "../../hooks/useMerchantContext";
import { GISTDA_API_KEY } from "../../constants/constant";



function BusinessInfo() {


    const {
        fetchProvince,
        fetchCategory,
        provinces,
        district,
        fetchDistrict,
        subDistrict,
        fetchSubDistrict,
        category,
        createRestaurant,
        fetchAreaGeoData,
        getGeoDataFromGistda
    } = useMerchantContext();

    const initialValue = {
        merchantId: 1,
        restaurantName: "",
        subtitle: "",
        provinceCode: "",
        districtCode: "",
        subdistrictCode: "",
        categoryId: "",
        mobile: "",
        email: "",
        priceLength: "0-100",
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

    // console.log(provinces);
    // console.log(provinces?.[0]?.provinceCode);
    // console.log(gistdaPostData);

    const [input, setInput] = useState(initialValue);
    const [isOpen, setIsOpen] = useState("everyDay");
    const [searchData, setSearchData] = useState(gistdaPostData)


    // console.log("mapPosition", mapPosition);


    const hdlChangeInput = (e) => {
        console.dir(e.target)

        if (e.target.name === "mobile") {
            setInput((prv => ({ ...prv, [e.target.name]: e.target.value })))
        } else {

            setInput(prv => ({ ...prv, [e.target.name]: +e.target.value ? +e.target.value : e.target.value }));
        }
    };

    const hldChangeRadio = (e) => {
        console.log(e.target.value);
        setIsOpen(e.target.value)
    }

    const hdlSubmit = async (e) => {
        e.preventDefault()
        // hdlSetInputGeoData()
        console.log(input);

        // await createRestaurant(input)
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


    useEffect(() => {
        fetchCategory()
    }, [])

    useEffect(() => {
        if (searchData.lat === 0) return
        getGeoDataFromGistda(searchData)

    }, [searchData.lat, searchData.lng])

    useEffect(() => { hdlSetInputGeoData() }, [subDistrict?.[0]?.subdistrictCode])

    console.log(input);
    return (
        <form onSubmit={hdlSubmit}>
            <div className="w-full flex flex-col gap-6 ">

                {/* รายละเอียดธุรกิจ */}
                <Card>
                    <HrWithText name={'รายละเอียดธุรกิจ'} />

                    <Input
                        placeholder='ชื่อร้านค้า'
                        name='restaurantName'
                        value={input.restaurantName}
                        onChange={hdlChangeInput}
                        label={'ชื่อร้าน'}
                    />

                    <Input
                        placeholder='รายละเอียดร้านค้า'
                        name='subtitle'
                        value={input.subtitle}
                        onChange={hdlChangeInput}
                        label={'รายละเอียดร้านค้า'}
                    />

                    {/* <Select label={'เลือกประเภทธุรกิจ'} /> */}
                    <Select label={'เลือกหมวดหมู่'} name={"categoryId"} value={input.categoryId} items={category} onChange={hdlChangeInput} />


                </Card>

                {/* ที่อยู่ */}
                <Card>
                    <HrWithText name={'ที่อยู่'} />

                    <p>เลือกตำแหน่งจากแผนที่</p>

                    <GoogleMaps hdlSetLatLng={hdlSetLatLng} />

                    <Input
                        placeholder='ชื่อซอยหรือถนน พร้อมบ้านเลขที่'
                        label={'ที่อยู่ :'}
                        name='address'
                        value={input.address}
                        onChange={hdlChangeInput}
                    />

                    <Input
                        placeholder='ชื่อซอยหรือถนน พร้อมบ้านเลขที่'
                        label={"เส้นทาง :"}
                    // name='resName'
                    // value={input.name}
                    // onChange={hdlChangeInput}
                    />

                    <Select label={'จังหวัด'} name={'provinceCode'} display={'province'} value={input.provinceCode} onChange={hdlChangeInput} items={provinces} />
                    {/* {input.provinceCode && */}
                    <Select label={'เขต/อำเภอ'} name={'districtCode'} display={'district'} value={input.districtCode} onChange={hdlChangeInput} items={district} />
                    {/* } */}
                    {/* {input.districtCode && */}
                    <Select label={'แขวง/ตำบล'} name={'subdistrictCode'} display={'subdistrict'} value={input.subdistrictCode} onChange={hdlChangeInput} items={subDistrict} />

                    {/* } */}

                </Card>

                {/* ข้อมูลติดต่อ */}
                <Card>
                    <HrWithText name={'ข้อมูลติดต่อ'} />

                    <Input
                        placeholder='เบอร์ติดต่อ'
                        label={"เบอร์ติดต่อ :"}
                        name='mobile'
                        value={input.mobile}
                        onChange={hdlChangeInput}
                    />

                    <Input
                        placeholder='example@mail.com'
                        label={'อีเมล :'}
                        name='email'
                        value={input.email}
                        onChange={hdlChangeInput}
                    />

                </Card>

                {/* ข้อมูลเพิ่มเติม */}
                <Card>
                    <HrWithText name={'ข้อมูลเพิ่มเติม'} />

                    {/* Radio Openday */}
                    <RadioBtn
                        onChange={hldChangeRadio}
                        label={'วันที่เปิดให้บริการ'}
                        choices={[
                            { text: 'เปิดทุกวัน', value: "everyDay" },
                            { text: 'เลือกวันเปิด', value: "selectDay" },
                        ]}
                        name={'openDay'}

                    />
                    {isOpen === "everyDay" ?
                        <>
                            <Input
                                type="time"
                                name='open'
                                label="เวลาเปิด"
                            // value={input.name}
                            // onChange={hdlChangeInput}
                            />

                            <Input
                                type="time"
                                name='open'
                                label="เวลาปิด"
                            // value={input.name}
                            // onChange={hdlChangeInput}
                            />
                        </>
                        : <>
                            <WeekDays label={'Monday'} />
                            <WeekDays label={'Tuesday'} />
                            <WeekDays label={'Wednesday'} />
                            <WeekDays label={'Thursday'} />
                            <WeekDays label={'Friday'} />
                            <WeekDays label={'Saturday'} />
                            <WeekDays label={'Sunday'} />
                        </>
                    }

                    <RadioBtn
                        label={'ที่จอดรถ'}
                        name={'parking'}
                        choices={[
                            { text: 'จอดข้างถนน', value: "1" },
                            { text: 'ที่จอดรถของร้าน', value: "2" },
                            { text: 'ไม่มีที่จอดรถ', value: "3" },
                        ]}
                    />

                    <RadioBtn
                        label={'รับบัตรเครดิต'}
                        name={'creditCard'}
                        choices={[
                            { text: 'ไม่ระบุ', value: "0" },
                            { text: 'ใช่', value: "1" },
                            { text: 'ไม่ใช่', value: "2" },
                        ]}
                    />
                    <RadioBtn
                        label={'รับจองล่วงหน้า'}
                        name={'booking'}
                        choices={[
                            { text: 'ไม่ระบุ', value: "0" },
                            { text: 'ใช่', value: "1" },
                            { text: 'ไม่ใช่', value: "2" },
                        ]}
                    />



                </Card>

                <div className="w-full">
                    <Button name={'บันทึก'} />
                </div>

            </div>
        </form>

    );
}

export default BusinessInfo;
