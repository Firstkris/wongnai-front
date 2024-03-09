import React, { useState } from 'react';
import Input from '../../components/Input';

const OpeningHours = ({ label }) => {
    // Initialize state for open, close times, and closed status for each day of the week
    const [openingHours, setOpeningHours] = useState({
        Monday: { open: '09:00', close: '17:00', closed: false },
        Tuesday: { open: '09:00', close: '17:00', closed: false },
        Wednesday: { open: '09:00', close: '17:00', closed: false },
        Thursday: { open: '09:00', close: '17:00', closed: false },
        Friday: { open: '09:00', close: '17:00', closed: false },
        Saturday: { open: '09:00', close: '17:00', closed: false },
        Sunday: { open: '09:00', close: '17:00', closed: false }
    });

    // Function to handle changes to opening and closing times
    const handleTimeChange = (day, field, value) => {
        setOpeningHours(prevState => ({
            ...prevState,
            [day]: {
                ...prevState[day],
                [field]: value
            }
        }));
    };

    // Function to handle changes to closed status
    const handleClosedChange = (day) => {
        setOpeningHours(prevState => ({
            ...prevState,
            [day]: {
                ...prevState[day],
                closed: !prevState[day].closed
            }
        }));
    };

    return (
        <>
            {/* <h2>Opening Hours</h2> */}
            <label>{label}</label>
            {Object.entries(openingHours).map(([day, times]) => (
                <div key={day} className='grid grid-cols-8 items-center'>
                    <h3 className='col-span-1'>{day}</h3>
                    <div className='flex items-center gap-6'>

                        <label className='flex items-center gap-2'>
                            Closed:
                            <input
                                type="checkbox"
                                checked={times.closed}
                                onChange={() => handleClosedChange(day)}

                            />
                        </label>
                        {!times.closed && (
                            <div className='flex gap-4'>
                                <label className='flex items-center gap-2 '>
                                    Open:
                                    <Input
                                        type="time"
                                        value={times.open}
                                        onChange={(e) => handleTimeChange(day, 'open', e.target.value)}
                                    />
                                </label>
                                <label className='flex items-center gap-2'>
                                    Close:
                                    <Input
                                        type="time"
                                        value={times.close}
                                        onChange={(e) => handleTimeChange(day, 'close', e.target.value)}
                                    />
                                </label>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default OpeningHours;