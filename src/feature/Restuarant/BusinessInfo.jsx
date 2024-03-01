import React, { useState } from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Select from "../../components/Select";
import HrWithText from "../../components/HrWithText";
import Button from "../../components/Button";
import RadioBtn from "../../components/RadioBtn";
import WeekDays from "./WeekDays";

const initialValue = {
    name: "",
};
function BusinessInfo() {
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState("");

    const hdlChangeInput = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    };

    const hldChangeRadio = (e) => {
        console.log(e.target.value);
        setIsOpen(e.target.value)
    }

    return (
        <form>
            <div className="w-full flex flex-col gap-6 ">

                {/* รายละเอียดธุรกิจ */}
                <Card>

                    <HrWithText name={'รายละเอียดธุรกิจ'} />

                    <Input
                        placeholder='ชื่อร้านค้า'
                        name='resName'
                        value={input.name}
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

                    <Select label={'จังหวัด'} />
                    <Select label={'เขต/อำเภอ'} />
                    <Select label={'แขวง/ตำบล'} />
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

                    <Select label={'จังหวัด'} />
                    <Select label={'เขต/อำเภอ'} />
                    <Select label={'แขวง/ตำบล'} />
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
                        ]} />
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
                    <Input
                        placeholder='example@mail.com'
                        label={"อีเมล :"}
                    // name='resName'
                    // value={input.name}
                    // onChange={hdlChangeInput}
                    />

                    <Select label={'จังหวัด'} />
                    <Select label={'เขต/อำเภอ'} />
                    <Select label={'แขวง/ตำบล'} />
                </Card>

                <div className="w-full">
                    <Button name={'บันทึก'} />
                </div>

            </div>
        </form>

    );
}

export default BusinessInfo;
