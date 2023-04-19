import React from 'react'
import { useState } from 'react';

function Select() {
    const [selects, setSelects] = useState();
    return (
        <div>
            <h1>{selects}</h1>
            <select value={selects} onChange={e => setSelects(e.target.value)}>
                <option value="casa" >casa</option>
                <option value="settat" >settat</option>
                <option value="rabat" >rabat</option>
            </select>
        </div>
    )
}

export default Select