import React, { useState } from 'react'
function DatePicker() {
    const [date, setDate] = useState();
    return (
        <div>
            <h1>Select Date: {date}</h1>
            <input type='date' onChange={e => setDate(e.target.value)}></input>
        </div>
    )
}

export default DatePicker