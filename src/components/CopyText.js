import React, { useState } from "react";

function CopyText() {
    const [copyText, setCopyText] = useState('')
    const handleCopy = () => {
        navigator.clipboard.writeText(copyText)
        alert("Copied")
    }
    return (
        <div>
            <input value={copyText} onChange={(e) => setCopyText(e.target.value)} />
            <button onClick={handleCopy}>Copy</button>
        </div>
    );
}
export default CopyText;