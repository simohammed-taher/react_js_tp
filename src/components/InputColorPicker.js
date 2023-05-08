import React, { useState } from 'react'

function InputColorPicker() {
    const [color, setColor] = useState("")
    return (
        <div>
            <input type="color" onChange={(e) => setColor(e.target.value)} />
            <h1>Color est: {color}</h1>
        </div>
    )
}

export default InputColorPicker