import React from 'react'

function RadioBtn({ label, choices, onChange, name, isChecked }) {


    return (
        <div>
            <label>{label}</label>
            <div className="flex gap-4 items-center">
                {choices?.map((el, index) => (

                    <>
                        {index === 0
                            ? <input
                                key={name + el.value}
                                id={name + el.value}
                                name={name}
                                type="radio"
                                value={el.value}
                                onChange={onChange}
                                checked={isChecked}

                            />
                            :
                            <input
                                key={name + el.value}
                                id={name + el.value}
                                name={name}
                                type="radio"
                                value={el.value}
                                onChange={onChange}
                                checked={!isChecked}

                            />

                        }

                        <label htmlFor={name + el.value}>{el.text}</label>
                    </>
                ))}

            </div>
        </div>
    );
}

export default RadioBtn