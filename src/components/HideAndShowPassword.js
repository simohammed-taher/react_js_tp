import React, { useState } from "react";
function HideAndShowPassword() {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div >
            <input type={show ? "text" : "password"} />
            <label onClick={handleShow}>{show ? "Hide" : "Show"}</label>
        </div>
    );
}
export default HideAndShowPassword;