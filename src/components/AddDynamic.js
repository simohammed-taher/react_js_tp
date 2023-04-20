import React, { useState } from 'react';

function AddDynamic() {
    const [val, setVal] = useState([]);
    const handleAdd = () => {
        const abc = [...val, ''];
        setVal(abc);
    };
    const handleChange = (onChangeValue, i) => {
        const inputData = [...val];
        inputData[i] = onChangeValue.target.value;
        setVal(inputData);
    };
    const handleDelete = (i) => {
        const deleteVal = [...val];
        deleteVal.splice(i, 1);
        setVal(deleteVal);
    };

    return (
        <div>
            <button onClick={() => handleAdd()}>Add</button>
            {val.map((data, i) => {
                return (
                    <div key={i}>
                        <input onChange={e => handleChange(e, i)} value={data} />
                        <button onClick={() => handleDelete(i)}>X</button>
                    </div>
                );
            })}
        </div>
    );
}

export default AddDynamic;
