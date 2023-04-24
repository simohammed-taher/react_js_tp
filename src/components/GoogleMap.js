import React, { useEffect } from "react";
function GoogleMap() {
    useEffect(() => {
        const iframeData = document.getElementById("iframeId");
        const lon = -7.6014238;
        const lat = 33.5730523;
        iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
    });
    return (
        <div>
            <iframe id="iframeId" height="500px" width="100%"></iframe>
        </div>
    );
}
export default GoogleMap;