/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Select from "../../components/Select";

const initialValue = {
    name: "",
};
function BussinessInfo() {
    const [input, setInput] = useState("");

    const hdlChangeInput = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    };

    return (
        <div className="w-full ">
            <Card>
                <p className='text-lg'>รายละเอียดธุรกิจ</p>

                <label htmlFor='resName'>ชื่อร้าน :</label>
                <Input
                    placeholder='ชื่อร้านค้า'
                    name='resName'
                    value={input.name}
                    onChange={hdlChangeInput}
                />
                <Select label={'เลือกประเภทธุรกิจ'} />


            </Card>
        </div>
    );
}

export default BussinessInfo;
