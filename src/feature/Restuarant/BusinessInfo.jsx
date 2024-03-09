import React, { useState } from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Select from "../../components/Select";
import HrWithText from "../../components/HrWithText";
import Button from "../../components/Button";
import RadioBtn from "../../components/RadioBtn";
import { useEffect } from "react";
import GoogleMaps from "../../pages/Restaurant/GoogleMapPin"
import useMerchantContext from "../../hooks/useMerchantContext";
import { GISTDA_API_KEY } from "../../constants/constant";
import OpeningHours from "./OpenHours";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { priceLength } from "../../constants/constant"
import { useParams } from "react-router-dom";


function BusinessInfo() {

    const navigate = useNavigate()
    const { merchantId } = useParams()

    console.log(merchantId);
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
        priceLength: "",
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
    const [isOpen, setIsOpen] = useState("everyDay");
    const [searchData, setSearchData] = useState(gistdaPostData)
    const [openingHours, setOpeningHours] = useState({
        monday: { open: '09:00', close: '17:00', closed: false },
        tuesday: { open: '09:00', close: '17:00', closed: false },
        wednesday: { open: '09:00', close: '17:00', closed: false },
        thursday: { open: '09:00', close: '17:00', closed: false },
        friday: { open: '09:00', close: '17:00', closed: false },
        saturday: { open: '09:00', close: '17:00', closed: false },
        sunday: { open: '09:00', close: '17:00', closed: false }
    });

    console.log(priceLength);

    const hdlChangeInput = (e) => {

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
            // hdlSetInputGeoData()
            console.log(input);

            await createRestaurant(input, openingHours)
            toast.success("register successful");

            navigate('/merchant')

        } catch (error) {
            toast.error(error.response?.data.message)
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
                    />

                    <Input
                        placeholder="รายละเอียดร้านค้า"
                        name="subtitle"
                        value={input.subtitle}
                        onChange={hdlChangeInput}
                        label={"รายละเอียดร้านค้า"}
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
                    />

                    <Input
                        placeholder="ชื่อซอยหรือถนน พร้อมบ้านเลขที่"
                        label={"เส้นทาง :"}
                    // name='resName'
                    // value={input.name}
                    // onChange={hdlChangeInput}
                    />

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
                    />

                    <Input
                        placeholder="example@mail.com"
                        label={"อีเมล :"}
                        name="email"
                        value={input.email}
                        onChange={hdlChangeInput}
                    />
                </Card>

                {/* ข้อมูลเพิ่มเติม */}
                <Card>
                    <HrWithText name={"ข้อมูลเพิ่มเติม"} />

                    <OpeningHours
                        label={"วันที่เปิดให้บริการ"}
                        openingHours={openingHours}
                        handleTimeChange={handleTimeChange}
                        handleClosedChange={handleClosedChange}
                    />

                    <Select name={"priceLength"} items={priceLength} label={'ช่วงราคา'} onChange={hdlChangeInput} />


                    <RadioBtn
                        label={"ที่จอดรถ"}
                        name={"parking"}
                        choices={[
                            { text: "จอดข้างถนน", value: "1" },
                            { text: "ที่จอดรถของร้าน", value: "2" },
                            { text: "ไม่มีที่จอดรถ", value: "3" },
                        ]}
                    />

                    <RadioBtn
                        label={"รับบัตรเครดิต"}
                        name={"creditCard"}
                        choices={[
                            { text: "ไม่ระบุ", value: "0" },
                            { text: "ใช่", value: "1" },
                            { text: "ไม่ใช่", value: "2" },
                        ]}
                    />
                    <RadioBtn
                        label={"รับจองล่วงหน้า"}
                        name={"booking"}
                        choices={[
                            { text: "ไม่ระบุ", value: "0" },
                            { text: "ใช่", value: "1" },
                            { text: "ไม่ใช่", value: "2" },
                        ]}
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
