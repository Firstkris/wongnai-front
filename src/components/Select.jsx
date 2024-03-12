import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Select({
    label,
    name,
    onChange,
    items,
    value,
    display,
    disabled = false,
    errorMsg,
    isRequired = "required",
    icon,
    def,
    test = true


}) {
    console.log(def);

    const options = items && items.map((el) => (
        <option
            key={el.id}
            id={el[`${name}`]}
            value={el[`${name}`]}

        >
            {el[`${display}NameTh`]}
        </option>

    ))



    return (
        <label className="w-full">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>



            {disabled
                ? (<>
                    <select
                        disabled
                        className="select outline-none border-none rounded-lg w-full "
                    ></select>
                </>)
                : (<>
                    <select
                        onBlur={onChange}
                        name={name}
                        className="select outline-none border-none rounded-lg w-full py-1.5 px-3  mt-2"

                    >

                        <option disabled value="" > {label} </option>

                        {name === "categoryId"
                            ? <>

                                {items && items.map((el) => (
                                    <option
                                        key={el.id}
                                        value={el.id}
                                    >
                                        {el.categoryName}
                                    </option>

                                ))}
                            </>
                            :

                            name === "priceLength"
                                ? <>

                                    {items && items.map((el) => (
                                        <option
                                            key={el.id}
                                            value={el.id}
                                        >
                                            {el.priceLength}
                                        </option>

                                    ))}
                                </>
                                :
                                (
                                    <>
                                        {options}
                                        {/* {items && items.map((el) => (
                                        <option
                                            key={el.id}
                                            id={el[`${name}`]}
                             
                                            value={el[`${name}`]}
                        
                                        >
                                
                                            {el[`${display}NameTh`]}
                                        </option>

                                    ))} */}


                                    </>
                                )}


                    </select>
                </>)
            }


        </label >
    );
}

export default Select