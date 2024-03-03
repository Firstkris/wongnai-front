import React from 'react'

function Select({ label }) {
    return (

        <label className="w-full">
            <div className="label">
                <span className="label-text">{label}</span>

            </div>
            <select className="py-1.5 px-3 rounded-lg w-full  mt-2">
                <option disabled selected>Pick one</option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
            </select>

        </label>


    )
}

export default Select