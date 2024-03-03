import React from 'react'

function Select({
    label,
    name,
    onChange,
    items,
    value,
    disabled = false,
    errorMsg,
    isRequired = "required",
    icon,
}) {
    console.log(items);
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
                        onChange={onChange}
                        value={value}
                        name={name}
                        className="select outline-none border-none rounded-lg w-full py-1.5 px-3  mt-2"
                    // required={isRequired}
                    >

                        <option disabled value="" > {label} </option>

                        {items && items.map((el) => (
                            <option key={el.id} value={el[`${name}Code`]}>{el[`${name}Code`]}  {el[`${name}NameTh`]}</option>
                        ))}
                    </select>
                </>)}



            {/* <select className="py-1.5 px-3 rounded-lg w-full  mt-2">
                <option disabled selected>
                    Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
            </select> */}
        </label>
    );
}

export default Select