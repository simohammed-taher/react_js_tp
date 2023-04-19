// makhdamch bi da3i lmaktaba taa multi-select rayr mo3arafa

import React, { useState } from 'react';
import MultiSelect from "react-multiple-select-dropdown-lite";
import 'react-multi-select-component/dist/index.css';

function MultiSelect() {
    const [value, setValue] = useState('');
    const handleOnchange = val => {
        setValue(val);
    }
    const options = [
        { label: 'Grapes 🍇', value: 'grapes' },
        { label: 'Mango 🥭', value: 'mango' },
        { label: 'Strawberry 🍓', value: 'strawberry', disabled: true },
    ];


    return (
        <div>
            <h1>Select Fruits {value}</h1>
            <MultiSelect
                options={options}
                onChange={handleOnchange}
            />
        </div>
    );
}

export default MultiSelect;
