import React, { useState } from 'react'

function OnOff() {
    const [ToggleButton, setToggleButton] = useState(false);
    const handleClick = () => {
        setToggleButton(!ToggleButton)
        console.log(ToggleButton, "value");
    }
    return (
        <div className='App'>
            <div onClick={handleClick} className='toggle'>
                {ToggleButton ?
                    <div className='toggle_left'></div>
                    :
                    <div className='toggle_right'></div>
                }

            </div>
        </div>
    )
}

export default OnOff