import React from 'react'
import Input from '../../components/Input'


function WeekDays({ label }) {
    return (
        <>
            <div className="grid grid-cols-4 items-center">
                <div className="flex gap-4 col-span-1 ">
                    <input id={label} value={label} type="checkbox"></input>
                    <label htmlFor={label}>{label}</label>
                </div>
                <div className="grid grid-cols-2 content-between col-span-3 gap-6  ">
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
                </div>
            </div>
        </>
    )
}

export default WeekDays