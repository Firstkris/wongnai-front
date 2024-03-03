import React from 'react'

function RadioBtn({ label, choices, onChange }) {
    return (
        <>
            <label>{label}</label>

            <div className="flex gap-4">
                {choices.map((el) => (
                    <>
                        <input
                            id={el.value}
                            name="openDay"
                            type="radio"
                            value={el.value}
                            onChange={onChange}

                        />
                        <label htmlFor={el.value}>{el.text}</label>
                    </>
                ))}

                {/* <div className="flex gap-2">
                    <input id="everyDay" name="openDay" type="radio" />
                    <label htmlFor="everyDay">เปิดทุกวัน</label>
                </div>

                <div className="flex gap-2">
                    <input id="selectDay" name="openDay" type="radio" />
                    <label htmlFor="selectDay">เลือกวัน</label>
                </div> */}
            </div>
        </>
    );
}

export default RadioBtn