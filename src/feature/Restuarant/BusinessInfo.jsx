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

const initialValue = {
    resName: "",
    province: ""
};

function BusinessInfo() {
    const [input, setInput] = useState(initialValue);
    const [isOpen, setIsOpen] = useState("everyDay");
    // const [provinces, setProvince] = useState([]);

    const { fetchProvince, provinces } = useRestaurantContext()

    console.log(provinces);

    const hdlChangeInput = (e) => {
        console.log(e.target.value);
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }));
    };

    const hldChangeRadio = (e) => {
        console.log(e.target.value);
        setIsOpen(e.target.value)
    }

    const hdlSubmit = (e) => {
        e.preventDefault()
        console.log(input);
    }

    // const onSetProvince = async () => {
    //     const provinceData = await fetchProvince()
    //     setProvince(provinceData)
    // }


    useEffect(() => {
        fetchProvince()
    }, [])

    return (
        <form onSubmit={hdlSubmit}>
            <div className="w-full flex flex-col gap-6 ">

                {/* รายละเอียดธุรกิจ */}
                <Card>

                    <HrWithText name={'รายละเอียดธุรกิจ'} />

                    <Input
                        placeholder='ชื่อร้านค้า'
                        name='resName'
                        value={input.resName}
                        onChange={hdlChangeInput}
                        label={'ชื่อร้าน'}
                    />

                    <Select label={'เลือกประเภทธุรกิจ'} />
                    <Select label={'เลือกหมวดหมู่'} />
                    <p>เลือกตำแหน่งจากแผนที่</p>

                </Card>

                {/* ที่อยู่ */}
                <Card>
                    <HrWithText name={'ที่อยู่'} />

                    <Input
                        placeholder='ชื่อซอยหรือถนน พร้อมบ้านเลขที่'
                        label={'ที่อยู่ :'}
                    // name='resName'
                    // value={input.name}
                    // onChange={hdlChangeInput}
                    />

                    <Input
                        placeholder='ชื่อซอยหรือถนน พร้อมบ้านเลขที่'
                        label={"เส้นทาง :"}
                    // name='resName'
                    // value={input.name}
                    // onChange={hdlChangeInput}
                    />

                    <Select label={'จังหวัด'} name={'province'} value={input.province} onChange={hdlChangeInput} items={provinces} />
                    {/* <Select label={'เขต/อำเภอ'} /> */}
                    {/* <Select label={'แขวง/ตำบล'} /> */}
                </Card>

                {/* ข้อมูลติดต่อ */}
                <Card>
                    <HrWithText name={'ข้อมูลติดต่อ'} />

                    <Input
                        placeholder='เบอร์ติดต่อ'
                        label={"เบอร์ติดต่อ :"}
                    // name='resName'
                    // value={input.name}
                    // onChange={hdlChangeInput}
                    />

                    <Input
                        placeholder='example@mail.com'
                        label={'อีเมล :'}
                    // name='resName'
                    // value={input.name}
                    // onChange={hdlChangeInput}
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
