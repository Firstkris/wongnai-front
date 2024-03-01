import React from 'react'

function HrWithText({ name }) {
    return (
        <div className="flex py-4 items-center max-sm:py-2">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-xl ">{name}</span>
            <div className="flex-grow border-t border-gray-300"></div>
        </div>
    )
}

export default HrWithText