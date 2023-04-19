import React, { useState } from 'react';

function Checkbox() {
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(true);
    const handleChange = (data) => {
        if (data === 'first') {
            if (first === true) {
                console.log(data, 'our value is first');
            }
            setFirst(!first);
        }
        if (data === 'second') {
            if (second === true) {
                console.log(data, 'our value is second');
            }
            setSecond(!second);
        }
    };
    return (
        <div>
            <input type="checkbox" checked={first} onChange={() => handleChange('first')} />First
            <input type="checkbox" checked={second} onChange={() => handleChange('second')} />Second
        </div>
    );
}

export default Checkbox;
